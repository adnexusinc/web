import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders company information', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Adnexus Technology Inc/i)
    ).toBeInTheDocument();
  });

  it('renders contact phone number', () => {
    render(<Footer />);
    const phoneLink = screen.getByText(/844-236-3987/i);
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:+18442363987');
  });

  it('renders legal links', () => {
    render(<Footer />);
    expect(screen.getByText(/Terms/i)).toBeInTheDocument();
    // Use getAllByText since "Privacy" appears multiple times
    const privacyElements = screen.getAllByText(/Privacy/i);
    expect(privacyElements.length).toBeGreaterThan(0);
  });

  it('renders social media or external links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
