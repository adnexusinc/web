import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });

  it('handles conditional classes', () => {
    expect(cn('base', false && 'hidden', 'visible')).toBe('base visible');
  });

  it('handles arrays of classes', () => {
    expect(cn(['flex', 'items-center'], 'justify-between')).toBe(
      'flex items-center justify-between'
    );
  });

  it('handles empty inputs', () => {
    expect(cn()).toBe('');
  });

  it('removes duplicate classes', () => {
    expect(cn('px-4', 'px-4', 'py-2')).toBe('px-4 py-2');
  });

  it('handles Tailwind conflicts correctly', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });
});
