import React from 'react';
import { Container, Box, Heading, Text, Button, Link, Stack, Grid } from '@hanzo/ui/primitives';

export default function AttractTraffic() {
  return (
    <Container maxWidth="7xl" className="vibe-page">
      <Box as="header" className="py-4 border-b">
        <Stack direction="row" spacing={6} align="center">
          <Link href="/" className="text-2xl font-bold">Vibe</Link>
          <Stack direction="row" spacing={4}>
            <Link href="https://www.vibe.co/">Vibe</Link>
            <Link href="https://www.vibe.co/goals/build-awareness">Build Awareness</Link>
            <Link href="https://www.vibe.co/goals/attract-traffic">Attract Traffic</Link>
            <Link href="https://www.vibe.co/goals/generate-leads">Generate Leads</Link>
            <Link href="https://www.vibe.co/goals/increase-sales">Increase Sales</Link>
          </Stack>
        </Stack>
      </Box>

      <Box as="main" className="py-12">
        <Heading level={1} className="text-5xl mb-6">
          Drive convertible traffic
        </Heading>

        {/* Content sections will be added here */}
        <Text>Page content from attract-traffic</Text>
      </Box>

      <Box as="footer" className="py-8 border-t mt-16">
        <Text className="text-sm text-gray-600">© 2025 Vibe, Inc.</Text>
      </Box>
    </Container>
  );
}
