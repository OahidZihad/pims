import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbFileUpload } from "react-icons/tb";

const EmployeeTransfer = () => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            transfer: [{ tf_inside_country_info: "", tf_country: "", tf_institute: "", tf_posting_address: "", tf_doptor_address: "", tf_designation: "", tf_notice_num: "", tf_notice_date: "", tf_reason: "", tf_posting_type: "", tf_type: "", tf_joining_date: "", tf_salary_scale: "", tf_comment: "",  tf_file: ""  }]
        }
    });

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "transfer"
    });

    const onSubmit = (data) => {
        console.log("ch_data", data)
    };
    
    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>বদলি সংক্রান্ত তথ্য</h4>
                <p style={{color: '#5D5E82'}}>কর্মচারী/কর্মকর্তা নম্বরঃ 22004689</p>
            </div>

            <form className='pt-4' onSubmit={handleSubmit(onSubmit)}>
                {fields.map((item, index) => {
                    return (
                        <div className='card shadow border-0 mt-2' key={item.id}>
                            <div className='card-body'>
                                <div className='py-1 d-flex justify-content-end'>
                                    {fields.length === 1 ? 
                                        <button className='btn btn-sm btn-success' type="button" onClick={() => append(index)}>
                                            <AiOutlinePlus />
                                        </button>
                                        :
                                        <div className='d-flex'>
                                            <button className='btn btn-sm btn-danger me-1' type="button" onClick={() => remove(index)}>
                                                <AiOutlineMinus />
                                            </button>
                                            <button className='btn btn-sm btn-success' type="button" onClick={() => {append()}}>
                                                <AiOutlinePlus />
                                            </button>
                                        </div>
                                    }
                                </div>

                                <div className='row'>
                                    <div class="col-xs-auto col-md mb-3">
                                        <select class="form-select" aria-label="Default select example" {...register(`transfer.${index}.tf_inside_country_info`, { required: true })}>
                                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="দেশের অভ্যন্তরে বদলি">দেশের অভ্যন্তরে বদলি</option>
                                            <option value="বিদেশে বদলি">বিদেশে বদলি</option>
                                        </select>
                                    </div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                </div>

                                <div className='row'>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">দেশের নাম</label>
                                        <select class="form-select" aria-label="Default select example" {...register(`transfer.${index}.tf_country`)}>
                                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="বাংলাদেশ">বাংলাদেশ</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">প্রতিষ্ঠান</label>
                                        <input class="form-control" placeholder="প্রাথমিক ও গণশিক্ষা অধিদপ্তর"
                                            {...register(`transfer.${index}.tf_institute`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">পদায়নের স্থান</label>
                                        <input class="form-control" placeholder="রাজশাহী"
                                            {...register(`transfer.${index}.tf_posting_address`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">দপ্তরের ঠিকানা</label>
                                        <input class="form-control" placeholder=""
                                            {...register(`transfer.${index}.tf_doptor_address`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">পদবি</label>
                                        <input class="form-control" placeholder=""
                                            {...register(`transfer.${index}.tf_designation`, { required: true })}
                                        />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">বদলি আদেশের নম্বর</label>
                                        <input class="form-control" placeholder="২৩২"
                                            {...register(`transfer.${index}.tf_notice_num`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">বদলি আদেশের তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`transfer.${index}.tf_notice_date`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">বদলির কারণ<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="অস্থায়ী"
                                            {...register(`transfer.${index}.tf_reason`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">পদায়নের ধরণ</label>
                                        <input class="form-control" placeholder=""
                                            {...register(`transfer.${index}.tf_posting_type`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="" className='form-label'>বদলির ধরণ</label>
                                        <input class="form-control" placeholder=""
                                            {...register(`transfer.${index}.tf_type`, { required: true })}
                                        />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">যোগদানের তারিখ</label>
                                        <input class="form-control" type="date"
                                            {...register(`transfer.${index}.tf_joining_date`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">বেতন স্কেল</label>
                                        <input class="form-control" placeholder="১২৩০"
                                            {...register(`transfer.${index}.tf_salary_scale`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md">
                                        <label for="inputAddress" class="form-label">মন্তব্য</label>
                                        <input class="form-control" placeholder="১২৩০"
                                            {...register(`transfer.${index}.tf_comment`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mt-2 btn_file text-center">
                                        <label className="form-label"></label>
                                        <div>
                                            <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file" id="formFile"
                                                {...register(`transfer.${index}.tf_file`, { required: true })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-auto col-md mt-2 btn_file text-center"></div>
                                </div>
                            </div>
                        </div>);
                })}
                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mt-md-5">
                    <button class="px-5 btn btn-outline-danger me-md-2" type="button">বাতিল করুন</button>
                    <button class="px-5 btn btn-success" type="submit">প্রিভিউ করুন</button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeTransfer;