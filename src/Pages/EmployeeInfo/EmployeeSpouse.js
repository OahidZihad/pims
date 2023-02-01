import React from 'react';
import { useForm } from 'react-hook-form';
import { TbFileUpload } from "react-icons/tb";

const EmployeeSpouse = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>স্বামী / স্ত্রীর তথ্য</h4>
                <p style={{color: '#5D5E82'}}>কর্মচারী/কর্মকর্তা নম্বরঃ 22004689</p>
            </div>

            <h4 className='mt-5' style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>ব্যক্তিগত তথ্য</h4>

            <form className='pt-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">জাতীয় পরিচয়পত্র নম্বর <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder='১৯৬৬৬৭১৫৮৩০০০৪৭'
                            {...register("nid_num", { required: true })} />
                    </div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">নাম (বাংলায়)</label>
                        <input type="text" class="form-control" placeholder="সুরাইয়া আক্তার"
                            {...register("name_bng", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">নাম (ইংরেজিতে) <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="Suraiya Akter"
                            {...register("name_eng", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">রক্তের গ্রুপ</label>
                        <input type="text" class="form-control" placeholder="B+"
                            {...register("blood_group", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">পেশা (যদি থাকে)</label>
                        <input type="text" class="form-control" placeholder="চাকুরিজীবি"
                            {...register("occupation", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3"></div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">মাতার নাম (বাংলায়)</label>
                        <input type="text" class="form-control" placeholder="ফারিয়া বেগম"
                            {...register("mother_name_bng", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">মাতার নাম (ইংরেজিতে) <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="Fariya Begum"
                            {...register("mother_name-eng", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">পিতার নাম (বাংলায়) <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="আতিকুর রহমান"
                            {...register("father_name_bng", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">পিতার নাম (ইংরেজিতে)</label>
                        <input type="text" class="form-control" placeholder="Atikur Rahman"
                            {...register("father_name_eng", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">পাসপোর্ট নাম্বার (যদি থাকে)</label>
                        <input type="text" class="form-control" placeholder="1122789xxxxxxx"
                            {...register("passport_num", { required: true })} />
                    </div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">মোবাইল নম্বর (যদি থাকে)</label>
                        <input type="tel" class="form-control" placeholder="01752xxxxxx"
                            {...register("mobile_num", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3"></div>
                    <div class="col-xs-auto col-md mb-3"></div>
                    <div class="col-xs-auto col-md mb-3"></div>
                    <div class="col-xs-auto col-md mb-3"></div>
                </div>

                <h4 className='mt-0 mt-md-5' style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>ঠিকানা</h4>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">বাসা নম্বর (যদি থাকে)</label>
                        <input type="text" class="form-control" placeholder="১৪২"
                            {...register("house_num", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">রাস্তা নম্বর (যদি থাকে) <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="০৫"
                            {...register("road_num", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">গ্রাম</label>
                        <input type="text" class="form-control" placeholder="ঢাকা"
                            {...register("village", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">পৌরসভা</label>
                        <input type="text" class="form-control" placeholder="লালমাটিয়া"
                            {...register("city_corporation", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">ডাকঘর</label>
                        <input type="text" class="form-control" placeholder="লালমাটিয়া"
                            {...register("post_office", { required: true })} />
                    </div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">উপজেলা <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="ঢাকা"
                            {...register("sub_district", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">জেলা <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="১২৩০"
                            {...register("district", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md">
                        <label class="form-label">বিভাগ</label>
                        <input type="text" class="form-control" placeholder="ঢাকা"
                            {...register("division", { required: true })} />
                    </div>
                    <div class="col-xs-auto col-md"></div>
                    <div class="col-xs-auto col-md"></div>
                </div>

                <div className='row'>
                    <div className="col-xs-auto col-md mb-3 btn_file text-center">
                        <label className="form-label"></label>
                        <div>
                            <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file"
                                {...register("spouse_file", { required: true })} />
                        </div>
                    </div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="px-5 btn btn-outline-danger me-md-2" type="button">বাতিল করুন</button>
                    <button class="px-5 btn btn-success" type="submit">প্রিভিউ করুন</button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeSpouse;