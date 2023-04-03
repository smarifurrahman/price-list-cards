import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div className='bg-purple-300 mt-5 rounded-md p-5 text-center'>
            <h2> 
                <span className='text-5xl font-bold text-purple-700'>{price.price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h5 className='text-3xl font-semibold mt-2'>{price.name}</h5>
        </div>
    );
};

export default PriceCard;