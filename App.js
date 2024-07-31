import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('your-publishable-key-here');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <CheckoutForm />
      </div>
    </Elements>
  );
}

export default App;
