import React from 'react';
import { Container, Box, Heading, Text, Button, Link, Stack, Grid } from '@hanzo/ui/primitives';

export default function IncreaseSales() {
  return (
    <Container maxWidth="7xl" className="vibe-page">
      <Box as="header" className="py-4 border-b">
        <Stack direction="row" spacing={6} align="center">
          <Link href="/" className="text-2xl font-bold">Vibe</Link>
          <Stack direction="row" spacing={4}>
            <Link href="https://www.vibe.co/">Vibe</Link>
            <Link href="https://www.vibe.co/pricing">Pricing</Link>
            <Link href="https://www.vibe.co/testimonials">Testimonials</Link>
            <Link href="https://www.vibe.co/book-a-demo?utm_source=website&utm_medium=navigation&utm_content=%2Fgoals%2Fincrease-sales">Book a demo</Link>
            <Link href="https://www.vibe.co/sign-in">Log in</Link>
          </Stack>
        </Stack>
      </Box>

      <Box as="main" className="py-12">
        <Heading level={1} className="text-5xl mb-6">
          Generate measurable sales
        </Heading>

        {/* Content sections will be added here */}
        <Text>Page content from increase-sales</Text>
      </Box>

      <Box as="footer" className="py-8 border-t mt-16">
        <Text className="text-sm text-gray-600">© 2025 Vibe, Inc.</Text>
      </Box>
    </Container>
  );
}
