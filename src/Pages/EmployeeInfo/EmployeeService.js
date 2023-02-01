import React from 'react';
import { TbFileUpload } from "react-icons/tb";

const EmployeeService = () => {
    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>সেবাদান সংক্রান্ত তথ্য</h4>
                <p style={{color: '#5D5E82'}}>কর্মচারী/কর্মকর্তা নম্বরঃ 22004689</p>
            </div>

            <form className='pt-4'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '20px'}}>দাপ্তরিক সেবাদান</h4>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">সরকারি সেবাদানের আদেশ নম্বর</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">সরকারি সেবাদানের আদেশের তারিখ<span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">সরকারি সেবাদান শুরুর তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">সরকারি সেবাদান শেষের তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">গ্যাজেটভুক্তির আদেশ নম্বর</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">গ্যাজেটভুক্তির তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="ফারিয়া বেগম"/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">জেষ্ঠ্যতা<span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Fariya Begum"/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">ক্যাডার <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="আতিকুর রহমান"/>
                    </div>
                    <div class="col-xs-auto col-md"></div>
                    <div class="col-xs-auto col-md"></div>
                </div>

                <hr class="border border-1 opacity-75 my-5" style={{backgroundColor: 'red', border: '1px solid red'}}/>

                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '20px'}}>আন্তদাপ্তরিক সেবাদান</h4>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">দপ্তরের নাম</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">সরকারি সেবাদানের আদেশ নম্বর</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">সরকারি সেবাদানের আদেশের তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="অতিরিক্ত সচিব"/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">সরকারি সেবাদান শুরুর তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="ঢাকা"/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">সরকারি সেবাদান শেষের তারিখ *</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="মোহাম্মদপুর, ঢাকা"/>
                    </div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">গ্যাজেটভুক্তির আদেশ নম্বর</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">গ্যাজেটভুক্তির তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">জেষ্ঠ্যতা</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">গ্যাজেটভুক্তির তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">ভ্রমণের জন্য প্রদত্ত ভাতার পরিমাণ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                </div>

                <hr class="border border-1 opacity-75 my-5" style={{backgroundColor: 'red', border: '1px solid red'}}/>

                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '20px'}}>আন্তদাপ্তরিক সেবাদান</h4>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">দপ্তরের নাম</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">সরকারি সেবাদানের আদেশ নম্বর</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">সরকারি সেবাদানের আদেশের তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="অতিরিক্ত সচিব"/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">সরকারি সেবাদান শুরুর তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="ঢাকা"/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">সরকারি সেবাদান শেষের তারিখ *</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="মোহাম্মদপুর, ঢাকা"/>
                    </div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">গ্যাজেটভুক্তির আদেশ নম্বর</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">গ্যাজেটভুক্তির তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">জেষ্ঠ্যতা</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">গ্যাজেটভুক্তির তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">ভ্রমণের জন্য প্রদত্ত ভাতার পরিমাণ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mt-md-5">
                    <button class="px-5 btn btn-outline-danger me-md-2" type="button">বাতিল করুন</button>
                    <button class="px-5 btn btn-success" type="submit">প্রিভিউ করুন</button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeService;