import React, { useEffect, useRef, useState } from 'react';
import {ProSidebar, Sidebar, Menu, MenuItem, useProSidebar, SidebarHeader, SidebarContent, SidebarFooter} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { MdOutlineGavel } from "react-icons/md";
import { CgLoadbarDoc } from "react-icons/cg";
import '../Navigations/sideNavbar.css';
import 'react-pro-sidebar/dist/css/styles.css';
import bdLogo from '../../Assets/bdLogo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiLogOut, FiHome } from "react-icons/fi";


const SideNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuCollapse, setMenuCollapse] = useState(true)

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    useEffect(()=>{
        if (!menuCollapse) {
            document.body.style.marginLeft = '140px'
            document.body.style.transition = 'all 0.4s'
        } else{
            document.body.style.marginLeft = '0px'
            document.body.style.transition = 'all 0.4s'
        }
    },[menuCollapse])

    // useEffect(() => {
    //     var header = document.getElementById("menu_container");
    //     var btns = header.getElementsByClassName("menu_item");
    //     for (var i = 0; i < btns.length; i++) {
    //         btns[i].addEventListener("click", function() {
    //             var current = document.getElementsByClassName("active");
    //             current[0].className = current[0].className.replace(" active", "");
    //             this.className += " active";
    //         });
    //     }
    // }, [])
    
    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse} width="220px">
                    <div className="logotext">
                        <p>{menuCollapse ? <img className='w-50' src={bdLogo} alt=""/> : <img className='w-50' src={bdLogo} alt=""/> }</p>
                    </div>
                    <div className="closemenu" onClick={menuIconClick} collapsed={menuCollapse}>
                        {menuCollapse ? (<FaList/>) : (<FaList/>)}
                    </div>
                    <SidebarContent>
                        <Menu id="menu_container" iconShape="square">
                            <MenuItem active={location.pathname === "/"} className='menu_item' onClick={()=> navigate('/')} icon={<FiHome />}>হোম</MenuItem>
                            <MenuItem active={location.pathname === "/employee-info"} className='menu_item' onClick={()=> navigate('/employee-info')} icon={<AiOutlineUserAdd />}>ব্যক্তিগত তথ্য</MenuItem>
                            <MenuItem active={location.pathname === "/employee-info/prize-info"} className='menu_item' onClick={()=> navigate('/employee-info/prize-info')} icon={<SlBadge />}>পুরস্কার / সনদপত্র</MenuItem>
                            <MenuItem active={location.pathname === "/employee-info/leave-management"} className='menu_item' onClick={() => navigate('/employee-info/leave-management')} icon={<CgLoadbarDoc />}>ছুটি সম্পর্কিত তথ্য</MenuItem>
                            <MenuItem active={location.pathname === "/employee-info/punishment"} className='menu_item' onClick={() => navigate('/employee-info/punishment')} icon={<MdOutlineGavel />}>শৃঙ্খলা সম্পর্কিত তথ্য</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem active={location.pathname === "/login"} className='menu_item' onClick={()=> navigate('/login')} icon={<FiLogOut />}>লগ আউট</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default SideNavbar;