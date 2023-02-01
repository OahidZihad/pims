import React, { useEffect } from 'react';
import './topNavbar.css'
import { Link } from 'react-router-dom';
import bdLogo from '../../Assets/bdLogo.png';

const TopPrizeNavbar = () => {

    useEffect(() => {
        var header = document.getElementById("myTopnav");
        var btns = header.getElementsByClassName("e_btns");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("activeBtn");
                current[0].className = current[0].className.replace(" activeBtn", "");
                this.className += " activeBtn";
            });
        }
    }, [])
    
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
                                <h4 className='m-0 fw-bold' style={{color: '#683091'}}>পুরস্কার / সনদপত্র</h4>
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
                <div class="topnav" id="myTopnav">
                    {/* <Link to="/employee-info/" className='e_btns activeBtn'>কর্মচারী / কর্মকর্তা তথ্য</Link>
                    <Link to="/employee-info/address" className='e_btns'>ঠিকানা</Link>
                    <Link to="/employee-info/education-degree" className='e_btns'>প্রাতিষ্ঠানিক শিক্ষা</Link>
                    <Link to="/employee-info/spouse" className='e_btns'>স্বামী / স্ত্রী</Link>
                    <Link to="/employee-info/child" className='e_btns'>সন্তান</Link>
                    <Link to="/employee-info/transfer" className='e_btns'>বদলি</Link>
                    <Link to="/employee-info/travell" className='e_btns'>ভ্রমণ</Link>
                    <Link to="/employee-info/language-efficiency" className='e_btns'>ভাষাগত দক্ষতা</Link>
                    <Link to="/employee-info/trainings" className='e_btns'>প্রশিক্ষণ</Link>
                    <Link to="/employee-info/services" className='e_btns'>সার্ভিস</Link>
                    <Link to="/employee-info/extra-curricular" className='e_btns'>এক্সট্রা-কারিকুলার</Link> */}

                    <Link to="/prize-info/" className='e_btns activeBtn'>A</Link>
                    <Link to="/prize-info/internal-prize" className='e_btns'>B</Link>
                    <Link to="/prize-info/international-prize" className='e_btns'>C</Link>
                    <Link to="/prize-info/sonodpotro-info" className='e_btns'>D</Link>
                </div>
            </div>
        </div>
    );
};

export default TopPrizeNavbar;