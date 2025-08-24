import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LogOut, CheckCircle, Clock, XCircle, Settings, DollarSign, CreditCard, BarChart3 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { User, Session } from '@supabase/supabase-js';

type Profile = {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  platform_type: string | null;
  approval_status: string;
  subscription_status: string;
  stripe_customer_id: string | null;
  company_name: string | null;
  website_url: string | null;
  monthly_volume: string | null;
  business_description: string | null;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isCheckingSubscription, setIsCheckingSubscription] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    subscribed: boolean;
    subscription_status: string;
    subscription_end?: string;
  }>({ subscribed: false, subscription_status: 'inactive' });
  const [lastSubscriptionCheck, setLastSubscriptionCheck] = useState<number>(0);
  
  const [formData, setFormData] = useState({
    platform_type: '',
    company_name: '',
    website_url: '',
    monthly_volume: '',
    business_description: ''
  });

  useEffect(() => {
    // Check for payment success/failure
    const paymentStatus = searchParams.get('payment');
    if (paymentStatus === 'success') {
      toast({
        title: "Payment Successful!",
        description: "Your subscription has been activated. Welcome to Adnexus Enterprise!",
      });
      // Clear URL params
      window.history.replaceState({}, '', '/dashboard');
    } else if (paymentStatus === 'cancelled') {
      toast({
        title: "Payment Cancelled",
        description: "Your payment was cancelled. You can try again anytime.",
        variant: "destructive",
      });
      window.history.replaceState({}, '', '/dashboard');
    }
  }, [searchParams, toast]);

  const checkSubscriptionStatus = useCallback(async (force: boolean = false) => {
    if (!session) return;
    
    // Rate limit: Check only once per minute unless forced
    const now = Date.now();
    const timeSinceLastCheck = now - lastSubscriptionCheck;
    if (!force && timeSinceLastCheck < 60000) {
      return; // Skip if less than 1 minute since last check
    }
    
    setIsCheckingSubscription(true);
    setLastSubscriptionCheck(now);
    
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;
      
      setSubscriptionStatus(data);
    } catch (error) {
      console.error('Error checking subscription:', error);
    } finally {
      setIsCheckingSubscription(false);
    }
  }, [session, lastSubscriptionCheck]);

  const loadUserProfile = useCallback(async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setProfile(data);
        setFormData({
          platform_type: data.platform_type || '',
          company_name: data.company_name || '',
          website_url: data.website_url || '',
          monthly_volume: data.monthly_volume || '',
          business_description: data.business_description || ''
        });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      toast({
        title: "Error",
        description: "Failed to load your profile.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        navigate('/auth');
      } else {
        // Defer profile loading to avoid deadlocks
        setTimeout(() => {
          loadUserProfile(session.user.id);
        }, 0);
      }
    });

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        navigate('/auth');
      } else {
        loadUserProfile(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, loadUserProfile]);

  // Check subscription status when profile loads
  useEffect(() => {
    if (profile && session) {
      checkSubscriptionStatus();
    }
  }, [profile, session, checkSubscriptionStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user?.id) return;
    
    setIsSaving(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          platform_type: formData.platform_type,
          company_name: formData.company_name,
          website_url: formData.website_url,
          monthly_volume: formData.monthly_volume,
          business_description: formData.business_description,
          approval_status: 'pending'
        })
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      toast({
        title: "Information Submitted!",
        description: "Your information has been saved. To proceed with our services, please activate Adnexus Enterprise.",
      });
      
      // Reload profile
      loadUserProfile(user.id);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit your information.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleStartSubscription = async () => {
    if (!session) return;

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      // Open Stripe checkout in a new tab
      window.open(data.url, '_blank');
    } catch (error) {
      console.error('Error creating checkout:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to start subscription process.",
        variant: "destructive",
      });
    }
  };

  const handleManageSubscription = async () => {
    if (!session) return;

    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      // Open Stripe customer portal in a new tab
      window.open(data.url, '_blank');
    } catch (error) {
      console.error('Error opening customer portal:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to open billing portal.",
        variant: "destructive",
      });
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/auth');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-success" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-destructive" />;
      default:
        return <Clock className="w-5 h-5 text-warning" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Approved';
      case 'rejected':
        return 'Rejected';
      default:
        return 'Pending Review';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-success';
      case 'rejected':
        return 'text-destructive';
      default:
        return 'text-warning';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            Ad<span className="text-gradient">nexus</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {profile?.full_name || user?.email}
            </span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut size={16} />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Subscription Status Banner */}
        <Card className="mb-8 gradient-card backdrop-blur-sm border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Adnexus Enterprise Status</h3>
                  <p className="text-sm text-muted-foreground">
                    {subscriptionStatus.subscribed ? (
                      <span className="text-success">Active - Adnexus Enterprise subscription confirmed</span>
                    ) : (
                      <span className="text-warning">Inactive - Adnexus Enterprise required for service access</span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => checkSubscriptionStatus(true)}
                  disabled={isCheckingSubscription}
                >
                  {isCheckingSubscription ? 'Checking...' : 'Refresh Status'}
                </Button>
                {subscriptionStatus.subscribed ? (
                  <Button variant="outline" size="sm" onClick={handleManageSubscription}>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Manage Billing
                  </Button>
                ) : (
                  <Button variant="cta" size="sm" onClick={handleStartSubscription}>
                    <DollarSign className="w-4 h-4 mr-2" />
                    Activate Adnexus Enterprise
                  </Button>
                )}
              </div>
            </div>
            
            {!subscriptionStatus.subscribed && (
              <div className="mt-4 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <p className="text-warning text-sm font-medium">
                  💡 Adnexus Enterprise ensures dedicated support and premium service delivery. 
                  Activate Adnexus Enterprise to begin working with our team.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Only show form and features if user has active subscription */}
        {subscriptionStatus.subscribed ? (
          <>
            {/* Status Banner for subscribed users */}
            {profile && profile.platform_type && (
              <Card className="mb-8 gradient-card backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(profile.approval_status)}
                    <div>
                      <h3 className="font-semibold">Application Status</h3>
                      <p className="text-sm text-muted-foreground">
                        Your {profile.platform_type?.toUpperCase()} application is{' '}
                        <span className={getStatusColor(profile.approval_status)}>
                          {getStatusText(profile.approval_status).toLowerCase()}
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  {profile.approval_status === 'approved' && (
                    <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg">
                      <p className="text-success text-sm font-medium">
                        🎉 Congratulations! Your account has been approved. You can now access all platform features.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Platform Selection Form */}
            <Card className="gradient-card backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings size={20} />
                  Platform Setup
                </CardTitle>
                <CardDescription>
                  {!profile?.platform_type 
                    ? "Choose your platform type and provide your business details to get started."
                    : "Update your platform information and business details."
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Platform Type *
                    </label>
                    <Select 
                      value={formData.platform_type} 
                      onValueChange={(value) => setFormData({ ...formData, platform_type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your platform type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SSP">
                          <div>
                            <div className="font-medium">Supply Side Platform (SSP)</div>
                            <div className="text-xs text-muted-foreground">For publishers looking to sell ad inventory</div>
                          </div>
                        </SelectItem>
                        <SelectItem value="DSP">
                          <div>
                            <div className="font-medium">Demand Side Platform (DSP)</div>
                            <div className="text-xs text-muted-foreground">For advertisers looking to buy ad inventory</div>
                          </div>
                        </SelectItem>
                        <SelectItem value="ADX">
                          <div>
                            <div className="font-medium">Ad Exchange (ADX)</div>
                            <div className="text-xs text-muted-foreground">For established ad networks and agencies</div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="Your company name"
                        value={formData.company_name}
                        onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Website URL
                      </label>
                      <Input
                        type="url"
                        placeholder="https://yourwebsite.com"
                        value={formData.website_url}
                        onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Monthly Volume
                    </label>
                    <Select 
                      value={formData.monthly_volume} 
                      onValueChange={(value) => setFormData({ ...formData, monthly_volume: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your monthly volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1M">0 - 1M impressions</SelectItem>
                        <SelectItem value="1M-10M">1M - 10M impressions</SelectItem>
                        <SelectItem value="10M-50M">10M - 50M impressions</SelectItem>
                        <SelectItem value="50M-100M">50M - 100M impressions</SelectItem>
                        <SelectItem value="100M+">100M+ impressions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Business Description
                    </label>
                    <Textarea
                      placeholder="Tell us about your business, advertising goals, and how you plan to use our platform..."
                      value={formData.business_description}
                      onChange={(e) => setFormData({ ...formData, business_description: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full" 
                    disabled={isSaving || !formData.platform_type || !formData.company_name}
                  >
                    {isSaving ? 'Saving...' : (profile?.platform_type ? 'Update Information' : 'Submit Information')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Platform Access for approved users */}
            {profile?.approval_status === 'approved' && (
              <Card className="mt-8 gradient-card backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle>Platform Access</CardTitle>
                  <CardDescription>
                    Your account is approved! Access your platform features below.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" size="lg" className="h-20">
                      <div className="text-center">
                        <BarChart3 className="w-6 h-6 mx-auto mb-2" />
                        <div className="font-semibold">Campaign Manager</div>
                        <div className="text-xs text-muted-foreground">Manage campaigns and targeting</div>
                      </div>
                    </Button>
                    <Button variant="outline" size="lg" className="h-20">
                      <div className="text-center">
                        <Settings className="w-6 h-6 mx-auto mb-2" />
                        <div className="font-semibold">Analytics Dashboard</div>
                        <div className="text-xs text-muted-foreground">View performance metrics</div>
                      </div>
                    </Button>
                    <Button variant="outline" size="lg" className="h-20" onClick={handleManageSubscription}>
                      <div className="text-center">
                        <CreditCard className="w-6 h-6 mx-auto mb-2" />
                        <div className="font-semibold">Billing Portal</div>
                        <div className="text-xs text-muted-foreground">Manage subscription</div>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        ) : (
          /* Contact form for non-subscribers */
          <Card className="gradient-card backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings size={20} />
                Contact Information
              </CardTitle>
              <CardDescription>
                Tell us about your business and what you'd like to explore with Adnexus. 
                Activating Adnexus Enterprise will unlock full platform access.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Interest Area *
                  </label>
                  <Select 
                    value={formData.platform_type} 
                    onValueChange={(value) => setFormData({ ...formData, platform_type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="What would you like to connect with Adnexus about?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SSP">Supply Side Platform (SSP) - Publisher Solutions</SelectItem>
                      <SelectItem value="DSP">Demand Side Platform (DSP) - Advertiser Solutions</SelectItem>
                      <SelectItem value="ADX">Ad Exchange (ADX) - Network & Agency Solutions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Your company name"
                      value={formData.company_name}
                      onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Website URL
                    </label>
                    <Input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.website_url}
                      onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Business Description
                  </label>
                  <Textarea
                    placeholder="Tell us about your business, advertising goals, and what you'd like to explore with Adnexus..."
                    value={formData.business_description}
                    onChange={(e) => setFormData({ ...formData, business_description: e.target.value })}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSaving || !formData.platform_type || !formData.company_name}
                >
                  {isSaving ? 'Saving...' : 'Submit Contact Information'}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;