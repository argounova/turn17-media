const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function CheckoutSession(req, res) {
    const { deposit } = req.body

    const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://www.turn17media.com'

    const lineItems = {
        price: deposit.stripeId,
        quantity: deposit.quantity
    }

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [lineItems],
        mode: 'payment',
        success_url: redirectURL + '/get-started/singlepage/?status=success',
        cancel_url: redirectURL + '?status=cancel',
      });
      
      res.json({ id: session.id });
}