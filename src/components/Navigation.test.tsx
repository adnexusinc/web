import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  it('renders the logo', () => {
    render(<Navigation />);
    const logo = screen.getByAltText(/adnexus/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders main navigation links', () => {
    render(<Navigation />);
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
  });

  it('adjusts position when banner is visible', () => {
    const { container } = render(<Navigation bannerVisible={true} />);
    const header = container.querySelector('header');
    expect(header).toHaveStyle({ top: '40px' });
  });

  it('stays at top when banner is not visible', () => {
    const { container } = render(<Navigation bannerVisible={false} />);
    const header = container.querySelector('header');
    expect(header).toHaveStyle({ top: '0' });
  });

  it('renders Book a Demo button', () => {
    render(<Navigation />);
    expect(screen.getByText('Book a Demo')).toBeInTheDocument();
  });
});
