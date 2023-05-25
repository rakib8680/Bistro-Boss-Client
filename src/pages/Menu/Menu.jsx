import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/cover/Cover';
import MenuImg from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import PizzaImg from '../../assets/menu/pizza-bg.jpg'
import SaladImg from '../../assets/menu/salad-bg.jpg'
import SoupImg from '../../assets/menu/soup-bg.jpg'


const Menu = () => {

    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={MenuImg} title="Our Menu"></Cover>
            {/* main cover  */}
            <SectionTitle subHeading="Don't miss" heading="Todays Offer"></SectionTitle>
            {/* offered menu items  */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desert menu items  */}
            <MenuCategory items={desserts} title="dessert" coverImg={dessertImg}> </MenuCategory>
            {/* pizza menu items  */}
            <MenuCategory items={pizzas} title="pizza" coverImg={PizzaImg}> </MenuCategory>
            {/* Salad menu items  */}
            <MenuCategory items={salad} title="salads" coverImg={SaladImg}> </MenuCategory>
            {/* Salad menu items  */}
            <MenuCategory items={soups} title="soups" coverImg={SoupImg}> </MenuCategory>

        </div>
    );
};

export default Menu;