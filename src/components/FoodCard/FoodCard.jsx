import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import { AuthContext } from '../../providers/AuthProvider';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item || {};
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname
    const [,refetch] = useCart()

    const handleAddToCart = item => {
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Food Added To Your Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    console.log(data);
                })
        }
        else {
            Swal.fire({
                title: 'Please Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Goto Login Page',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

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
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 bg-gray-100">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;