import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbFileUpload } from 'react-icons/tb';

const Punishment = () => {
    const { register, control, handleSubmit } = useForm({
    defaultValues: {
        education: [{ degree: "", exam_name: "", board: "", institute: "", division: "", grade: "", result: "", passing_year: "", roll: "", session: "", edu_file: ""  }]
    }
    });
    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "education"
    });

    const onSubmit = (data) => {
        console.log("education_data", data)
    };

    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>aabbcc</h4>
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
                                        <select class="form-select" aria-label="Default select example" {...register(`education.${index}.degree`, { required: true })}>
                                            <option value=""  style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="লঘু দণ্ড">লঘু দণ্ড</option>
                                            <option value="গুরুদন্ড">গুরুদন্ড</option>
                                            <option value="তিরস্কার">তিরস্কার</option>
                                            <option value="অপসারণ">অপসারণ</option>
                                        </select>
                                    </div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                </div>

                                <div className='row'>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">দন্ডের কারণ <span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder=""
                                            {...register(`education.${index}.board`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">দন্ডের বিবরণ </label>
                                        <input class="form-control" placeholder=""
                                            {...register(`education.${index}.institute`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md"></div>
                                    <div class="col-xs-auto col-md"></div>
                                    <div class="col-xs-auto col-md"></div>
                                </div>

                                <div className='row'>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">দন্ডের সময়কাল</label>
                                        <input class="form-control" placeholder=""
                                            {...register(`education.${index}.result`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">দন্ডের শুরুর তারিখ <span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`education.${index}.passing_year`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">দন্ডের শেষের তারিখ <span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`education.${index}.roll`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md">
                                        <label for="inputAddress" class="form-label">মন্তব্য</label>
                                        <input class="form-control" placeholder=""
                                            {...register(`education.${index}.session`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md"></div>
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

export default Punishment;