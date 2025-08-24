import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import type { User, Session } from '@supabase/supabase-js';

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      // If user is signed in and verified, redirect to dashboard
      if (session?.user && !session.user.email_confirmed_at) {
        toast({
          title: "Check your email",
          description: "Please check your email and click the verification link to continue.",
        });
      } else if (session?.user) {
        navigate('/dashboard');
      }
    });

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        navigate('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const redirectUrl = `${window.location.origin}/dashboard`;
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        toast({
          title: "Welcome back!",
          description: "You've been successfully logged in.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message || "Failed to sign in. Please check your credentials.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Password Error",
        description: "Passwords don't match.",
        variant: "destructive",
      });
      return;
    }

    if (signupData.password.length < 6) {
      toast({
        title: "Password Error", 
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const redirectUrl = `${window.location.origin}/dashboard`;
      
      const { data, error } = await supabase.auth.signUp({
        email: signupData.email,
        password: signupData.password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: signupData.fullName,
          }
        }
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        if (!data.user.email_confirmed_at) {
          toast({
            title: "Check your email",
            description: "We've sent you a verification link. Please check your email to complete registration.",
          });
        } else {
          toast({
            title: "Account Created!",
            description: "Welcome to Adnexus. Complete your profile to get started.",
          });
        }
      }
    } catch (error: any) {
      toast({
        title: "Signup Failed",
        description: error.message || "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft size={16} />
            Back to home
          </Link>
          
          <div className="text-2xl font-bold mb-2">
            Ad<span className="text-gradient">nexus</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Welcome to Adnexus</h1>
          <p className="text-muted-foreground">
            Join our programmatic advertising platform
          </p>
        </div>

        {/* Auth Forms */}
        <Card className="gradient-card backdrop-blur-sm border-primary/20">
          <CardHeader className="text-center pb-2">
            <CardTitle>Get Started</CardTitle>
            <CardDescription>
              Create your account or sign in to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signup" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="login">Login</TabsTrigger>
              </TabsList>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                  </div>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                  </div>
                  <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                  </div>
                  <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Auth;