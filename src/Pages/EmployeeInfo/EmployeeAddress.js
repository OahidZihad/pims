import React from 'react';
import { useForm } from 'react-hook-form';

const EmployeeAddress = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>কর্মকর্তা / কর্মচারীর ঠিকানা</h4>
                <p style={{color: '#5D5E82'}}>কর্মচারী/কর্মকর্তা নম্বরঃ 22004689</p>
            </div>

            <form className='pt-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <select class="form-select" aria-label="Default select example"
                            {...register("address_type", { required: true })} >
                            <option value="বর্তমান ঠিকানা">বর্তমান ঠিকানা</option>
                            <option value="স্থায়ি ঠিকানা">স্থায়ি ঠিকানা</option>
                        </select>
                    </div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                    <div className='col-xs-auto col-md'></div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">বাসা নম্বর (যদি থাকে)</label>
                        <input type="text" class="form-control" placeholder="১৪২"
                            {...register("house_num", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">রাস্তা নম্বর (যদি থাকে) <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="০৫"
                            {...register("road_num", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">ওয়ার্ড</label>
                        <input type="text" class="form-control" placeholder="লালমাটিয়া"
                            {...register("ward_num", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">গ্রাম</label>
                        <input type="text" class="form-control" placeholder="ঢাকা"
                            {...register("village", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">পৌরসভা</label>
                        <input type="text" class="form-control" placeholder="লালমাটিয়া"
                            {...register("city_corporation", { required: true })}/>
                    </div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">ডাকঘর</label>
                        <input type="text" class="form-control" placeholder="লালমাটিয়া"
                            {...register("post_office", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">উপজেলা <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="ঢাকা"
                            {...register("sub_district", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">জেলা <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="১২৩০"
                            {...register("district", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">পোস্টাল কোড</label>
                        <input type="text" class="form-control" placeholder="১২৩০"
                            {...register("postal_code", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">বিভাগ</label>
                        <input type="text" class="form-control" placeholder="ঢাকা"
                            {...register("division", { required: true })}/>
                    </div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">মোবাইল নম্বর (যদি থাকে)</label>
                        <input type="tel" class="form-control" placeholder="০১৭৪৫৬৭৮৯১২৩"
                            {...register("mobile_num", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label class="form-label">ইমেইল এড্রেস (যদি থাকে)</label>
                        <input type="email" class="form-control" placeholder="example@domain.net"
                            {...register("email", { required: true })}/>
                    </div>
                    <div class="col-xs-auto col-md"></div>
                    <div class="col-xs-auto col-md"></div>
                    <div class="col-xs-auto col-md"></div>
                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mt-md-4">
                    <button class="px-5 btn btn-outline-danger me-md-2" type="button">বাতিল করুন</button>
                    <button class="px-5 btn btn-success" type="submit">প্রিভিউ করুন</button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeAddress;