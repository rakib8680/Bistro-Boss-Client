import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaHamburger, FaListAlt , FaPhoneAlt} from 'react-icons/fa'


const DashBoard = () => {
    return (
        <>
          
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><NavLink to='/dashboard/home'><FaHome />User Home</NavLink></li>
                        <li><NavLink to='/dashboard/history'><FaWallet />Payment History</NavLink></li>
                        <li><NavLink to='/dashboard/myCart'><FaShoppingCart />My Cart</NavLink></li>
                        <li><NavLink to='/dashboard/reservations'><FaCalendarAlt />Reservations</NavLink></li>
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