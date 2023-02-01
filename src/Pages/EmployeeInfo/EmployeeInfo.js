import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TbFileUpload } from "react-icons/tb";
import './employeePersonalInfo.css'

const EmployeeInfo = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    // const [loading, setLoading] = useState(false);
    // const [file, setFile] = useState(null);

    // const handleChange= (e) => {
    //     setFile(e.target.files[0])
    //     console.log(e.target.files[0]);
    //     if (!file) {
    //         setLoading(true)
    //     }
    // }

    // setInterval(() => {
    //     if(file){
    //         setLoading(false)
    //     }
    // }, 1000);

    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>কর্মকর্তা / কর্মচারীর তথ্য</h4>
                <p style={{color: '#5D5E82'}}>কর্মচারী/কর্মকর্তা নম্বরঃ 22004689</p>
            </div>

            <form className='pt-4' onSubmit={handleSubmit(onSubmit)} >
                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputEmail4" class="form-label">জাতীয় পরিচয়পত্র নম্বর <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder='১৯৬৬৬৭১৫৮৩০০০৪৭'
                            {...register("employee_nid", { required: true })}/>
                            {errors.employee_nid && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">নাম (বাংলায়)</label>
                        <input type="text" class="form-control" placeholder="সুরাইয়া আক্তার"
                            {...register("employee_name", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">নাম (ইংরেজিতে) <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="Suraiya Akter"
                            {...register("employee_name_eng", { required: true })}/>
                            {errors.employee_name_eng && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">জন্ম তারিখ</label>
                        <input type="date" class="form-control"
                            {...register("employee_dob", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">রক্তের গ্রুপ</label>
                        <input type="text" class="form-control" placeholder="B+"
                            {...register("employee_blood", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">শ্রেণি</label>
                        <select class="form-select" aria-label="Default select example"
                            {...register("employee_class", { required: true })}>
                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                            <option value="মুক্তিযোদ্ধা">মুক্তিযোদ্ধা</option>
                            <option value="মুক্তিযোদ্ধার সন্তান">মুক্তিযোদ্ধার সন্তান</option>
                            <option value="মুক্তিযোদ্ধার নাতি/নাতনি">মুক্তিযোদ্ধার নাতি/নাতনি</option>
                            <option value="কোটা নেই">কোটা নেই</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">মাতার নাম (বাংলায়)</label>
                        <input type="text" class="form-control" placeholder="ফারিয়া বেগম"
                            {...register("employee_mother_name", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">মাতার নাম (ইংরেজিতে) <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="Fariya Begum"
                            {...register("employee_mother_name_eng", { required: true })}/>
                            {errors.employee_mother_name_eng && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">পিতার নাম (বাংলায়) <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="আতিকুর রহমান"
                            {...register("employee_father_name", { required: true })}/>
                            {errors.employee_father_name && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">পিতার নাম (ইংরেজিতে)</label>
                        <input type="text" class="form-control" placeholder="Atikur Rahman"
                            {...register("employee_father_name_eng", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">লিঙ্গ</label>
                        <select class="form-select" aria-label="Default select example"
                            {...register("employee_gender", { required: true })}>
                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                            <option value="পুরুষ">পুরুষ</option>
                            <option value="মহিলা">মহিলা</option>
                            <option value="তৃতীয় লিঙ্গ">তৃতীয় লিঙ্গ</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">পাসপোর্ট নাম্বার (যদি থাকে)</label>
                        <input type="text" class="form-control" placeholder="1122789xxxxxxx"
                            {...register("employee_passport", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">বৈবাহিক অবস্থা</label>
                        <select class="form-select" aria-label="Default select example"
                            {...register("employee_married", { required: true })}>
                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                            <option value="বিবাহিত">বিবাহিত</option>
                            <option value="অবিবাহিত">অবিবাহিত</option>
                            <option value="অন্যান্য">অন্যান্য</option>
                        </select>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">কর্মস্থল</label>
                        <input type="text" class="form-control" placeholder="ঢাকা"
                            {...register("employee_office", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">কর্মস্থলের ঠিকানা</label>
                        <input type="text" class="form-control" placeholder="মোহাম্মদপুর, ঢাকা"
                            {...register("employee_office_address", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">পদবি</label>
                        <input type="text" class="form-control" placeholder="অতিরিক্ত সচিব"
                            {...register("employee_designation", { required: true })}/>
                    </div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">প্রথম যোগদানের তারিখ</label>
                        <input type="date" class="form-control"
                            {...register("employee_joining_date", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">পি আর এল তারিখ</label>
                        <input type="date" class="form-control"
                            {...register("employee_prl_date", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">ব্যাচ নম্বর</label>
                        <input type="text" class="form-control" placeholder="২১"
                            {...register("employee_batch", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">ক্যাডার</label>
                        <select class="form-select" aria-label="Default select example"
                            {...register("employee_cadre", { required: true })}>
                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                            <option value="ক্যাডার">ক্যাডার</option>
                            <option value="নন-ক্যাডার">নন-ক্যাডার</option>
                            <option value="অন্যান্য">অন্যান্য</option>
                        </select>
                    </div>
                    <div class="col-xs-auto col-md"></div>
                </div>

                <div className='row'>
                    {/* <div className="col-xs-auto col-md mb-3 btn_file text-center">
                        <div>
                            {
                                loading ? 
                                <div class="spinner-border text-light" role="status">
                                    <span class="visually-hidden"></span>
                                </div>
                                    : 
                                <>
                                <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file" id="formFile"
                                    {...register("employee_file", { required: true })} />
                                </>
                            }
                        </div>
                    </div> */}
                    
                    {/* { loading ?
                        <div className="col-xs-auto col-md mb-3 btn_file_loading text-center">
                            <div class="spinner-border spinner-border-sm text-light" role="status">
                                <span class="visually-hidden"></span>
                            </div>
                        </div>
                        :
                        <div className="col-xs-auto col-md mb-3 btn_file text-center">
                            <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file" id="formFile"
                                {...register("employee_file", { onChange: (e) => {handleChange(e)}, required: true})} />
                                <br/>
                                {errors.employee_file && <span className='text-dark'>This field is required</span>}
                        </div>
                    } */}

                    <div className='col-xs-auto col-md mb-3 btn_file text-center'>
                        <div>
                            <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file" id="formFile"
                                {...register("employee_file", { required: true})} />
                                <br/>
                                {errors.employee_file && <span className='text-warning'>This field is required</span>}
                        </div>
                    </div>

                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
                    <button class="px-5 btn btn-outline-danger me-md-2">বাতিল করুন</button>
                    <button class="px-5 btn btn-success" type="submit">প্রিভিউ করুন</button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeInfo;