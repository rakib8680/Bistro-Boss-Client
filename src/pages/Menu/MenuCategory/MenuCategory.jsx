import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../../Shared/cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className='my-20'>
            {title && <Cover img={coverImg} title={title} ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
            <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-4 mt-4 ">Order Now</Link>
            </div>
        </div>
    );
};

export default MenuCategory;