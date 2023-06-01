import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaHamburger, FaListAlt, FaPhoneAlt, FaUtensils, FaBook, FaUsers, FaBars } from 'react-icons/fa'
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';


const DashBoard = () => {

    const [cart] = useCart()

    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to='/dashboard/home'><FaHome />Admin Home</NavLink></li>
                                    <li><NavLink to='/dashboard/addItem'><FaUtensils />Add Items</NavLink></li>
                                    <li><NavLink to='/dashboard/manageItems'><FaBars />Manage Items</NavLink></li>
                                    <li><NavLink to='/dashboard/manageBookings'><FaBook />Manage Bookings</NavLink></li>
                                    <li><NavLink to='/dashboard/allUsers'><FaUsers />All Users</NavLink></li>

                                </>
                                :
                                <>
                                    <li><NavLink to='/dashboard/home'><FaHome />User Home</NavLink></li>
                                    <li><NavLink to='/dashboard/history'><FaWallet />Payment History</NavLink></li>
                                    <li className='flex'>
                                        <NavLink to='/dashboard/myCart'><FaShoppingCart />
                                            My Cart
                                            <div className="badge badge-ghost">+{cart?.length || 0}</div>
                                        </NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/reservations'><FaCalendarAlt />Reservations</NavLink></li>
                                </>
                        }
                        <div className=' divider'></div>
                        <li><NavLink to='/'><FaHome />Home</NavLink></li>
                        <li><NavLink to='/menu' ><FaListAlt />Menu</NavLink></li>
                        <li><NavLink to='/order/salad' > <FaHamburger />Order Food</NavLink></li>
                        <li><NavLink to='/contact' > <FaPhoneAlt />Contact</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashBoard;