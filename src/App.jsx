import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Topbar from './Components/Pages/Topbar/TopbarMain/topbar';
import HomepageMain from './Components/Pages/Homepage/HomepageMain/homepageMain';
import Sidedrawer from './Components/Others/Sidedrawer/sidedrawer';
import Backdrop from './Components/Others/Backdrop/backdrop';
import AuthContext from './Components/Others/AuthContext/authContext';
import { disableScroll } from './Components/Others/HelperFunction/helperFunction';
import Footer from './Components/Pages/Footer/footer';
import ProductDetails from './Components/Pages/Products/ProductDetails/productDetails';
import Shop from './Components/Pages/Shop/shop';

function App() {

    const [products, setProducts] = useState({});
    const [sidedrawer, setSiderawer] = useState(false);
    const [backdrop, setBackdrop] = useState(false);

    const {isLoading, error, data} = useQuery({
        queryKey: ['data'],
        queryFn: () => fetch('https://inspiron-server-9gmf.onrender.com/products/all-products').then(res => res.json()).then(result => result.data),
        staleTime: 100000
    });
    
    // useEffect(() => {
    //     fetch('https://inspiron-server-9gmf.onrender.com/products/all-products')
    //     .then(res => res.json())
    //     .then(result => setProducts(result.data))
    //     .catch(err => console.log(err));
    // }, []);

    console.log(data);

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
            <AuthContext.Provider value={{ products: data }}>
                <Backdrop backdrop={backdrop} togglebackdrop={closeSidedrawer}/>
                <Topbar changeSidedrawer={openSidedrawer} />
                <Sidedrawer sidedrawer={sidedrawer}/>
                <Routes>
                    <Route path='/' element={<HomepageMain />}/>
                    <Route path='/product/:category/:productId' element={<ProductDetails />} />
                    <Route path='/shop/:category' element={<Shop />} />
                </Routes>
                <Footer />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
