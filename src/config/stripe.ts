// No backend needed - use Stripe Payment Links!
// Create these in Stripe Dashboard

export const PAYMENT_LINKS = {
  // Self-service DSP - $25/day ($750/month)
  selfService: 'https://buy.stripe.com/your_link_here',

  // Enterprise - $9,999/month
  enterprise: 'https://buy.stripe.com/your_enterprise_link',

  // One-time setup fee
  onboarding: 'https://buy.stripe.com/your_onboarding_link'
}

// Usage in your components:
// <a href={PAYMENT_LINKS.selfService}>
//   <Button>Start Self-Service</Button>
// </a>