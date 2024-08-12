import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import Checkout from '../Components/Checkout/Checkout';
import { getPaymentIntent } from '../service/payment';
import { useOrder } from '../context/orderContext';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE)

const CheckoutContainer = () => {
    const [clientSecret, setClientSecret] = useState('');
    const { totalPrice } = useOrder();

    const options = {
        clientSecret: clientSecret,
    };

    useEffect(() => {
        const getPayment = async () => {
            try {
                const data = await getPaymentIntent(totalPrice());
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        
        getPayment();
    }, []);

    return clientSecret !== '' ? (
        <Elements stripe={stripePromise} options={options}>
            <Checkout />
        </Elements>
    ) : <></>
}

export default CheckoutContainer