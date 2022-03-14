import Announcement from '../components/Announcement';
import React from 'react';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import { Products } from '../components/Products';


export const Home = () => {
    return (
        <div>
            <Announcement />
            <NavBar />
            <Slider />
            <Products />
            <Categories />
        </div>
    );
};
