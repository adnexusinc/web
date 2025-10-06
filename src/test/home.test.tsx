import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

// Mock window.YT for YouTube player
interface MockYTPlayer {
  playVideo: ReturnType<typeof vi.fn>;
  pauseVideo: ReturnType<typeof vi.fn>;
  mute: ReturnType<typeof vi.fn>;
  unMute: ReturnType<typeof vi.fn>;
  isMuted: ReturnType<typeof vi.fn>;
  getPlayerState: ReturnType<typeof vi.fn>;
}

global.window.YT = {
  Player: vi.fn().mockImplementation(() => ({
    playVideo: vi.fn(),
    pauseVideo: vi.fn(),
    mute: vi.fn(),
    unMute: vi.fn(),
    isMuted: vi.fn().mockReturnValue(true),
    getPlayerState: vi.fn().mockReturnValue(1),
  } as MockYTPlayer)),
  PlayerState: {
    PLAYING: 1,
    PAUSED: 2,
  },
} as typeof window.YT;

describe('Home Page', () => {
  it('renders main headline', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Check for main headline text
    expect(screen.getByText(/Programmatic CTV Advertising/i)).toBeInTheDocument();
    expect(screen.getByText(/Made Simple/i)).toBeInTheDocument();
  });

  it('renders tagline', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/Launch premium Connected TV campaigns/i)).toBeInTheDocument();
  });

  it('renders email input and CTA button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Multiple email inputs exist on the page
    const emailInputs = screen.getAllByPlaceholderText(/Enter your work email|What's your work email/i);
    expect(emailInputs.length).toBeGreaterThan(0);

    // Check for campaign button (may be multiple - "Start a Campaign")
    const campaignButtons = screen.queryAllByRole('button', { name: /Start a Campaign|Get started/i });
    // Or check for the link version
    const campaignLinks = screen.queryAllByRole('link', { name: /Start a Campaign/i });
    expect(campaignButtons.length + campaignLinks.length).toBeGreaterThan(0);
  });

  it('renders statistics section', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Check for impressions statistic (appears multiple times)
    const impressionsText = screen.getAllByText(/Impressions/i);
    expect(impressionsText.length).toBeGreaterThan(0);
  });
});