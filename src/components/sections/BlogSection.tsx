import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export const BlogSection = () => {
  const blogPosts = [
    {
      title: "Generative AI in Advertising: Creative Power or Ethical Risk?",
      excerpt: "ChatGPT can write a headline in seconds. Midjourney can draw a billboard in minutes. It's no surprise that brand teams wonder if generative AI in advertising is a gift or a risk.",
      date: "Jul 31, 2025",
      tags: ["AI", "ProgrammaticAdvertising", "Technologies", "Trends"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "How Much Do Mobile Games Make Per Ad?",
      excerpt: "Free-to-play games rule the app stores, yet many developers still Google how much do mobile games make per ad. The question matters because ads now sit beside in-app purchases as a core money source.",
      date: "Jul 28, 2025",
      tags: ["Ad Performance", "ProgrammaticAdvertising", "Publishers"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "How to Connect Your Mobile App to Adnexus SSP via SDK: A Practical Integration Guide",
      excerpt: "Programmatic advertising might be confusing at times. With the continuous industry updates, both publishers and advertisers might struggle to keep up with the requirements and various technical implementations.",
      date: "Jul 25, 2025",
      tags: ["Publishers", "Trends"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-background/50 backdrop-blur-sm relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 gradient-card rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Latest on Blog
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated with{' '}
            <span className="text-gradient">Industry Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the latest trends, technologies, and best practices in programmatic advertising 
            from our team of industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="gradient-card rounded-2xl overflow-hidden backdrop-blur-sm border border-primary/20 hover:shadow-primary transition-smooth group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost-glow" size="sm" className="w-full group">
                  Read More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};