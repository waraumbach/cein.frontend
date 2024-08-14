import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import Checkout from '../Components/Checkout/Checkout';
import { getPaymentIntent } from '../service/payment';
import { useOrder } from '../context/orderContext';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE)

const CheckoutContainer = () => {
    const [clientSecret, setClientSecret] = useState('');
    const { totalPrice } = useOrder();
    const navigate = useNavigate();

    const options = {
        clientSecret: clientSecret,
    };

    useEffect(() => {
        if (totalPrice() === 0) { navigate('/') }

        const getPayment = async () => {
            try {
                const data = await getPaymentIntent(totalPrice() * 100);
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