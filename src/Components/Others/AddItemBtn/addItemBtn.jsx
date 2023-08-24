import React, { useState } from 'react';
import styles from './addItemBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function AddItemBtn ({ context, amount, product, children, disable }) {

    const [isPending, setIsPending] = useState(false);

    const addItem = async (context, amount, deviceId, products, item) => {
        console.log(amount);
        Array.from(Array(amount)).forEach(count => products[item._id].push(item));
        // sessionStorage.setItem('cart', JSON.stringify(products));
        await fetch('https://inspiron-server-9gmf.onrender.com/add-to-cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ deviceId, product: products })
        }).then(res => res.json()).then(data => {
            context.toggleProductCount(context.productCount + amount);
            setIsPending(false);
            // if (updateAmount !== undefined){
            //     updateAmount(amount + 1);
            // }
            return toast.success(`${amount} ${item.title} was added to your cart`, {
                position: toast.POSITION.TOP_RIGHT,
                hideProgressBar: true
            })
        }).catch(err => console.log(err));
    }

    const addItemToCart = async (e) => {
        e.preventDefault();
        setIsPending(true);
        const deviceId = context.data.deviceId;
        const cart = await fetch('https://inspiron-server-9gmf.onrender.com/fetch-cart-item', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ deviceId: deviceId })
        }).then(res => res.json()).then(data => data).catch(err => {
            if (err) {
                return new Error("Server error");
            }
        });
        // if no item set to cart at all
        if (!Object.keys(cart.data).length){
            const products = {};
            products[product._id] = [];
            await addItem(context, amount, deviceId, products, product);
        }
        // if item exist in cart
        else {
            //if the product we want to store is in the cart already
            if (Object.keys(cart.data).includes(product._id)){
                const products = {...cart.data};
                // products[product._id] = [];
                await addItem(context, amount, deviceId, products, product);
            }
            //if the product we want to store is not in the cart
            else {
                const products = {...cart.data};
                products[product._id] = [];
                await addItem(context, amount, deviceId, products, product);
            }
        }
    }
    return (
        <button disabled={disable || isPending} className={styles.addBtn} onClick={addItemToCart}>
            {isPending ? 
            <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.addBtnSpinner} />
            :
            children
            }
        </button>
    )
}

export default AddItemBtn
