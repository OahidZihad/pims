import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbFileUpload } from "react-icons/tb";

const PrizeSonodpotro = () => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            prizeSonod: [{ sonod_institute: "", sonod_doptor: "", sonod_address: "", sonod_reason: "", sonod_giving_date: "", sonod_receiving_date: "", sonod_expiry: "", sonod_comment: "" }]
        }
    });

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "prizeSonod"
    });

    const onSubmit = (data) => {
        console.log("lng_data", data)
    };

    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>সনদপত্র সম্পর্কিত তথ্য</h4>
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
                                        <label for="inputAddress" class="form-label">দাতা প্রতিষ্ঠানের নাম<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`prizeSonod.${index}.sonod_institute`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">প্রদানের দপ্তর<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`prizeSonod.${index}.sonod_doptor`, { required: true })}
                                        />
                                    </div>    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">প্রদানের স্থান<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`prizeSonod.${index}.sonod_address`, { required: true })}
                                        />
                                    </div>    
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">প্রদানের কারণ<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`prizeSonod.${index}.sonod_reason`, { required: true })}
                                        />
                                    </div>    
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">প্রদানের তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`prizeSonod.${index}.sonod_giving_date`, { required: true })}
                                        />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">গ্রহণের তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`prizeSonod.${index}.sonod_receiving_date`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">সনদের মেয়াদকাল (যদি থাকে)<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`prizeSonod.${index}.sonod_expiry`, { required: true })}
                                        />
                                    </div>    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">মন্তব্য<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`prizeSonod.${index}.sonod_comment`, { required: true })}
                                        />
                                    </div>    
                                    <div className='col-xs-auto col-md'></div>    
                                    <div className='col-xs-auto col-md'></div>
                                </div>
                            </div>
                        </div>);
                })}
                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                    <button class="px-5 btn btn-outline-danger me-md-2" type="button">বাতিল করুন</button>
                    <button class="px-5 btn btn-success" type="submit">প্রিভিউ করুন</button>
                </div>
            </form>
        </div>
    );
};

export default PrizeSonodpotro;