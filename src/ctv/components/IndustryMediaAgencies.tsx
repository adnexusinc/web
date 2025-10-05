import React from 'react';
import { Container, Box, Heading, Text, Button, Link, Stack, Grid } from '@hanzo/ui/primitives';

export default function IndustryMediaAgencies() {
  return (
    <Container maxWidth="7xl" className="vibe-page">
      <Box as="header" className="py-4 border-b">
        <Stack direction="row" spacing={6} align="center">
          <Link href="/" className="text-2xl font-bold">Vibe</Link>
          <Stack direction="row" spacing={4}>
            <Link href="https://www.vibe.co/">Vibe</Link>
            <Link href="#">Product</Link>
            <Link href="#">Industries</Link>
            <Link href="https://www.vibe.co/pricing">Pricing</Link>
            <Link href="https://www.vibe.co/testimonials">Testimonials</Link>
          </Stack>
        </Stack>
      </Box>

      <Box as="main" className="py-12">
        <Heading level={1} className="text-5xl mb-6">
          Grow your Agency with TV Ads - Vibe
        </Heading>

        {/* Content sections will be added here */}
        <Text>Page content from industry-media-agencies</Text>
      </Box>

      <Box as="footer" className="py-8 border-t mt-16">
        <Text className="text-sm text-gray-600">© 2025 Vibe, Inc.</Text>
      </Box>
    </Container>
  );
}
