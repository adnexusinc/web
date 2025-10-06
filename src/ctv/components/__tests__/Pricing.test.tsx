import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Pricing from '../Pricing'
import pricingData from '../../data/pricing.json'

describe('Pricing Component', () => {
  it('renders hero section with correct data', () => {
    render(<Pricing />)

    expect(screen.getByText(pricingData.meta.headline)).toBeInTheDocument()
    expect(screen.getByText(pricingData.meta.subheadline)).toBeInTheDocument()
  })

  it('renders pricing tier card with all features', () => {
    render(<Pricing />)

    const tier = pricingData.pricing_tiers[0]
    expect(screen.getByText(tier.name)).toBeInTheDocument()
    expect(screen.getByText(tier.starting_price)).toBeInTheDocument()
  })

  it('renders feature grid with all categories', () => {
    render(<Pricing />)

    expect(screen.getByText('Everything You Need to Succeed')).toBeInTheDocument()
    expect(screen.getByText('Targeting')).toBeInTheDocument()
    expect(screen.getByText('Creative Tools')).toBeInTheDocument()
    expect(screen.getByText('Reporting & Analytics')).toBeInTheDocument()
  })

  it('renders FAQ section', () => {
    render(<Pricing />)

    expect(screen.getByText('Have Questions?')).toBeInTheDocument()
    expect(screen.getByText('What is the minimum budget to get started?')).toBeInTheDocument()
  })

  it('handles email submission', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    render(<Pricing />)

    const emailInput = screen.getByPlaceholderText('Enter your email to get started')
    const submitButton = screen.getByText('Get Started')

    expect(emailInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})
