import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';

const MyCart = () => {
    const [cart] = useCart()
    const total = cart.reduce((acc, item) => item.price + acc, 0)

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className='uppercase'>
                <h3 className='text-3xl'>Total Items : {cart?.length}</h3>
                <h3 className='text-3xl'>Total Price : ${total}</h3>
                <button className='btn btn-warning btn-sm'>PAY</button>
            </div>
        </div>
    );
};

export default MyCart;