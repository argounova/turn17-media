import { useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const deposit = {
    stripeId: 'price_1NHbkUCCfVRJgqGQPLB6pQfc',
    quantity: 1,
}

const PayDeposit = () => {
  const { query } = useRouter()
  const status = query.status
  const [success, setSuccess] = useState(false)
  const paymentSuccessful = () => {
      if (status === 'success') {
          setSuccess(true)
      }
  }
    
    const handleCheckout = async () => {
        console.log(deposit)
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
      <>
        {status? (
          <Button 
            fullWidth
            variant='contained'
            color='warning'
            sx={{ fontSize: 'var(--h4)' }}
            disabled    
          >Deposit Submitted
          </Button>
        ) : (
          <Button 
            fullWidth
            variant='contained'
            color='warning'
            sx={{ fontSize: 'var(--h4)' }}    
            onClick={handleCheckout}
          >Pay Deposit
          </Button>
        )}
      </>
    )
}

export default PayDeposit