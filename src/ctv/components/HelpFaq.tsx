import React from 'react';
import { Container, Box, Heading, Text, Button, Link, Stack, Grid } from '@hanzo/ui/primitives';

export default function HelpFaq() {
  return (
    <Container maxWidth="7xl" className="vibe-page">
      <Box as="header" className="py-4 border-b">
        <Stack direction="row" spacing={6} align="center">
          <Link href="/" className="text-2xl font-bold">Vibe</Link>
          <Stack direction="row" spacing={4}>
            
          </Stack>
        </Stack>
      </Box>

      <Box as="main" className="py-12">
        <Heading level={1} className="text-5xl mb-6">
          Vibe
        </Heading>

        {/* Content sections will be added here */}
        <Text>Page content from help-faq</Text>
      </Box>

      <Box as="footer" className="py-8 border-t mt-16">
        <Text className="text-sm text-gray-600">© 2025 Vibe, Inc.</Text>
      </Box>
    </Container>
  );
}
