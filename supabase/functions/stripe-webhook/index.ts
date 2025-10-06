// Supabase Edge Function for Stripe Webhooks
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Stripe from 'https://esm.sh/stripe@19.1.0?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
})

const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET') || ''

serve(async (req) => {
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return new Response('No signature', { status: 400 })
  }

  try {
    const body = await req.text()
    const event = stripe.webhooks.constructEvent(body, signature, endpointSecret)

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        console.log('Payment successful:', session.id)

        // TODO: Update user credits in Supabase
        // const { data, error } = await supabase
        //   .from('users')
        //   .update({ credits: credits + purchased_amount })
        //   .eq('email', session.customer_email)

        break
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        console.log('Subscription updated:', event.data.object.id)
        break
      }

      case 'customer.subscription.deleted': {
        console.log('Subscription cancelled:', event.data.object.id)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (err) {
    console.error('Webhook error:', err)
    return new Response('Webhook error', { status: 400 })
  }
})
