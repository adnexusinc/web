import { useState } from 'react';
import { ArrowUpRight, Instagram, Facebook, Twitter, Github, MessageSquare, Mail, MapPin, Phone, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;

    setSubscribeStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');

      // Reset after 3 seconds
      setTimeout(() => {
        setSubscribeStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <footer className="relative bg-black pt-20 pb-12 border-t border-gray-800 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[20%] w-[60%] h-[60%] bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl transform rotate-12 animate-pulse-glow"></div>
        <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[60%] bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl transform rotate-12 animate-pulse-glow"></div>
      </div>

      {/* Big Adnexus Logo Watermark - pinned to absolute bottom of footer */}
      <div className="absolute -bottom-40 left-0 right-0 w-full pointer-events-none overflow-hidden">
        <img
          src="/logo.png"
          alt=""
          className="w-full h-auto opacity-[0.08] brightness-0 invert"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section with Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-gray-800">
          <div className="space-y-6">
            <h2 className="text-white text-3xl font-bold tracking-tight leading-tight">
              Stay ahead in the<br /> programmatic advertising revolution
            </h2>
            <p className="text-gray-400 text-lg max-w-md">
              Get the latest industry insights, platform updates, and strategic trends directly in your inbox.
            </p>
          </div>

          <div className="flex items-center">
            <form onSubmit={handleSubscribe} className="w-full max-w-md">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-gray-900 border border-gray-700 text-white px-6 py-4 rounded-full pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out"
                >
                  {subscribeStatus === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : subscribeStatus === 'success' ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>

              {subscribeStatus === 'success' && (
                <p className="mt-2 text-green-500 text-sm animate-fade-in">
                  Thanks for subscribing! Check your inbox soon.
                </p>
              )}
              {subscribeStatus === 'error' && (
                <p className="mt-2 text-red-500 text-sm animate-fade-in">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="mt-3 text-gray-500 text-xs">
                By subscribing, you agree to our privacy policy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        {/* Main Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group transition-all duration-300 ease-in-out transform hover:translate-x-1">
              <img src="/favicon.png" alt="Adnexus" className="h-10 w-auto brightness-0 invert" />
              <span className="text-2xl font-semibold tracking-tight text-white">Adnexus</span>
            </Link>

            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Unified programmatic advertising platform for CTV, display, and video. AI-powered campaign optimization across all channels.
            </p>

            <div className="pt-4 flex flex-col gap-3 w-fit">
              <a href="https://cal.com/adnexus"
                className="group bg-white text-black border border-gray-700 px-8 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-all duration-200 ease-in-out inline-flex items-center justify-start whitespace-nowrap">
                Schedule a Demo
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="https://auth.ad.nexus"
                className="group bg-transparent text-white border border-gray-700 hover:border-white px-8 py-3.5 rounded-full font-medium hover:bg-black/20 transition-all duration-200 ease-in-out inline-flex items-center justify-between whitespace-nowrap">
                Platform Login
                <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white text-lg font-medium">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/dsp" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">DSP</span>
                </Link>
              </li>
              <li>
                <Link to="/ssp" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">SSP</span>
                </Link>
              </li>
              <li>
                <Link to="/adx" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">ADX</span>
                </Link>
              </li>
              <li>
                <Link to="/studio" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Studio</span>
                </Link>
              </li>
              <li>
                <Link to="/agency" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Agency Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white text-lg font-medium">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/advertisers" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">For Advertisers</span>
                </Link>
              </li>
              <li>
                <Link to="/agencies" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">For Agencies</span>
                </Link>
              </li>
              <li>
                <Link to="/publishers" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">For Publishers</span>
                </Link>
              </li>
              <li>
                <Link to="/platform/overview" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Platform Overview</span>
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Case Studies</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-white text-lg font-medium">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                <MapPin size={20} className="text-gray-400 mt-1 flex-shrink-0 group-hover:text-primary transition-colors duration-200" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-200">
                  Adnexus Technology Inc<br />
                  New York, NY
                </span>
              </li>
              <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200">
                <Mail size={20} className="text-gray-400 flex-shrink-0 group-hover:text-primary transition-colors duration-200" />
                <a href="mailto:support@ad.nexus" className="text-gray-400 group-hover:text-white transition-colors duration-200">support@ad.nexus</a>
              </li>
              <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200">
                <Phone size={20} className="text-gray-400 flex-shrink-0 group-hover:text-primary transition-colors duration-200" />
                <a href="tel:+18442363987" className="text-gray-400 group-hover:text-white transition-colors duration-200">+1 844-AD-NEXUS (236-3987)</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative min-h-[200px]">
          {/* Content on top of watermark */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 py-8">
            <div className="text-gray-500 flex items-center flex-wrap justify-center md:justify-start gap-2">
              <span>© {currentYear} Adnexus Technology Inc.</span>
              <span className="mx-2 text-gray-700">•</span>
              <span className="flex items-center text-primary/80">
                <span className="mr-1">Powered by</span>
                <span className="relative inline-flex h-3 w-3 mx-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="ml-1">AI Technology</span>
              </span>
            </div>

            <div className="flex space-x-6">
              <a href="https://www.instagram.com/adnexusinc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/adnexusinc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/adnexusinc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/adnexusinc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Github size={20} />
              </a>
              <a href="https://discord.gg/adnexus" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <MessageSquare size={20} />
              </a>
            </div>

            <div className="flex space-x-6 text-sm">
              <Link to="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">Terms</Link>
              <Link to="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">Privacy</Link>
              <Link to="/cookie-policy" className="text-gray-500 hover:text-white transition-colors">Cookies</Link>
              <Link to="/gdpr-compliance" className="text-gray-500 hover:text-white transition-colors">GDPR</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
