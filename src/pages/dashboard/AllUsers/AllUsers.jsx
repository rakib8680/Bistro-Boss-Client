import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrash, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data
    });

    const handleMakeAdmin = user => {
        fetch(`https://bistro-boss-server-delta-blush.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH',

        })
            .then(res => res.json())
            .then(dat => {
                if (dat.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    const handleDeleteItems = _id => {

    }

    return (
        <div className='w-full ps-10'>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h1 className='text-3xl font-semibold my-3'>Total Users : {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user?.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)}><FaUserShield size={40} className='bg-warning p-2 rounded-full' /></button>
                                }</td>
                                <td>
                                    <button onClick={() => handleDeleteItems(user._id)} className="btn btn-ghost btn-xs"><FaTrash size={20} className='text-red-600' /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;