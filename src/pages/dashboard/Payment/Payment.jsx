import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);


const Payment = () => {

    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please Process" ></SectionTitle>
            payment
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;