import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Faq = () => {
    const data = useLoaderData()
    console.log(data)
    
    return (
        <div>
            <h2>this is faq page</h2>
        </div>
    );
};

export default Faq;