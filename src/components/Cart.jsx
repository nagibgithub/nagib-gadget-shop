import React from 'react';
import { getDataFromDB } from '../utilities/functionDB';

const Cart = () => {

    const storedData = getDataFromDB()
    // console.log(storedData);
    // const cartData = 

    return (
        <div>
            <h1>this is product Cart</h1>
        </div>
    );
};

export default Cart;