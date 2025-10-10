import React from 'react';
import { Container, Box, Heading, Text, Button, Link, Stack, Grid } from '@hanzo/ui/primitives';

export default function About() {
  return (
    <Container maxWidth="7xl" className="adnexus-page">
      <Box as="header" className="py-4 border-b">
        <Stack direction="row" spacing={6} align="center">
          <Link href="/" className="text-2xl font-bold">Adnexus</Link>
          <Stack direction="row" spacing={4}>
            <Link href="https://ad.nexus/">Adnexus</Link>
            <Link href="#">Product</Link>
            <Link href="#">Industries</Link>
            <Link href="https://ad.nexus/pricing">Pricing</Link>
            <Link href="https://ad.nexus/testimonials">Testimonials</Link>
          </Stack>
        </Stack>
      </Box>

      <Box as="main" className="py-12">
        <Heading level={1} className="text-5xl mb-6">
          About Adnexus - Making Television Advertising Simple
        </Heading>

        {/* Content sections will be added here */}
        <Text>Page content from about</Text>
      </Box>

      <Box as="footer" className="py-8 border-t mt-16">
        <Text className="text-sm text-gray-600">© 2025 Adnexus, Inc.</Text>
      </Box>
    </Container>
  );
}
