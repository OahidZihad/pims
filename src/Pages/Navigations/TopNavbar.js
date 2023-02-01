import React, { useEffect, useRef, useState } from 'react';
import bdLogo from '../../Assets/bdLogo.png';
import { FaList, FaRegHeart } from "react-icons/fa";
import './topNavbar.css'
import { Link, NavLink, useLocation } from 'react-router-dom';

const TopNavbar = () => {
    const topnav = useRef();
    const location = useLocation()
    const [pathTitle, setPathTitle] = useState("ব্যক্তিগত তথ্য সংগ্রহ");

    useEffect(()=>{
        if (location.pathname === '/employee-info/prize-info') {
            setPathTitle("পুরস্কার / সনদপত্র")
            topnav.current.style.display = 'none'
        } else if(location.pathname === '/employee-info/leave-management'){
            setPathTitle('ছুটি সম্পর্কিত তথ্য')
            topnav.current.style.display = 'none'
        } else if(location.pathname === '/employee-info/punishment'){
            setPathTitle('শৃঙ্খলা সম্পর্কিত তথ্য')
            topnav.current.style.display = 'none'
        } else if(location.pathname === '/'){
            setPathTitle('হোম')
            topnav.current.style.display = 'none'
        } else {
            setPathTitle("ব্যক্তিগত তথ্য সংগ্রহ")
            topnav.current.style.display = 'block'
        }
    },[location.pathname])
    
    return (
        <div>
            <nav class="navbar navbar-expand-sm shadow">
                <div class="container-fluid p-0">
                    {/* <div class="navbar-brand text-center"><FaList/></div> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="component_container py-2 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-lg-0">
                            <li class="nav-item text-center">
                                <h4 className='m-0 fw-bold' style={{color: '#683091'}}>{pathTitle}</h4>
                            </li>
                        </ul>
                        <div class="d-flex justify-content-between justify-content-md-around align-items-center">
                            <img className='img-fluid mx-3' style={{width: '50px', height: '50px'}} src={bdLogo} alt=""/>
                            <p className='text-success fw-bold m-0'>শিল্প মন্ত্রণালয় <br/> গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='component_container d-flex justify-content-center'>
                <div class="topnav" id="myTopnav" ref={topnav}>
                    <NavLink
                        className={({ isActive, isPending }) => {
                            if(location.pathname === '/employee-info'){
                                isActive = true;
                            }
                            return isActive ? "activeBtn" : "";
                        }}
                        to="/employee-info/">
                        কর্মচারী / কর্মকর্তা তথ্য
                    </NavLink>

                    <NavLink
                        className={({ isActive, isPending }) => {
                            return isActive ? "activeBtn" : "";
                        }} 
                        to="/employee-info/address">ঠিকানা
                    </NavLink>

                    <NavLink
                        className={({ isActive, isPending }) => {
                            return isActive ? "activeBtn" : "";
                        }}
                        to="/employee-info/education-degree">প্রাতিষ্ঠানিক শিক্ষা
                    </NavLink>

                    <NavLink
                        className={({ isActive, isPending }) => {
                            return isActive ? "activeBtn" : "";
                        }}
                        to="/employee-info/spouse">স্বামী / স্ত্রী
                    </NavLink>
                    
                    <NavLink
                        className={({ isActive, isPending }) => {
                            return isActive ? "activeBtn" : "";
                        }}
                        to="/employee-info/child">সন্তান
                    </NavLink>
                    
                    <NavLink
                        className={({ isActive, isPending }) => {
                            return isActive ? "activeBtn" : "";
                        }}
                        to="/employee-info/transfer">বদলি
                    </NavLink>

                    <NavLink
                        className={({ isActive, isPending }) => {
                            return isActive ? "activeBtn" : "";
                        }} to="/employee-info/travell">ভ্রমণ
                    </NavLink>

                    <NavLink
                        className={({ isActive, isPending }) => {
                            return isActive ? "activeBtn" : "";
                        }}
                        to="/employee-info/language-efficiency">ভাষাগত দক্ষতা
                    </NavLink>

                    <NavLink
                        className={({ isActive, isPending }) => {
                            return isActive ? "activeBtn" : "";
                        }}
                        to="/employee-info/trainings">প্রশিক্ষণ
                    </NavLink>

                    <NavLink
                        className={({ isActive, isPending }) => {
                            return isActive ? "activeBtn" : "";
                        }} to="/employee-info/extra-curricular">এক্সট্রা-কারিকুলার
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;