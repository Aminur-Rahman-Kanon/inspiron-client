import React, { useEffect, useState, useContext } from 'react';
import './checkout.css';
import AuthContext from '../../Others/AuthContext/authContext';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CheckoutItems from './CheckoutItems/checkoutItems';
import UseQueryProducts from '../../Others/useQueryProducts/useQueryProducts';
import { PaymentElement } from '@stripe/react-stripe-js';


const cardStyle = {
    hidePostalCode: true,
    iconStyle: 'solid',
    style: {
        base: {
        color: "#7db2ed",
        fontFamily: 'Arial, sans-serif',
        fontSize: '12px',
        fontSmoothing: "antialiased",
        "::placeholder": {
            color: "lightgray"
        }
    },
        invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
        }
    }
};

function Checkout() {

    const context = useContext(AuthContext);

    // const item = UseQueryProducts();

    // const stripe = useStripe();;
    // const elements = useElements();

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // //if stripe and element instance are null then abort
        // if (!stripe && !elements) return;

        // const {error, paymentMethod} = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: elements.getElement(CardElement),
        // });

        // try {
        //     const { id } = paymentMethod;
        //     await fetch('http://localhost:8000/submit-payment', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({ id, amount: 10 })
        //     }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
        // } catch (error) {
        //     console.log(error);
        // }
    }

    return (
        <section className='checkout-container-main'>
            <div className='checkout-container'>
                <div className='payment-container'>
                    <h3 className='checkout-h3'>Payment Details</h3>
                    <form className='payment-form' onSubmit={handleSubmit}>
                        <fieldset className='payment-form-filedset'>
                            <label className='payment-form-label'>Full Name</label>
                            <input type='text' placeholder='Full Name' className='payment-form-input'/>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            <label className='payment-form-label'>Full Address</label>
                            <textarea placeholder='Full Address' className='payment-form-textarea'/>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            <label className='payment-form-label'>Email Address</label>
                            <input type='email' placeholder='Email Address' className='payment-form-input'/>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            <label className='payment-form-label'>Phone Number</label>
                            <input type='number' placeholder='Phone Number' className='payment-form-input'/>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            <label className='payment-form-label'>Card Details</label>
                            {/* <CardElement options={cardStyle} className='card-element-container'/> */}
                            <PaymentElement />
                        </fieldset>
                        <button type='submit' className='submit-btn'>Pay Now</button>
                    </form>
                </div>
                <div className='vertical-line'></div>
                <div className='item-container'>
                    {/* <CheckoutItems items={item} /> */}
                </div>
            </div>
        </section>
    )
}

export default Checkout;
