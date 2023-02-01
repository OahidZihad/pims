import React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbFileUpload } from "react-icons/tb";

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        options={<option></option>}
      </select>
    </>
  ));

const PrizeInfoDetails = () => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            prizeDetails: [{ prize_daptorik: "", prize_country: "", prize_institute: "", prize_address: "", prize_date: "", prize_subject: "", prize_file: "" }]
        }
    });

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "prizeDetails"
    });

    const onSubmit = (data) => {
        console.log("lng_data", data)
    };

    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>পুরস্কার সম্পর্কিত তথ্য</h4>
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
                                        <select class="form-select" aria-label="Default select example" {...register(`prizeDetails.${index}.prize_daptorik`, { required: true })}>
                                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="দাপ্তরিক পুরস্কার">দাপ্তরিক পুরস্কার</option>
                                            <option value="আন্তঃদাপ্তরিক পুরস্কার">আন্তঃদাপ্তরিক পুরস্কার</option>
                                            <option value="আন্তর্জাতিক পুরস্কার">আন্তর্জাতিক পুরস্কার</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-auto col-md"></div>
                                    <div class="col-xs-auto col-md"></div>
                                    <div class="col-xs-auto col-md"></div>
                                    <div class="col-xs-auto col-md"></div>
                                </div>

                                <div className='row'>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">দেশের নাম<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`prizeDetails.${index}.prize_country`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">দাতা প্রতিষ্ঠানের নাম<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`prizeDetails.${index}.prize_institute`, { required: true })}
                                        />
                                    </div>    
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">পুরস্কার প্রদানের স্থান<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`prizeDetails.${index}.prize_address`, { required: true })}
                                        />
                                    </div>    
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">পুরস্কার প্রদানের তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`prizeDetails.${index}.prize_date`, { required: true })}
                                        />
                                    </div>    
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">পুরস্কার প্রাপ্তির বিষয়<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`prizeDetails.${index}.prize_subject`, { required: true })}
                                        />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-xs-auto col-md mb-2 mt-2 btn_file text-center">
                                        <div>
                                            <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file" id="formFile"
                                                {...register(`prizeDetails.${index}.prize_file`, { required: true })}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-xs-auto col-md'></div>
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

export default PrizeInfoDetails;