import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbFileUpload } from "react-icons/tb";

const EmployeeTraining = () => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            training: [{ trn_local: "", trn_country: "", trn_course: "", trn_institute: "", trn_start_date: "", trn_end_date: "", trn_result: "", trn_comment: "", trn_file: "" }]
        }
    });

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "training"
    });

    const onSubmit = (data) => {
        console.log("lng_data", data)
    };

    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>প্রশিক্ষণ সংক্রান্ত তথ্য</h4>
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
                                        <select class="form-select" aria-label="Default select example" {...register(`training.${index}.trn_local`, { required: true })}>
                                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="স্থানীয় প্রশিক্ষণ">স্থানীয় প্রশিক্ষণ</option>
                                            <option value="বিদেশে প্রশিক্ষণ">বিদেশে প্রশিক্ষণ</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-auto col-md"></div>
                                    <div class="col-xs-auto col-md"></div>
                                    <div class="col-xs-auto col-md"></div>
                                    <div class="col-xs-auto col-md"></div>
                                </div>

                                <div className='row'>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">দেশের নাম<span className='text-danger'>*</span></label>
                                        <select class="form-select" aria-label="Default select example" {...register(`training.${index}.trn_country`, { required: true })}>
                                            <option value="" style={{color: 'gray'}}>বাংলাদেশ</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">কোর্সের নাম<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder=""
                                            {...register(`training.${index}.trn_course`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">প্রশিক্ষণদাতা প্রতিষ্ঠানের নাম<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder=""
                                            {...register(`training.${index}.trn_institute`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">প্রশিক্ষণ শুরুর তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`training.${index}.trn_start_date`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">প্রশিক্ষণ শেষের তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`training.${index}.trn_end_date`, { required: true })}
                                        />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">অর্জিত ফলাফল<span className='text-danger'>*</span></label>
                                        <select class="form-select" aria-label="Default select example" {...register(`training.${index}.trn_result`, { required: true })}>
                                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className='col-xs-auto col-md'>
                                        <label for="inputAddress" class="form-label">মন্তব্য<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder=""
                                            {...register(`training.${index}.trn_comment`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mt-2 btn_file text-center">
                                        <label className="form-label"></label>
                                        <div>
                                            <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file" id="formFile"
                                                {...register(`training.${index}.trn_file`, { required: true })}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
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

export default EmployeeTraining;