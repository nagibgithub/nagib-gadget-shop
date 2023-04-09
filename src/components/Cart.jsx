import React from 'react';
import {getDataFromDB} from '../utilities/functionDB';
import {useLoaderData} from 'react-router-dom';
import CartItem from './Cards/CartItem';

const Cart = () => {

    const storedData = getDataFromDB()
    const loadData = useLoaderData()
    const newDataCartArr = []
    for (const data in storedData) {
        let x = loadData.find(pd => pd.id === data)
        x.quantity = storedData[data]
        newDataCartArr.push(x)
    }
    return (
        <div>
            {
                newDataCartArr.map(product => <CartItem
                    key={product.id}
                    product={product}
                ></CartItem>)
            }
        </div>
    );
};

export default Cart;