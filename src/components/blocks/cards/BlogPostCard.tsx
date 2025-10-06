import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@hanzo/ui/primitives';
import { Link, Text, Heading, Badge } from '@hanzo/ui/primitives';

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  href: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  excerpt,
  image,
  category,
  date,
  author,
  readTime,
  href,
}) => {
  return (
    <Card className="group overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 bg-card">
      <Link href={href} className="block">
        {image && (
          <div className="relative h-48 overflow-hidden bg-muted">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <Text className="text-xs text-muted-foreground">{readTime}</Text>
          </div>
          <Heading level={3} className="text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </Heading>
        </CardHeader>
        <CardContent>
          <Text className="text-muted-foreground line-clamp-3">{excerpt}</Text>
        </CardContent>
        <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
          <Text>{author}</Text>
          <Text>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</Text>
        </CardFooter>
      </Link>
    </Card>
  );
};
