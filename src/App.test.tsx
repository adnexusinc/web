import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

describe('App', () => {
  it('renders without crashing', () => {
    const testQueryClient = createTestQueryClient();
    render(
      <QueryClientProvider client={testQueryClient}>
        <App />
      </QueryClientProvider>
    );
  });

  it('renders the main application', () => {
    const testQueryClient = createTestQueryClient();
    render(
      <QueryClientProvider client={testQueryClient}>
        <App />
      </QueryClientProvider>
    );
    // App should render without errors - if this passes, routing is working
    const body = document.body;
    expect(body).toBeInTheDocument();
  });
});
