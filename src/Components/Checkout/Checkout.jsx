import { AddressElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react'

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [step, setStep] = useState(1);
    const [address, setAddress] = useState(null)

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
        <div className='flex flex-col justify-center'>
            <ul className="steps">
                <li className="step step-primary">Shipping</li>
                <li className={step === 2 ? "step step-primary" : "step"}>Billing</li>
            </ul>
            {step === 1 ?
                (<div className='flex w-full p-4'>
                    <form className="flex flex-1 flex-col gap-4 p-4 h-full">
                        <AddressElement onChange={e => setAddress(e)} options={{"mode": "shipping"}} />
                        <button className="p-4 bg-neutral text-white" disabled={!stripe} onClick={() => setStep(prev => prev+1)}>Next</button>
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