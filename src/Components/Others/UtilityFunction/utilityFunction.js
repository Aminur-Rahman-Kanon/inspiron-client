import { toast } from 'react-toastify';

export const disableScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    console.log(scrollLeft, scrollTop);
    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop)
}

export const fetchAddedProducts = async (deviceId) => {
    const addedProducts = await fetch('https://inspiron-server-9gmf.onrender.com/fetch-cart-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ deviceId })
    }).then(res =>res.json()).then(data => data.data).catch(err => console.log(err));
    return addedProducts;
}

const addItem = async (context, amount, deviceId, products, item) => {
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
        return toast.success(`${amount} ${item.title} was added to your cart`, {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true
        })
    }).catch(err => console.log(err));
}

export const addItemToCart = async (context, product, amount) => {
    const deviceId = context.data.deviceId;
    const cart = await fetch('https://inspiron-server-9gmf.onrender.com/fetch-cart-item', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ deviceId: deviceId })
    }).then(res => res.json()).catch(err => {
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
            products[product._id] = [];
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

export const removeItemFromCart = async (context, product) => {
    const deviceId = context.data.deviceId;
    const cart = await fetch('https://inspiron-server-9gmf.onrender.com/fetch-cart-item', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ deviceId: deviceId })
    }).then(res => res.json()).catch(err => {
        if (err) {
            return new Error("Server error");
        }
    });
    //if no item in the cart then abort
    if (!Object.keys(cart.data).length) return;
    //filtering the item to remove
    const itemToDelete = Object.keys(cart.data).filter(item => item === product._id)[0];
    //if only 1 or no item exist in the array then remove the property
    if (cart.data[itemToDelete].length <= 1){
        delete cart.data[itemToDelete];
        // sessionStorage.setItem('cart', JSON.stringify(cart));
        await fetch('https://inspiron-server-9gmf.onrender.com/add-to-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ deviceId, product: cart.data })
        }).then(res => res.json()).then(data => {
            context.toggleProductCount(context.productCount -1);
        })
    }
    else {
        cart.data[itemToDelete].pop();
        // sessionStorage.setItem('cart', JSON.stringify(cart));
        await fetch('https://inspiron-server-9gmf.onrender.com/add-to-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ deviceId, product: cart.data })
        }).then(res => res.json()).then(data => {
            context.toggleProductCount(context.productCount -1);
        })
    }
}

export const removeItems = async (context, product) => {
    const deviceId = context.data.deviceId;
    const cart = await fetch('https://inspiron-server-9gmf.onrender.com/fetch-cart-item', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ deviceId: deviceId })
    }).then(res => res.json()).catch(err => {
        if (err) {
            return new Error("Server error");
        }
    });
    //if no item in the cart then abort
    if (!Object.keys(cart.data)) return;
    const itemToDelete = Object.keys(cart.data).filter(item => item === product._id)[0];
    if (itemToDelete){
        delete cart.data[itemToDelete];
        await fetch('https://inspiron-server-9gmf.onrender.com/add-to-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ deviceId, product: cart.data })
        }).then(res => res.json()).then(data => {
            context.toggleProductCount(context.productCount -1);
        })
    }
}