import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])

    console.log(prices);
    return (
        <>
            <div className='mx-12 '>
                <h1 className='text-5xl  font-bold text-center bg-purple-300 p-4 text-purple-950'>Awesome affordable price</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-3 mx-12'>
            {
                prices.map(price => <PriceCard key={price.id} price={price}></PriceCard>)
            }
            </div>
        </>
    );
};

export default PriceList;