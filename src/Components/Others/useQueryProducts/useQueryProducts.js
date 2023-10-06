import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../AuthContext/authContext';
import { fetchAddedProducts } from '../UtilityFunction/utilityFunction';

function UseQueryProducts() {
    const context = useContext(AuthContext);
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch('https://inspiron-server-9gmf.onrender.com/fetch-cart-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ deviceId: context.data.deviceId })
    }).then(res =>res.json()).then(data => setItem(data.data)).catch(err => console.log(err));
    }, [context]);

    return item;
}

export default UseQueryProducts
