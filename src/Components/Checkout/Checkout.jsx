import { AddressElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { updateUserAddress } from '../../service/auth';
import { useOrder } from '../../context/orderContext';
import { createOrder } from '../../service/order';

const Checkout = () => {
    const { user } = useAuth();
    const { orderItems } = useOrder();
    const stripe = useStripe();
    const elements = useElements();
    const [step, setStep] = useState(1);
    const [address, setAddress] = useState(null)
    const [userAddress, setUserAddress] = useState(null)

    const handleAddressDone = () => {
        const newAddress = {
            name: address.value.name,
            street: {
                addressLine1: address.value.address.line1,
                addressLine2: address.value.address.line2
            },
            city: address.value.address.city,
            postalCode: address.value.address.postal_code
        }

        setUserAddress(newAddress);
        const res = updateUserAddress(user.token, newAddress)
        setStep(prev => prev + 1)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        createOrder(Object.values(orderItems).map(v => ({ productId: v._id, quantity: v.quantity })), user.token, userAddress)

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
        <div className='flex flex-col justify-center'>
            <ul className="steps">
                <li className="step step-primary">Shipping</li>
                <li className={step === 2 ? "step step-primary" : "step"}>Billing</li>
            </ul>
            {step === 1 ?
                (<div className='flex w-full p-4'>
                    <form className="flex flex-1 flex-col gap-4 p-4 h-full">
                        <AddressElement onChange={e => setAddress(e)} options={{ "mode": "shipping" }} />
                        <button className="p-4 bg-neutral text-white" disabled={!stripe} onClick={handleAddressDone}>Next</button>
                    </form>
                </div>) :
                (<div className='flex w-full p-4'>
                    <form className="flex flex-1 flex-col gap-4 p-4 h-full" onSubmit={handleSubmit}>
                        <PaymentElement />
                        <button className="p-4 bg-neutral text-white" disabled={!stripe}>Submit</button>
                    </form>
                </div>)}
        </div>
    )
}

export default Checkout