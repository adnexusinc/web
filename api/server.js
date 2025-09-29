// Simple Express backend for Stripe payments
// Deploy this separately on Railway/Render/Heroku

import express from 'express'
import Stripe from 'stripe'
import cors from 'cors'

const app = express()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

app.use(cors({ origin: 'https://ad.nexus' }))
app.use(express.json())

// Create checkout session
app.post('/api/checkout', async (req, res) => {
  const { plan } = req.body

  const prices = {
    'self-service': 'price_xxxxx', // $25/day plan
    'enterprise': 'price_yyyyy'     // $9,999/month plan
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price: prices[plan],
      quantity: 1
    }],
    mode: 'subscription',
    success_url: `${req.headers.origin}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/pricing`
  })

  res.json({ url: session.url })
})

// Stripe webhook
app.post('/api/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature']

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        // Provision access to DSP/SSP
        break
      case 'invoice.payment_succeeded':
        // Continue subscription
        break
      case 'invoice.payment_failed':
        // Handle failed payment
        break
    }

    res.json({received: true})
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`)
  }
})

app.listen(process.env.PORT || 3000)