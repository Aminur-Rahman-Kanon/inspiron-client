import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Topbar from './Components/Pages/Topbar/TopbarMain/topbar';
import HomepageMain from './Components/Pages/Homepage/HomepageMain/homepageMain';
import Sidedrawer from './Components/Others/Sidedrawer/sidedrawer';
import Backdrop from './Components/Others/Backdrop/backdrop';
import Cart from './Components/Pages/Cart/cart';
import AuthContext from './Components/Others/AuthContext/authContext';
import { disableScroll } from './Components/Others/UtilityFunction/utilityFunction';
import Footer from './Components/Pages/Footer/footer';
import ProductDetails from './Components/Pages/Products/ProductDetails/productDetails';
import Shop from './Components/Pages/Shop/shop';
import Checkout from './Components/Pages/Checkout/checkout';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function App() {

    const [sidedrawer, setSiderawer] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const [productCount, setProductCount] = useState(0);

    const data = [];

    // const options = {
    //     clientSecret: '{{CLIENT_SECRET}}',
    //   };

    // const {isLoading, error, data} = useQuery({
    //     queryKey: ['data'],
    //     queryFn: () => fetch('https://inspiron-server-9gmf.onrender.com/products/initial-product').then(res => res.json()).then(result => result.data),
    //     staleTime: 99000000
    // });

    useEffect(() => {
        if (backdrop) {
            disableScroll();
        }
        else {
            window.onscroll = () => {}
        }
    }, [backdrop])

    const openSidedrawer = () => {
        setSiderawer(true);
        setBackdrop(true);
    }

    const closeSidedrawer = () => {
        setBackdrop(false);
        setSiderawer(false);
    }

    return (
        <div className="App">
            <ToastContainer autoClose={1500} limit={8} style={{fontSize: '12px'}}/>
            <HelmetProvider>
                <AuthContext.Provider value={{ data: data ? data: {}, toggleBackdrop: setBackdrop, productCount: productCount, toggleProductCount: setProductCount }}>
                    <Backdrop backdrop={backdrop} togglebackdrop={closeSidedrawer}/>
                    <Topbar changeSidedrawer={openSidedrawer} />
                    <Sidedrawer sidedrawer={sidedrawer}/>
                        <Routes>
                            <Route path='/' element={<HomepageMain />}/>
                            <Route path='/shop/:category' element={<Shop />} />
                            <Route path='/shop/:category/:productId' element={<ProductDetails />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/checkout' element={<Checkout />} />
                        </Routes>
                    {/* <Elements stripe={stripePromise} options={{ clientSecret: 'sk_test_51Nhrk0HKCnIrmXjL57yAcwcbjjOdlFRumZg9PujyjGplut2BiGd6Ik8ciAGNRqbpObPInTTM4WQfLG2wGrpqIfhU00RXlLF0OR' }}>
                    </Elements> */}
                    <Footer />
                </AuthContext.Provider>
            </HelmetProvider>
        </div>
    );
}

export default App;
