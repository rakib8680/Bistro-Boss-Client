import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart()
    const total = cart.reduce((acc, item) => item.price + acc, 0)

    const handleDeleteItems = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-delta-blush.vercel.app/carts/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Food has been removed.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className='uppercase font-semibold flex justify-evenly items-center mb-10'>
                <h3 className='text-3xl'>Total Items : {cart?.length}</h3>
                <h3 className='text-3xl'>Total Price : ${total}</h3>
                <Link to='/dashboard/payment' className='btn btn-warning btn-sm'>PAY</Link>
            </div>

            {/* table  */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row, index) => <tr
                                key={row._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {row.name}
                                </td>
                                <td className='text-end'>${row.price}</td>
                                <td>
                                    <button onClick={() => handleDeleteItems(row._id)} className="btn btn-ghost btn-xs"><FaTrash size={20} className='text-red-600' /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCart;