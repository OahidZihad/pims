import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbFileUpload } from "react-icons/tb";

const EmployeeTravell = () => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            travell: [{ tr_info: "", tr_country: "", tr_notice_num: "", tr_address: "", tr_reason: "", tr_start_date: "", tr_end_date: "", tr_comment: "", tr_file: ""  }]
        }
    });

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "travell"
    });

    const onSubmit = (data) => {
        console.log("tr_data", data)
    };

    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>ভ্রমণ সংক্রান্ত তথ্য</h4>
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
                                        <select class="form-select" aria-label="Default select example" {...register(`travell.${index}.tr_info`, { required: true })}>
                                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="দেশের অভ্যন্তরে ভ্রমণ">দেশের অভ্যন্তরে ভ্রমণ</option>
                                            <option value="বিদেশে ভ্রমণ">বিদেশে ভ্রমণ</option>
                                        </select>
                                    </div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                </div>

                                <div className='row'>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">দেশের নাম <span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="বাংলাদেশ"
                                            {...register(`travell.${index}.tr_country`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">ভ্রমণাদেশ অনুমতির নম্বর</label>
                                        <input class="form-control" placeholder="৪৫৪৫৭৭৮৯"
                                            {...register(`travell.${index}.tr_notice_num`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">ভ্রমণের স্থান</label>
                                        <input class="form-control" placeholder=""
                                            {...register(`travell.${index}.tr_address`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">ভ্রমণের কারণ</label>
                                        <input class="form-control" placeholder=""
                                            {...register(`travell.${index}.tr_reason`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">ভ্রমণ শুরুর তারিখ</label>
                                        <input class="form-control" type="date"
                                            {...register(`travell.${index}.tr_start_date`, { required: true })}
                                        />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">ভ্রমণ শেষের তারিখ</label>
                                        <input class="form-control" type="date"
                                            {...register(`travell.${index}.tr_end_date`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md">
                                        <label for="inputAddress" class="form-label">মন্তব্য <span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="Sahadat Khan Tutul"
                                            {...register(`travell.${index}.tr_comment`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mt-2 btn_file text-center">
                                        <label className="form-label"></label>
                                        <div>
                                            <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file" id="formFile"
                                                {...register(`travell.${index}.tr_file`, { required: true })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-auto col-md"></div>
                                    <div className="col-xs-auto col-md"></div>
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

export default EmployeeTravell;