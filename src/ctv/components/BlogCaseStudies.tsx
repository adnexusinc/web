import React from 'react';
import { Container, Box, Heading, Text, Grid } from '@hanzo/ui/primitives';
import { SuccessStoryCard } from '@/components/blocks/cards/SuccessStoryCard';
import caseStudiesData from '../data/blog-case-studies.json';

export default function BlogCaseStudies() {
  return (
    <Container maxWidth="7xl" className="py-12">
      <Box className="text-center mb-12">
        <Heading level={1} className="text-4xl md:text-5xl font-bold mb-4">
          {caseStudiesData.heading}
        </Heading>
        <Text className="text-xl text-muted-foreground">
          {caseStudiesData.subheading}
        </Text>
      </Box>

      <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudiesData.stories.map((story) => (
          <SuccessStoryCard
            key={story.company}
            company={story.company}
            logo={story.logo}
            metric={story.metric}
            title={story.title}
            description={story.description}
            image={story.image}
            industry={story.industry}
            results={story.results}
            href={story.href}
          />
        ))}
      </Grid>
    </Container>
  );
}
