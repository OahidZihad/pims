import React from 'react';
import "./loginSignUp.css";
import govtLogo from '../../Assets/bdLogo.png'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
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
                                <h3 className='text-center mb-3 mb-lg-5'>নিবন্ধন করুন</h3>
                                <form>
                                    <div className='row'>
                                        <div className="col-xs-auto col-md mb-3">
                                            <label for="employee" class="form-label">কর্মকর্তা/ কর্মচারি নম্বর</label>
                                            <input type="text" class="form-control" id="employee"/>
                                        </div>
                                        
                                        <div className="col-xs-auto col-md mb-3">
                                            <label for="department" class="form-label">কর্মবিভাগ</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option value="">নির্বাচন করুন</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div class="col-xs-auto col-md mb-3">
                                            <label for="exampleInputEmail1" class="form-label">ইমেইল</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                        <div class="col-xs-auto col-md mb-3">
                                            <label for="phone" class="form-label">ফোন নম্বর</label>
                                            <input type="tel" class="form-control" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                                        </div>
                                    </div>
                                    <div class="mb-3 mb-lg-5">
                                        <label for="exampleInputPassword1" class="form-label">পাসওয়ার্ড</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='m-0' style={{cursor: 'pointer'}} onClick={()=> navigate('/login')} >অলরেডি রেজিস্টার?</p>
                                        <button type="submit" class="login_submit rounded border-0">নিবন্ধন</button>
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

export default SignUp;