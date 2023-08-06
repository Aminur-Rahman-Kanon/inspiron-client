import './App.css';
import { useEffect, useState } from 'react';
import Topbar from './Components/Pages/Topbar/TopbarMain/topbar';
import { Routes, Route } from 'react-router-dom';
import HomepageMain from './Components/Pages/Homepage/HomepageMain/homepageMain';
import Sidedrawer from './Components/Others/Sidedrawer/sidedrawer';
import Backdrop from './Components/Others/Backdrop/backdrop';
import AuthContext from './Components/Others/AuthContext/authContext';
import { disableScroll } from './Components/Others/HelperFunction/helperFunction';

function App() {

    const [products, setProducts] = useState({});
    const [sidedrawer, setSiderawer] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    
    useEffect(() => {
        fetch('https://inspiron-19oa.onrender.com/products/all-products')
        .then(res => res.json())
        .then(result => setProducts(result.data))
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (backdrop) {
            disableScroll();
        }
        else {
            window.onscroll = () => {}
        }
    }, [backdrop])

    const toggleSidedrawer = () => {
        setSiderawer(true);
        setBackdrop(true);
    }

    const toggleBackdrop = () => {
        setBackdrop(false);
        setSiderawer(false);
    }

    return (
        <div className="App">
            <AuthContext.Provider value={{ products: products }}>
                <Backdrop backdrop={backdrop} togglebackdrop={toggleBackdrop}/>
                <Topbar changeSidedrawer={toggleSidedrawer} />
                <Sidedrawer sidedrawer={sidedrawer}/>
                <Routes>
                    <Route path='/' element={<HomepageMain />}/>
                </Routes>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
