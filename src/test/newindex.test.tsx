import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NewIndex from '../pages/NewIndex';

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

describe('NewIndex Page', () => {
  it('renders main headline', () => {
    render(
      <MemoryRouter>
        <NewIndex />
      </MemoryRouter>
    );

    // Check for main headline text
    expect(screen.getByText(/Grow your brand/i)).toBeInTheDocument();
    // Multiple instances of "with TV Ads" exist, verify at least one
    const tvAdsTexts = screen.getAllByText(/with TV Ads/i);
    expect(tvAdsTexts.length).toBeGreaterThan(0);
  });

  it('renders tagline', () => {
    render(
      <MemoryRouter>
        <NewIndex />
      </MemoryRouter>
    );

    expect(screen.getByText(/Generate business outcomes/i)).toBeInTheDocument();
  });

  it('renders email input and CTA button', () => {
    render(
      <MemoryRouter>
        <NewIndex />
      </MemoryRouter>
    );

    // Multiple email inputs exist on the page
    const emailInputs = screen.getAllByPlaceholderText(/What's your work email/i);
    expect(emailInputs.length).toBeGreaterThan(0);

    // Check for Get started button (may be multiple)
    const getStartedButtons = screen.getAllByRole('button', { name: /Get started/i });
    expect(getStartedButtons.length).toBeGreaterThan(0);
  });

  it('renders statistics section', () => {
    render(
      <MemoryRouter>
        <NewIndex />
      </MemoryRouter>
    );

    // Check for impressions statistic (appears multiple times)
    const impressionsText = screen.getAllByText(/Impressions/i);
    expect(impressionsText.length).toBeGreaterThan(0);
  });
});