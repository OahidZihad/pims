import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbFileUpload } from "react-icons/tb";

const EmployeeChild = () => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            child: [{ ch_info: "", ch_nid: "", ch_jommo_nibondhon: "", ch_name_bng: "", ch_name_eng: "", ch_dob: "", ch_blood: "", ch_gender: "", ch_address: "", ch_special: "", ch_file: ""  }]
        }
    });

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "child"
    });

    const onSubmit = (data) => {
        console.log("ch_data", data)
    };

    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>সন্তানদের তথ্য</h4>
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
                                        <select class="form-select" aria-label="Default select example" {...register(`child.${index}.ch_info`, { required: true })}>
                                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="প্রথম সন্তানের তথ্য">প্রথম সন্তানের তথ্য</option>
                                            <option value="দ্বিতীয় সন্তানের তথ্য">দ্বিতীয় সন্তানের তথ্য</option>
                                            <option value="তৃতীয় সন্তানের তথ্য">তৃতীয় সন্তানের তথ্য</option>
                                            <option value="চতুর্থ সন্তানের তথ্য">চতুর্থ সন্তানের তথ্য</option>
                                        </select>
                                    </div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                </div>

                                <div className='row'>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">জাতীয় পরিচয়পত্র নম্বর <span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="১৬৭৮৮৯৫০৯৯৯৯৪"
                                            {...register(`child.${index}.ch_nid`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">জন্ম নিবন্ধন নম্বর </label>
                                        <input class="form-control" placeholder="১৬৭৮৮৯৫০৯৯৯৯৪"
                                            {...register(`child.${index}.ch_jommo_nibondhon`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3"></div>
                                    <div class="col-xs-auto col-md mb-3"></div>
                                    <div class="col-xs-auto col-md mb-3"></div>
                                </div>

                                <div className='row'>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">নাম (বাংলায়)</label>
                                        <input class="form-control" placeholder="সাহাদাত খান টুটুল"
                                            {...register(`child.${index}.ch_name_bng`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">নাম (ইংরেজিতে) <span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="Sahadat Khan Tutul"
                                            {...register(`child.${index}.ch_name_eng`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">জন্ম তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`child.${index}.ch_dob`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">রক্তের গ্রুপ</label>
                                        <input class="form-control" placeholder="বি পজেটিভ"
                                            {...register(`child.${index}.ch_blood`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="" className='form-label'>লিঙ্গ</label>
                                        <select class="form-select" aria-label="Default select example" {...register(`child.${index}.ch_gender`, { required: true })}>
                                            <option value=""  style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="পুরুষ">পুরুষ</option>
                                            <option value="মহিলা">মহিলা</option>
                                            <option value="তৃতীয় লিঙ্গ">তৃতীয় লিঙ্গ</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">স্থায়ী ঠিকানা</label>
                                        <input class="form-control" placeholder="লালমাটিয়া"
                                            {...register(`child.${index}.ch_address`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="" className='form-label'>প্রতিবন্ধী কিনা</label>
                                        <select class="form-select" aria-label="Default select example" {...register(`child.${index}.ch_special`, { required: true })}>
                                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="প্রতিবন্ধী নয়">প্রতিবন্ধী নয়</option>
                                            <option value="প্রতিবন্ধী">প্রতিবন্ধী</option>
                                        </select>
                                    </div>
                                    <div className="col-xs-auto col-md mt-2 btn_file text-center">
                                        <label className="form-label"></label>
                                        <div>
                                            <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file" id="formFile"
                                                {...register(`child.${index}.ch_file`, { required: true })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-auto col-md mt-2 btn_file text-center"></div>
                                    <div className="col-xs-auto col-md mt-2 btn_file text-center"></div>
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

export default EmployeeChild;