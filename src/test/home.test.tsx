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
  it('renders step sections', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Check for step headings
    expect(screen.getByText(/Set your goals/i)).toBeInTheDocument();
    expect(screen.getByText(/Pick your channels/i)).toBeInTheDocument();
  });

  it('renders footer newsletter', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Newsletter input in footer
    const emailInputs = screen.getAllByPlaceholderText(/your@email\.com/i);
    expect(emailInputs.length).toBeGreaterThan(0);
  });

  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('renders Get Started CTA', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const getStartedButtons = screen.getAllByText(/Get Started/i);
    expect(getStartedButtons.length).toBeGreaterThan(0);
  });
});
