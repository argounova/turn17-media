const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function CheckoutSession(req, res) {
    const { deposit } = req.body

    const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://turn17-media-git-development-turn17-media.vercel.app'

    const lineItems = {
        price: deposit.stripeId,
        quantity: deposit.quantity
    }

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [lineItems],
        mode: 'payment',
        success_url: redirectURL + '/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: redirectURL + '/cancel',
      });
      
      res.json({ id: session.id });
}