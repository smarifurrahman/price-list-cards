import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div className='flex gap-1 items-center my-1'>
            <CheckBadgeIcon className='h-6 w-6 text-purple-700'></CheckBadgeIcon>
            <span>{feature}</span>
        </div>
    );
};

export default Feature;