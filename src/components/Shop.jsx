import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utilities/functionDB';

const Shop = () => {

    const loaderData = useLoaderData()
    const handleAddToCart = (id) => {
        addToDb(id)
    }
    return (
        <div className='my-own'>
            {
                loaderData.map(product => <ProductCard
                    key={ product.id }
                    product={ product }
                    handleAddToCart={ handleAddToCart }
                ></ProductCard>)
            }
        </div>
    );
};

export default Shop;