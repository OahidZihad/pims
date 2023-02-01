import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbFileUpload } from "react-icons/tb";

const LeaveManagement = () => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            leave: [{ lv_cause: "", lv_start_date: "", lv_end_date: "", lv_notice_num: "", lv_notice_date: "", lv_comment: "", lv_file: "" }]
        }
    });

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "leave"
    });

    const onSubmit = (data) => {
        console.log("lv_data", data)
    };

    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>ছুটি সম্পর্কিত তথ্য যোগ করুন</h4>
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
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">ছুটির কারণ<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="অসুস্থতাজনিত  ছুটি"
                                            {...register(`leave.${index}.lv_cause`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">ছুটি শুরুর তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`leave.${index}.lv_start_date`, { required: true })}
                                        />
                                    </div>    
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">ছুটি শেষের তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`leave.${index}.lv_end_date`, { required: true })}
                                        />
                                    </div>    
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">ছুটির আদেশ নং<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="২৩৩৩৮৯০"
                                            {...register(`leave.${index}.lv_notice_num`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">ছুটির আদেশের তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`leave.${index}.lv_notice_date`, { required: true })}
                                        />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-xs-auto col-md'>
                                        <label for="inputAddress" class="form-label">মন্তব্য<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder=""
                                            {...register(`leave.${index}.lv_comment`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mb-2 mt-2 btn_file text-center">
                                        <label class="form-label"></label>
                                        <div>
                                            <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file" id="formFile"
                                                {...register(`leave.${index}.lv_file`, { required: true })}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mt-md-5">
                    <button class="px-5 btn btn-outline-danger me-md-2" type="button">বাতিল করুন</button>
                    <button class="px-5 btn btn-success" type="submit">প্রিভিউ করুন</button>
                </div>
            </form>
        </div>
    );
};

export default LeaveManagement;