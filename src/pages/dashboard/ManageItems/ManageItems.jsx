import React from 'react';
import { FaPenAlt, FaPencilAlt, FaPencilRuler, FaPenNib, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useMenu from '../../../hooks/useMenu';

const ManageItems = () => {

    const [menu, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()

    const handleUpdateItems = _id => {

    }

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
                axiosSecure.delete(`/menu/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
    };

    return (
        <div className='w-full px-10 '>
            <SectionTitle subHeading="Hurry Up" heading="Manage All Items"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((menuItem, index) => <tr key={menuItem._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={menuItem.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{menuItem.name}</div>
                                    </div>
                                </td>
                                <td>$ {menuItem.price}</td>
                                <td>
                                    <button onClick={() => handleUpdateItems(menuItem._id)} className="btn btn-ghost btn-xs"><FaPencilRuler size={20} className='text-green-600' /></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItems(menuItem._id)} className="btn btn-ghost btn-xs"><FaTrash size={20} className='text-red-600' /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;