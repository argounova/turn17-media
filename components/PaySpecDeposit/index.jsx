import { Button } from '@mui/material'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const deposit = {
  stripeId: 'price_1NOQsKCCfVRJgqGQpvux2Iwc',
  quantity: 1,
}

const PaySpecDeposit = () => {
    
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post('/api/checkout-session', {
      deposit: deposit,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  }

  return(
    <Button 
      variant='contained'
      onClick={handleCheckout}
      style={{ backgroundColor: 'var(--mb2-2)', color: 'var(--char5)', width: '200px' }}
    >Pay Deposit
    </Button>
  )
}

export default PaySpecDeposit