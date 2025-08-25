import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
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
  const [authStep, setAuthStep] = useState<'form' | 'verification'>('form');
  const [verificationCode, setVerificationCode] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  
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
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error instanceof Error ? error.message : "Failed to sign in. Please check your credentials.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error instanceof Error ? error.message : "Failed to sign in with Google.",
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
        setSubmittedEmail(signupData.email);
        setAuthStep('verification');
        toast({
          title: "Account created!",
          description: "Check your email for the verification code.",
        });
      }
    } catch (error) {
      toast({
        title: "Signup Failed",
        description: error instanceof Error ? error.message : "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate verification process
      if (verificationCode.length === 6) {
        toast({
          title: "Email verified!",
          description: "Your account has been activated. Redirecting to dashboard...",
        });
        
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        throw new Error("Please enter a valid 6-digit code");
      }
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: error instanceof Error ? error.message : "Invalid verification code.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyDemoCode = () => {
    const demoCode = "123456";
    navigator.clipboard.writeText(demoCode);
    setVerificationCode(demoCode);
    toast({
      title: "Demo code copied!",
      description: "Use 123456 to continue with the demo.",
    });
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
          
          <div className="text-3xl font-bold mb-2">
            Ad<span className="text-gradient">nexus</span>
          </div>
          <p className="text-muted-foreground">
            Enterprise programmatic advertising platform
          </p>
        </div>

        {/* Auth Forms */}
        <Card className="gradient-card backdrop-blur-sm border-primary/20">
          <CardHeader className="text-center pb-2">
            <CardTitle>
              {authStep === 'form' ? 'Get Started' : 'Verify Your Email'}
            </CardTitle>
            <CardDescription>
              {authStep === 'form' 
                ? 'Create your account or sign in to continue'
                : `We've sent a verification code to ${submittedEmail}`
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {authStep === 'form' ? (
              <Tabs defaultValue="signup" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>

                <TabsContent value="signup">
                  <div className="space-y-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg" 
                      className="w-full" 
                      onClick={handleGoogleLogin}
                      disabled={isLoading}
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Continue with Google
                    </Button>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or continue with email
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSignup} className="space-y-4 mt-4">
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
                  <div className="space-y-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg" 
                      className="w-full" 
                      onClick={handleGoogleLogin}
                      disabled={isLoading}
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Continue with Google
                    </Button>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or continue with email
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <form onSubmit={handleLogin} className="space-y-4 mt-4">
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
            ) : (
              <div className="space-y-6">
                {/* Demo Code Helper */}
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Demo Code</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={copyDemoCode}
                      className="h-8 px-2"
                    >
                      <Copy size={12} className="mr-1" />
                      Copy
                    </Button>
                  </div>
                  <code className="text-lg font-mono text-primary">123456</code>
                  <p className="text-xs text-muted-foreground mt-1">
                    Use this code to continue with the demo
                  </p>
                </div>

                <form onSubmit={handleVerification} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Enter 6-digit code"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      className="text-center text-2xl tracking-widest font-mono"
                      maxLength={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Verifying...' : 'Verify & Continue'}
                  </Button>
                </form>

                <div className="text-center">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setAuthStep('form')}
                    className="text-sm"
                  >
                    ← Back to form
                  </Button>
                </div>
              </div>
            )}
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