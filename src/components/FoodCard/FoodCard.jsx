import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item || {};
    return (
        <div>
            <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='bg-yellow-500 text-sky-800 font-bold px-2 absolute right-0 top-10 text-lg'>Price : ${price}</p>
                    <p>Recipe : {recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-4 mt-4 bg-gray-100">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;