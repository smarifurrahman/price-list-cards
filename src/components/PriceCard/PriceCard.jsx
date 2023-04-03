import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-purple-300 mt-5 rounded-md px-5 py-8 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-bold text-purple-700'>{price.price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h5 className='text-3xl font-semibold my-3 text-center'>{price.name}</h5>
            <div className='py-3'>
                <h6 className='text-xl font-semibold underline underline-offset-4 decoration-wavy decoration-purple-700 mb-4'>Features: </h6>
                {
                    price.features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <button className='w-full bg-purple-500 py-3 rounded-md text-lg font-medium text-white hover:bg-purple-600 mt-auto'>Enroll Now</button>
        </div>
    );
};

export default PriceCard;