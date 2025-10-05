import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Target,
  Globe,
  TrendingUp,
  Cpu,
  BarChart3,
  Shield,
  Users,
  Zap,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Building2,
  Film,
  BookOpen,
  Calendar,
  HelpCircle,
  Briefcase,
  Newspaper,
  Sparkles,
  FileText,
  Lightbulb
} from "lucide-react";

const platformItems = [
  {
    title: "Overview",
    href: "/platform/overview",
    description: "Discover the power of our AI-driven programmatic platform",
    icon: BarChart3
  },
  {
    title: "Plan",
    href: "/platform/plan",
    description: "Strategic planning tools for campaign optimization",
    icon: Target
  },
  {
    title: "Activate",
    href: "/platform/activate",
    description: "Launch and manage campaigns across all channels",
    icon: Zap
  },
  {
    title: "Measure",
    href: "/platform/measure",
    description: "Real-time analytics and performance insights",
    icon: TrendingUp
  }
];

const solutionItems = [
  {
    title: "For Advertisers",
    href: "/advertisers",
    description: "Reach your audience with precision targeting",
    icon: Target
  },
  {
    title: "For Agencies",
    href: "/agencies",
    description: "Scale your clients' campaigns efficiently",
    icon: Users
  },
  {
    title: "For Publishers",
    href: "/publishers",
    description: "Maximize your inventory revenue",
    icon: Globe
  },
  {
    title: "Agency Services",
    href: "/agency",
    description: "$9,999/mo creative + marketing on-demand",
    icon: Zap,
    badge: "AI-Powered"
  }
];

// Goal-based product items
const goalItems = [
  {
    title: "Build Awareness",
    href: "/dsp?goal=awareness",
    description: "Reach new audiences at scale",
    icon: Users
  },
  {
    title: "Attract Traffic",
    href: "/dsp?goal=traffic",
    description: "Drive visitors to your site or app",
    icon: TrendingUp
  },
  {
    title: "Generate Leads",
    href: "/dsp?goal=leads",
    description: "Capture qualified prospects",
    icon: Target
  },
  {
    title: "Increase Sales",
    href: "/dsp?goal=sales",
    description: "Drive conversions and revenue",
    icon: BarChart3
  },
  {
    title: "Retarget Prospects",
    href: "/dsp?goal=retargeting",
    description: "Re-engage interested audiences",
    icon: Zap
  },
  {
    title: "Promote Your App",
    href: "/dsp?goal=app",
    description: "Boost downloads and engagement",
    icon: Cpu
  }
];

// Feature-based product items
const featureItems = [
  {
    title: "Apps & Channels",
    href: "/platform/overview",
    description: "500+ premium CTV channels",
    icon: Globe
  },
  {
    title: "Audience Targeting",
    href: "/platform/plan",
    description: "Precision demographic & behavioral targeting",
    icon: Target
  },
  {
    title: "Measurement & Reporting",
    href: "/platform/measure",
    description: "Real-time analytics & attribution",
    icon: BarChart3
  },
  {
    title: "Integrations & API",
    href: "/dsp",
    description: "Connect with your existing tools",
    icon: Cpu
  },
  {
    title: "AI Creatives",
    href: "/studio",
    description: "Generate video ads with AI",
    icon: Film
  },
  {
    title: "AI Optimization",
    href: "/platform/activate",
    description: "Automated bid & budget optimization",
    icon: Zap
  }
];

const resourcesItems = [
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Real results from real campaigns",
    icon: FileText,
    badge: "New"
  },
  {
    title: "What's New",
    href: "/resources",
    description: "Latest platform updates and features",
    icon: Sparkles
  },
  {
    title: "How To",
    href: "/resources",
    description: "Step-by-step guides and tutorials",
    icon: Lightbulb
  },
  {
    title: "Product Updates",
    href: "/resources",
    description: "See what we're building",
    icon: BookOpen
  },
  {
    title: "Newsletter",
    href: "/newsletter",
    description: "CTV smarts delivered twice weekly to your inbox",
    icon: Newspaper
  }
];

