import React from 'react';
import { Container, Box, Heading, Text, Grid } from '@hanzo/ui/primitives';
import { BlogPostCard } from '@/components/blocks/cards/BlogPostCard';
import whatsNewData from '../data/blog-whats-new.json';

export default function BlogWhatsNew() {
  return (
    <Container maxWidth="7xl" className="py-12">
      <Box className="text-center mb-12">
        <Heading level={1} className="text-4xl md:text-5xl font-bold mb-4">
          {whatsNewData.heading}
        </Heading>
        <Text className="text-xl text-muted-foreground">
          {whatsNewData.subheading}
        </Text>
      </Box>

      <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whatsNewData.posts.map((post) => (
          <BlogPostCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            category={post.category}
            date={post.date}
            author={post.author}
            readTime={post.readTime}
            href={post.href}
          />
        ))}
      </Grid>
    </Container>
  );
}
