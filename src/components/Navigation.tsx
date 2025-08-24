import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  ChevronDown
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
            <Link to="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold performance-number">Adnexus</div>
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

                <NavigationMenuItem>
                  <Link to="/resources" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Resources
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/company" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Company
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="group">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};