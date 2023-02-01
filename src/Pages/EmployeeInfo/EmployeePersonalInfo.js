import React from 'react';
import { Outlet } from 'react-router-dom';

const EmployeePersonalInfo = () => {
    return (
        <div className='component_container py-2 my-3 py-md-5 my-md-5'>
            <Outlet></Outlet>
        </div>
    );
};

export default EmployeePersonalInfo;