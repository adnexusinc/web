import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { ArrowRight } from 'lucide-react';
import { PageConfig } from '@/lib/page-config';

interface UnifiedPageProps {
  config: PageConfig;
}

export const UnifiedPage: React.FC<UnifiedPageProps> = ({ config }) => {
  const {
    title,
    subtitle,
    description,
    heroButtonText,
    heroButtonLink,
    features,
    stats,
    showFooter = true
  } = config;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-80 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {title}
            </h1>

            {subtitle && (
              <p className="text-2xl text-muted-foreground mb-8">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>
            )}

            {heroButtonText && heroButtonLink && (
              <Link to={heroButtonLink}>
                <Button variant="default" size="lg" className="group">
                  {heroButtonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {stats && stats.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="p-8 text-center bg-card/50 backdrop-blur border-border/50">
                  <div className={`text-3xl font-bold mb-2 ${
                    stat.color === 'primary' ? 'text-primary' :
                    stat.color === 'accent' ? 'text-blue-400' :
                    stat.color === 'success' ? 'text-green-400' :
                    'text-foreground'
                  }`}>
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {features && features.length > 0 && (
        <section className="py-16 px-4 pb-32">
          <div className="container mx-auto">
            <div className={`grid gap-8 max-w-6xl mx-auto ${
              features.length <= 3 ? 'md:grid-cols-3' :
              features.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
              'md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const CardContent = (
                  <>
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    {feature.metric && (
                      <div className="text-sm font-semibold text-primary">
                        {feature.metric}
                      </div>
                    )}
                    {feature.metrics && (
                      <div className="space-y-1">
                        {feature.metrics.map((metric, idx) => (
                          <div key={idx} className="text-sm text-muted-foreground">
                            • {metric}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                );

                return feature.link ? (
                  <Link key={index} to={feature.link} className="group">
                    <Card className="p-6 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 cursor-pointer">
                      {CardContent}
                      {feature.link && (
                        <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      )}
                    </Card>
                  </Link>
                ) : (
                  <Card key={index} className="p-6 h-full">
                    {CardContent}
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  );
};

export default UnifiedPage;