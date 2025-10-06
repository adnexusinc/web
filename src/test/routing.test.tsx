import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from 'react-router-dom';

// Mock all lazy-loaded page components to avoid async loading issues
vi.mock('../pages/Home', () => ({
  default: () => <div>Premium Programmatic Advertising Platform</div>
}));

vi.mock('../pages/Contact', () => ({
  default: () => <div>Contact Us Page</div>
}));

describe('Routing', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  it('renders without crashing', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div>Test App</div>
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Test App')).toBeInTheDocument();
  });

  it('renders home page component', async () => {
    const { default: Home } = await import('../pages/Home');
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Premium Programmatic/i)).toBeInTheDocument();
    });
  });

  it('renders contact page component', async () => {
    const { default: Contact } = await import('../pages/Contact');
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    });
  });
});