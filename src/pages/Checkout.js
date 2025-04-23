// src/pages/Checkout.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const Checkout = () => {
  const { state } = useCart();

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm cartItems={state.cart} />
    </Elements>
  );
};

export default Checkout;