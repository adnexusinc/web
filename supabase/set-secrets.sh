#!/bin/bash
# Set Supabase secrets for Edge Functions
# Replace YOUR_SECRET_KEY with actual values (DO NOT commit real keys)

echo "Setting Supabase secrets..."

# Stripe secret key (REPLACE WITH YOUR ACTUAL KEY)
supabase secrets set STRIPE_SECRET_KEY=sk_live_YOUR_SECRET_KEY_HERE

echo "✓ Stripe secret key set"

# Stripe webhook secret (get this from Stripe Dashboard after configuring webhook)
# supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET

echo ""
echo "Next steps:"
echo "1. Configure Stripe webhook in dashboard:"
echo "   URL: https://cabgbiwjybwmvaekgkct.supabase.co/functions/v1/stripe-webhook"
echo "2. Copy the webhook signing secret"
echo "3. Run: supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_..."
echo ""
echo "✓ Setup complete!"
