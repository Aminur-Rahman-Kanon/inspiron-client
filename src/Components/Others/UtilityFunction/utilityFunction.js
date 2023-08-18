import { toast } from 'react-toastify';

export const disableScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    console.log(scrollLeft, scrollTop);
    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop)
}

export const addItemToCart = (context, product, amount) => {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    //if no item set to cart at all
    if (cart === null){
        const item = {};
        item[product._id] = [];
        Array.from(Array(amount)).forEach(count => item[product._id].push(product));
        sessionStorage.setItem('cart', JSON.stringify(item));
        context.toggleProductCount(context.productCount + amount);
    }
    //if item exist in cart
    else {
        //if the product we want to store is in the cart already
        if (Object.keys(cart).includes(product._id)){
            const products = {...cart};
            products[product._id] = [];
            Array.from(Array(amount)).forEach(count => products[product._id].push(product));
            sessionStorage.setItem('cart', JSON.stringify(products));
            context.toggleProductCount(context.productCount + amount);
        }
        //if the product we want to store is not in the cart
        else {
            const products = {...cart};
            products[product._id] = [];
            Array.from(Array(amount)).forEach(count => products[product._id].push(product))
            sessionStorage.setItem('cart', JSON.stringify(products));
            context.toggleProductCount(context.productCount + amount);
        }
    }

    return toast.success(`${amount} ${product.title} was added to your cart`, {
        position: toast.POSITION.TOP_RIGHT
    })
}

export const removeItemFromCart = (context, product) => {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    //if no item in the cart then abort
    if (cart === null) return;
    //filtering the item to remove
    const itemToDelete = Object.keys(cart).filter(item => item === product._id)[0];
    //if only 1 or no item exist in the array then remove the property
    console.log(itemToDelete);
    console.log(cart[itemToDelete]);
    if (cart[itemToDelete].length <= 1){
        delete cart[itemToDelete];
        sessionStorage.setItem('cart', JSON.stringify(cart));
        context.toggleProductCount(context.productCount -1);
    }
    else {
        cart[itemToDelete].pop();
        sessionStorage.setItem('cart', JSON.stringify(cart));
        context.toggleProductCount(context.productCount -1);
    }
    
}