import React from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { TbFileUpload } from "react-icons/tb";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const EmployeeEducation = () => {
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
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>প্রাতিষ্ঠানিক শিক্ষা সংক্রান্ত তথ্য</h4>
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
                                            <option value="" style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="এস এস সি / সমমান">এস এস সি / সমমান</option>
                                            <option value="এইচ এস সি / সমমান">এইচ এস সি / সমমান</option>
                                            <option value="স্নাতক / পাশ কোর্স">স্নাতক / পাশ কোর্স</option>
                                            <option value="স্নাতকোত্তর">স্নাতকোত্তর</option>
                                        </select>
                                    </div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                    <div className='col-xs-auto col-md'></div>
                                </div>

                                <div className='row'>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">পরীক্ষার নাম</label>
                                        <select class="form-select" aria-label="Default select example" {...register(`education.${index}.exam_name`, { required: true })}>
                                            <option value=""  style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="এইচ এস সি">এইচ এস সি</option>
                                            <option value="আলিম">আলিম</option>
                                            <option value="ভোকেশনাল">ভোকেশনাল</option>
                                            <option value="বি এম">বি এম</option>
                                            <option value="ডিপ্লোমা ইন কমার্স">ডিপ্লোমা ইন কমার্স</option>
                                            <option value="ডিপ্লোমা ইন বিজনেস স্টাডিজ">ডিপ্লোমা ইন বিজনেস স্টাডিজ</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">বোর্ড <span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ঢাকা"
                                            {...register(`education.${index}.board`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">শিক্ষা প্রতিষ্ঠান </label>
                                        <input class="form-control" placeholder="লালমাটিয়া"
                                            {...register(`education.${index}.institute`, { required: true })}
                                        />
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">বিভাগ / বিষয় / অর্জিত ডিগ্রি</label>
                                        <select class="form-select" aria-label="Default select example" {...register(`education.${index}.division`, { required: true })}>
                                            <option value=""  style={{color: 'gray'}}>নির্বাচন করুন</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">গ্রেড / ডিভিশন</label>
                                        <input class="form-control" placeholder="বিজ্ঞান"
                                            {...register(`education.${index}.grade`, { required: true })}
                                        />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">অর্জিত ফলাফল (গ্রেড / ডিভিশন)</label>
                                        <input class="form-control" placeholder="১৯৮৫"
                                            {...register(`education.${index}.result`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">পাশের বছর <span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`education.${index}.passing_year`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mb-3">
                                        <label for="inputAddress" class="form-label">রোল নাম্বার <span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="১২৩০"
                                            {...register(`education.${index}.roll`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md">
                                        <label for="inputAddress" class="form-label">সেশন</label>
                                        <input class="form-control" placeholder="১২৩০"
                                            {...register(`education.${index}.session`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mt-2 btn_file text-center">
                                        <label for="inputAddress" class="form-label"></label>
                                        <div>
                                            <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file" id="formFile"
                                                {...register(`education.${index}.edu_file`, { required: true })}
                                            />
                                        </div>
                                    </div>
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

export default EmployeeEducation;