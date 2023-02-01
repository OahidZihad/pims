import React, { useEffect } from 'react';
import "./loginSignUp.css";
import govtLogo from '../../Assets/bdLogo.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        if (document.body.style.marginLeft = '140px') {
            document.body.style.marginLeft = '0px'
            document.body.style.transition = 'all 0.4s'
        }
    },[document.body.style.marginLeft])

    return (
        <div className='login_container'>
            <div className='clip_path'></div>
            <div className='container'>
                <div class="row gx-2 align-items-center justify-content-center login_content">
                    <div className="col-12 col-md-6 login_left">
                        <img className='w-25 mb-4' src={govtLogo} alt=""/>
                        <h3>শিল্প মন্ত্রণালয়</h3>
                        <h6>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h6>
                    </div>
                    <div className="col-12 col-md-6 login_right">
                        <div class="card">
                            <div class="card-body">
                                <h3 className='text-center mb-5'>লগইন করুন</h3>
                                <form>
                                    <div class="mb-4">
                                        <label for="exampleInputEmail1" class="form-label">কর্মকর্তা/ কর্মচারি নম্বর</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                    <div class="mb-5">
                                        <label for="exampleInputPassword1" class="form-label">পাসওয়ার্ড</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mb-2'>
                                        <p className='m-0' style={{cursor: 'pointer'}} onClick={()=> navigate('/signup')} >রেজিস্ট্রেশন করুন</p>
                                        <button type="submit" class="login_submit rounded border-0" onClick={()=> navigate('/')}>প্রবেশ করুন</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;