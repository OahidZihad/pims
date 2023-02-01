import React from 'react';

const PrizeInternational = () => {
    return (
        <div className='employee_info'>
            <div className='d-inline d-md-flex justify-content-between'>
                <h4 style={{color: '#683091', fontWeight: 'bold', fontSize: '22px'}}>আন্তর্জাতিক পুরস্কার সম্পর্কিত তথ্য</h4>
                <p style={{color: '#5D5E82'}}>কর্মচারী/কর্মকর্তা নম্বরঃ 22004689</p>
            </div>

            <form className='pt-4'>
                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">দেশের নাম</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="00447809xxxxx"/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">দাতা প্রতিষ্ঠানের নাম</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="00447809xxxxx"/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">পুরস্কার প্রদানের স্থান <span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="আবদুল্লাহ-আল মামুন"/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">পুরস্কার প্রদানের তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Md. Abdullah Al Mamun"/>
                    </div>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">পুরস্কার প্রদানের কারণ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="10-02-1988"/>
                    </div>
                </div>

                <div className='row'>
                    <div class="col-xs-auto col-md mb-3">
                        <label for="inputAddress" class="form-label">পুরস্কার গ্রহণের তারিখ</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="10-02-1988"/>
                    </div>
                    <div class="col-xs-auto col-md mb-3"></div>
                    <div class="col-xs-auto col-md mb-3"></div>
                    <div class="col-xs-auto col-md mb-3"></div>
                    <div class="col-xs-auto col-md mb-3"></div>

                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-0 mt-md-5 pt-2 pt-md-5">
                    <button class="px-5 btn btn-outline-danger me-md-2" type="button">বাতিল করুন</button>
                    <button class="px-5 btn btn-success" type="submit">প্রিভিউ করুন</button>
                </div>
            </form>
        </div>  
    );
};

export default PrizeInternational;