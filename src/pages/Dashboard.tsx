import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LogOut, CheckCircle, Clock, XCircle, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { User, Session } from '@supabase/supabase-js';

type Profile = {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  platform_type: string | null;
  approval_status: string;
  company_name: string | null;
  website_url: string | null;
  monthly_volume: string | null;
  business_description: string | null;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    platform_type: '',
    company_name: '',
    website_url: '',
    monthly_volume: '',
    business_description: ''
  });

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
  }, [navigate]);

  const loadUserProfile = async (userId: string) => {
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
  };

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
        title: "Application Submitted!",
        description: "Your platform application has been submitted for review. We'll notify you once it's approved.",
      });
      
      // Reload profile
      loadUserProfile(user.id);
    } catch (error: any) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit your application.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
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
            AD<span className="text-gradient">XYZ</span>
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
        {/* Status Banner */}
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
              
              {profile.approval_status === 'rejected' && (
                <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-destructive text-sm">
                    Your application was not approved. Please contact support for more information or submit a new application.
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
                  disabled={profile?.approval_status === 'approved'}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your platform type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ssp">
                      <div>
                        <div className="font-medium">Supply Side Platform (SSP)</div>
                        <div className="text-xs text-muted-foreground">For publishers looking to sell ad inventory</div>
                      </div>
                    </SelectItem>
                    <SelectItem value="dsp">
                      <div>
                        <div className="font-medium">Demand Side Platform (DSP)</div>
                        <div className="text-xs text-muted-foreground">For advertisers looking to buy ad inventory</div>
                      </div>
                    </SelectItem>
                    <SelectItem value="licensed_ad_network">
                      <div>
                        <div className="font-medium">Licensed Ad Network</div>
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
                {isSaving ? 'Saving...' : (profile?.platform_type ? 'Update Application' : 'Submit Application')}
              </Button>
            </form>
          </CardContent>
        </Card>

        {profile?.approval_status === 'approved' && (
          <Card className="mt-8 gradient-card backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle>Platform Access</CardTitle>
              <CardDescription>
                Your account is approved! Access your platform features below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" size="lg" className="h-20">
                  <div className="text-center">
                    <div className="font-semibold">Campaign Manager</div>
                    <div className="text-xs text-muted-foreground">Manage your campaigns and targeting</div>
                  </div>
                </Button>
                <Button variant="outline" size="lg" className="h-20">
                  <div className="text-center">
                    <div className="font-semibold">Analytics Dashboard</div>
                    <div className="text-xs text-muted-foreground">View performance metrics and reports</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;