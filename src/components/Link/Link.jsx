import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='p-1 hover:bg-purple-500'>
            <a href={route.path} className='text-lg'>{route.name}</a>
        </li>
    );
};

export default Link;