const companyItems = [
  {
    title: "Events",
    href: "/company",
    description: "Join us at industry conferences",
    icon: Calendar,
    badge: "New"
  },
  {
    title: "About Us",
    href: "/about",
    description: "Our story and mission",
    icon: Building2
  },
  {
    title: "Help Center",
    href: "/faq",
    description: "Get answers to common questions",
    icon: HelpCircle
  },
  {
    title: "Jobs",
    href: "/contact",
    description: "Join our growing team",
    icon: Briefcase,
    badge: "We're hiring"
  },
  {
    title: "Newsletter",
    href: "/#newsletter",
    description: "News & Insights delivered weekly",
    icon: Newspaper
  }
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ComponentType<{ className?: string }>; external?: boolean; badge?: string }
>(({ className, title, children, icon: Icon, external, badge, ...props }, ref) => {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...linkProps}
          {...props}
        >
          <div className="flex items-start gap-3">
            {Icon && (
              <div className="mt-1 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon className="h-4 w-4 text-primary" />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-sm font-medium leading-none">{title}</div>
                {badge && (
                  <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-semibold">
                    {badge}
                  </span>
                )}
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface NavigationProps {
  bannerVisible?: boolean;
}

export const Navigation = ({ bannerVisible = false }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
    )}
    style={{ top: bannerVisible ? '40px' : '0' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Adnexus"
                className="h-8 filter invert brightness-0 group-hover:brightness-100 transition-all duration-300"
              />
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[700px] p-6">
                      <div className="grid grid-cols-[2fr_1fr] gap-6">
                        {/* Left side - By Goal and By Feature */}
                        <div className="space-y-6">
                          {/* By Goal Section */}
                          <div>
                            <h3 className="text-sm font-semibold text-muted-foreground mb-3 px-2">By Goal</h3>
                            <ul className="grid grid-cols-2 gap-2">
                              {goalItems.map((item) => (
                                <ListItem
                                  key={item.title}
                                  title={item.title}
                                  href={item.href}
                                  icon={item.icon}
                                >
                                  {item.description}
                                </ListItem>
                              ))}
                            </ul>
                          </div>

                          {/* By Feature Section */}
                          <div>
                            <h3 className="text-sm font-semibold text-muted-foreground mb-3 px-2">By Feature</h3>
                            <ul className="grid grid-cols-2 gap-2">
                              {featureItems.map((item) => (
                                <ListItem
                                  key={item.title}
                                  title={item.title}
                                  href={item.href}
                                  icon={item.icon}
                                >
                                  {item.description}
                                </ListItem>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right side - Studio CTA */}
                        <div className="flex flex-col justify-center p-4 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-lg border border-purple-600/20">
                          <Film className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                          <h3 className="text-lg font-bold mb-2 text-center">Studio</h3>
                          <p className="text-sm text-muted-foreground mb-4 text-center">
                            Create premium TV ads in minutes with AI
                          </p>
                          <a
                            href="https://studio.ad.nexus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium text-center transition-colors"
                          >
                            Open Studio →
                          </a>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4">
                      {solutionItems.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          icon={item.icon}
                          badge={item.badge}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4">
                      {resourcesItems.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          icon={item.icon}
                          badge={item.badge}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4">
                      {companyItems.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          icon={item.icon}
                          badge={item.badge}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/pricing" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Pricing
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent h-9 px-4 py-2">
                      Sign In
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-56 p-2">
                        <a href="https://dsp.ad.nexus" className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent transition-colors">
                          <Target className="h-4 w-4" />
                          <div>
                            <div className="font-medium">Advertiser Login</div>
                            <div className="text-xs text-muted-foreground">Demand-Side Platform</div>
                          </div>
                        </a>
                        <a href="https://studio.ad.nexus" className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent transition-colors">
                          <Film className="h-4 w-4" />
                          <div>
                            <div className="font-medium">Studio Login</div>
                            <div className="text-xs text-muted-foreground">Creative Platform</div>
                          </div>
                        </a>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="group">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold mb-3">Products</h3>
                    <div className="space-y-2">
                      {productItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block p-2 rounded-lg hover:bg-accent transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4 text-primary" />
                            <div>
                              <div className="font-medium">{item.title}</div>
                              <div className="text-xs text-muted-foreground">{item.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Solutions</h3>
                    <div className="space-y-2">
                      {solutionItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block p-2 rounded-lg hover:bg-accent transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4 text-primary" />
                            <div>
                              <div className="font-medium">{item.title}</div>
                              <div className="text-xs text-muted-foreground">{item.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>


                  <div className="pt-4 border-t space-y-2">
                    <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                      Sign In
                    </div>
                    <a href="https://dsp.ad.nexus" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start gap-2">
                        <Target className="h-4 w-4" />
                        <div className="text-left">
                          <div>Advertiser Login</div>
                          <div className="text-xs text-muted-foreground">Demand-Side Platform</div>
                        </div>
                      </Button>
                    </a>
                    <a href="https://studio.ad.nexus" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start gap-2">
                        <Film className="h-4 w-4" />
                        <div className="text-left">
                          <div>Studio Login</div>
                          <div className="text-xs text-muted-foreground">Creative Platform</div>
                        </div>
                      </Button>
                    </a>
                    <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full">
                        Book a Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
