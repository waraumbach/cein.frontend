import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react'
import { useOrder } from '../../context/orderContext';

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { orderItems, totalPrice } = useOrder();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "https://cein-frontend.vercel.app/",
            },
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
        }
    };
    return (
        <div className='flex w-full p-4'>
            <div className='flex-1'>
                {orderItems.map(item => <p>{item.product.name}</p>)}
                <p>{totalPrice()} Baht</p>
            </div>
            <form className="flex flex-1 flex-col gap-4 p-4 h-full" onSubmit={handleSubmit}>
                <PaymentElement />
                <button className="p-4 bg-neutral text-white" disabled={!stripe}>Submit</button>
            </form>
        </div>
    )
}

export default Checkout