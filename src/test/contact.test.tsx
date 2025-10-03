import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../pages/Contact';

describe('Contact Page', () => {
  it('renders contact page heading', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    // Check for page title
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  it('displays contact methods', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    // Check for contact method cards
    expect(screen.getByText(/Call Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Email Us/i)).toBeInTheDocument();
  });

  it('displays phone number', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    // Check for phone number (appears multiple times, use getAllByText)
    const phoneNumbers = screen.getAllByText(/844-236-3987/i);
    expect(phoneNumbers.length).toBeGreaterThan(0);
  });
});