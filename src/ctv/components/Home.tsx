import React from 'react';
import { Container, Box, Heading, Text, Button, Link, Stack, Grid } from '@hanzo/ui/primitives';

export default function Home() {
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
          Adnexus: Streaming & Connected TV Advertising Platform
        </Heading>

        {/* Content sections will be added here */}
        <Text>Page content from home</Text>
      </Box>

      <Box as="footer" className="py-8 border-t mt-16">
        <Text className="text-sm text-gray-600">© 2025 Adnexus, Inc.</Text>
      </Box>
    </Container>
  );
}
