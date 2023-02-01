import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbFileUpload } from "react-icons/tb";

const EmployeeExtraCurricular = () => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            xc_activities: [{ xc_type: "", xc_start_date: "", xc_end_date: "", xc_address: "", xc_description: "", xc_institute: "", xc_file: "" }],
            xc_research: [{ xc_research_name: "", xc_research_publish_date: "", xc_research_institute: "", xc_research_comment:"", xc_research_file: "" }]
        }
    });

    const {
        fields: XCActivitiesList,
        append: appendXCActivitiesList,
        remove: removeXCActivitiesList,
    } = useFieldArray({
        control,
        name:'xc_activities'
    });

    const {
        fields: XCResearshList,
        append: appendXCResearchList,
        remove: removeXCResearchList,
    } = useFieldArray({
        control,
        name:'xc_research'
    });

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>এক্সট্রা-কারিকুলার সংক্রান্ত তথ্য</h4>
                <p style={{color: '#5D5E82'}}>কর্মচারী/কর্মকর্তা নম্বরঃ 22004689</p>
            </div>

            <form className='pt-4' onSubmit={handleSubmit(onSubmit)}>
                {XCActivitiesList.map((item, index) => {
                    return (
                        <div className='card shadow border-0 mt-2' key={item.id}>
                            <div className='card-body'>
                                <div className='py-1 d-flex justify-content-end'>
                                    {XCActivitiesList.length === 1 ? 
                                        <button className='btn btn-sm btn-success' type="button" onClick={() => appendXCActivitiesList(index)}>
                                            <AiOutlinePlus />
                                        </button>
                                        :
                                        <div className='d-flex'>
                                            <button className='btn btn-sm btn-danger me-1' type="button" onClick={() => removeXCActivitiesList(index)}>
                                                <AiOutlineMinus />
                                            </button>
                                            <button className='btn btn-sm btn-success' type="button" onClick={() => appendXCActivitiesList()}>
                                                <AiOutlinePlus />
                                            </button>
                                        </div>
                                    }
                                </div>
                                <div className='row'>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">কাজের ধরণ<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder=""
                                            {...register(`xc_activities.${index}.xc_type`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">কাজ শুরুর তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`xc_activities.${index}.xc_start_date`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">কাজ শেষের তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`xc_activities.${index}.xc_end_date`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">কাজের স্থান<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder=""
                                            {...register(`xc_activities.${index}.xc_address`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">কাজের বর্ণনা<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder=""
                                            {...register(`xc_activities.${index}.xc_description`, { required: true })}
                                        />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">সহযোগী ব্যক্তি বা প্রতিষ্ঠান<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder=""
                                            {...register(`xc_activities.${index}.xc_institute`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md mt-md-2 mt-0 btn_file text-center">
                                        <label className="form-label"></label>
                                        <div>
                                            <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file" id="formFile"
                                                {...register(`xc_activities.${index}.xc_file`, { required: true })}
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

                <h4 className='mt-5 mb-4' style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>প্রকাশনা ও গবেষণা বিষয়ক তথ্য</h4>

                {XCResearshList.map((item, index) => {
                    return (
                        <div className='card shadow border-0 mt-2' key={item.id}>
                            <div className='card-body'>
                                <div className='py-1 d-flex justify-content-end'>
                                    {XCResearshList.length === 1 ? 
                                        <button className='btn btn-sm btn-success' type="button" onClick={() => appendXCResearchList(index)}>
                                            <AiOutlinePlus />
                                        </button>
                                        :
                                        <div className='d-flex'>
                                            <button className='btn btn-sm btn-danger me-1' type="button" onClick={() => removeXCResearchList(index)}>
                                                <AiOutlineMinus />
                                            </button>
                                            <button className='btn btn-sm btn-success' type="button" onClick={() => appendXCResearchList()}>
                                                <AiOutlinePlus />
                                            </button>
                                        </div>
                                    }
                                </div>
                                <div className='row'>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">প্রকাশিত বিষয়ের নাম<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`xc_research.${index}.xc_research_name`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">প্রকাশের তারিখ<span className='text-danger'>*</span></label>
                                        <input class="form-control" type="date"
                                            {...register(`xc_research.${index}.xc_research_publish_date`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md mb-3'>
                                        <label for="inputAddress" class="form-label">প্রকাশক প্রতিষ্ঠানের নাম<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`xc_research.${index}.xc_research_institute`, { required: true })}
                                        />
                                    </div>
                                    <div className='col-xs-auto col-md'>
                                        <label for="inputAddress" class="form-label">মন্তব্য<span className='text-danger'>*</span></label>
                                        <input class="form-control" placeholder="ইংরেজি"
                                            {...register(`xc_research.${index}.xc_research_comment`, { required: true })}
                                        />
                                    </div>
                                    <div className="col-xs-auto col-md btn_file mt-md-2 mt-0 text-center">
                                        <label className="form-label"></label>
                                        <div>
                                            <TbFileUpload /> প্রমাণক সংযুক্ত করুন<input class="form-control" type="file" id="formFile"
                                                {...register(`xc_research.${index}.xc_research_file`, { required: true })}
                                            />
                                        </div>
                                    </div>
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

export default EmployeeExtraCurricular;