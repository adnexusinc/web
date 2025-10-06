import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@hanzo/ui/primitives';
import { Link, Text, Heading, Badge } from '@hanzo/ui/primitives';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface SuccessStoryCardProps {
  company: string;
  logo?: string;
  metric: string;
  title: string;
  description: string;
  image?: string;
  industry: string;
  results: string[];
  href: string;
}

export const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({
  company,
  logo,
  metric,
  title,
  description,
  image,
  industry,
  results,
  href,
}) => {
  return (
    <Card className="group overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 bg-card h-full flex flex-col">
      <Link href={href} className="block flex-1 flex flex-col">
        {image && (
          <div className="relative h-48 overflow-hidden bg-muted">
            <img
              src={image}
              alt={`${company} case study`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="space-y-3 flex-1">
          <div className="flex items-center justify-between">
            {logo ? (
              <img src={logo} alt={company} className="h-8 w-auto" />
            ) : (
              <Text className="text-lg font-semibold">{company}</Text>
            )}
            <Badge variant="outline" className="text-xs">
              {industry}
            </Badge>
          </div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-lg w-fit">
            <TrendingUp className="w-4 h-4" />
            <Text className="text-sm font-bold">{metric}</Text>
          </div>
          <Heading level={3} className="text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </Heading>
        </CardHeader>
        <CardContent className="space-y-4">
          <Text className="text-muted-foreground">{description}</Text>
          {results && results.length > 0 && (
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  <Text className="text-muted-foreground">{result}</Text>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            <Text>Read case study</Text>
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};
