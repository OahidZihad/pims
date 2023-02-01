import React, { useEffect } from 'react';
import bdLogo from '../../Assets/bdLogo.png'

const Home = () => {

    useEffect(()=>{
        let proSidebar = document.getElementsByClassName('pro-sidebar') 
        if (proSidebar[0].style.width > '150px') {
            document.body.style.marginLeft = '140px'
            document.body.style.transition = 'all 0.4s'
        } else{
            document.body.style.marginLeft = '0px'
            document.body.style.transition = 'all 0.4s'
        }
    },[])

    return (
        <div className='component_container py-2 my-3 py-md-5 my-md-5'>
            <div className='d-flex justify-content-center align-items-center' style={{height: '50vh'}}>
                <div className='text-center'>
                    <img style={{width: '10rem', height: '10rem'}} src={bdLogo} alt=""/>
                    <h2 className='mt-4 fw-bold text-success' style={{lineHeight: '50px'}}>শিল্প মন্ত্রণালয় <br/> গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;