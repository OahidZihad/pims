import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavbar from '../Navigations/SideNavbar';
import TopPrizeNavbar from '../Navigations/TopPrizeNavbar';

const PrizeInfo = () => {
    return (
        <div>
            <TopPrizeNavbar></TopPrizeNavbar>
            <SideNavbar></SideNavbar>
            <div className='component_container py-2 my-3 py-md-5 my-md-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default PrizeInfo;