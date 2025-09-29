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
  Building2
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
  }
];

const productItems = [
  {
    title: "DSP (Demand-Side Platform)",
    href: "/dsp",
    description: "AI-powered buying platform for advertisers",
    icon: Cpu
  },
  {
    title: "SSP (Supply-Side Platform)",
    href: "/ssp",
    description: "Intelligent yield optimization for publishers",
    icon: Shield
  },
  {
    title: "ADX (Ad Exchange)",
    href: "/adx",
    description: "The fastest exchange with sub-millisecond latency",
    icon: Zap
  }
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ComponentType<{ className?: string }> }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-3">
            {Icon && (
              <div className="mt-1 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon className="h-4 w-4 text-primary" />
              </div>
            )}
            <div className="flex-1">
              <div className="text-sm font-medium leading-none mb-1">{title}</div>
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

export const Navigation = () => {
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center group">
              <img 
                src="/lovable-uploads/ebba7dda-009e-4d3c-b5d4-06707a9a84ad.png" 
                alt="Adnexus" 
                className="h-8 filter invert brightness-0 group-hover:brightness-100 transition-all duration-300" 
              />
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Platform
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                      {platformItems.map((item) => (
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
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4">
                      {productItems.map((item) => (
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
                  </NavigationMenuContent>
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
                        <div className="px-2 py-1.5 text-sm font-semibold">Choose Platform</div>
                        <div className="h-px bg-border my-1" />
                        <a href="https://dsp.ad.nexus" className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent transition-colors">
                          <Building2 className="h-4 w-4" />
                          <div>
                            <div className="font-medium">Login to DSP</div>
                            <div className="text-xs text-muted-foreground">Demand-Side Platform</div>
                          </div>
                        </a>
                        <a href="https://ssp.ad.nexus" className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent transition-colors">
                          <Globe className="h-4 w-4" />
                          <div>
                            <div className="font-medium">Login to SSP</div>
                            <div className="text-xs text-muted-foreground">Supply-Side Platform</div>
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
                    <h3 className="font-semibold mb-3">Platform</h3>
                    <div className="space-y-2">
                      {platformItems.map((item) => (
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


                  <div className="pt-4 border-t space-y-2">
                    <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                      Sign In
                    </div>
                    <a href="https://dsp.ad.nexus" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start gap-2">
                        <Building2 className="h-4 w-4" />
                        <div className="text-left">
                          <div>Login to DSP</div>
                          <div className="text-xs text-muted-foreground">Demand-Side Platform</div>
                        </div>
                      </Button>
                    </a>
                    <a href="https://ssp.ad.nexus" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start gap-2">
                        <Globe className="h-4 w-4" />
                        <div className="text-left">
                          <div>Login to SSP</div>
                          <div className="text-xs text-muted-foreground">Supply-Side Platform</div>
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
