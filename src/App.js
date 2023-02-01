import { Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import EmployeeSpouse from './Pages/EmployeeInfo/EmployeeSpouse';
import EmployeeChild from './Pages/EmployeeInfo/EmployeeChild';
import EmployeeTransfer from './Pages/EmployeeInfo/EmployeeTransfer';
import EmployeeTravell from './Pages/EmployeeInfo/EmployeeTravell';
import EmployeeLanguageEfficiency from './Pages/EmployeeInfo/EmployeeLanguageEfficiency';
import EmployeeExtraCurricular from './Pages/EmployeeInfo/EmployeeExtraCurricular';
import EmployeeAddress from './Pages/EmployeeInfo/EmployeeAddress';
import EmployeeEducation from './Pages/EmployeeInfo/EmployeeEducation';
import EmployeeInfo from './Pages/EmployeeInfo/EmployeeInfo';
import EmployeePersonalInfo from './Pages/EmployeeInfo/EmployeePersonalInfo';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
import EmployeeTraining from './Pages/EmployeeInfo/EmployeeTraining';
import EmployeeService from './Pages/EmployeeInfo/EmployeeService';
import PrizeInfo from './Pages/PrizeInfo/PrizeInfo';
import PrizeInfoDetails from './Pages/PrizeInfo/PrizeInfoDetails';
import PrizeInternal from './Pages/PrizeInfo/PrizeInternal';
import PrizeInternational from './Pages/PrizeInfo/PrizeInternational';
import PrizeSonodpotro from './Pages/PrizeInfo/PrizeSonodpotro';
import LeaveManagement from './Pages/LeaveManagement/LeaveManagement';
import Punishment from './Pages/Punishment/Punishment';
import TopNavbar from './Pages/Navigations/TopNavbar';
import SideNavbar from './Pages/Navigations/SideNavbar';
import { useEffect, useRef } from 'react';

function App() {
  const navbar = useRef();
  const location = useLocation()

  useEffect(()=>{
    if (location.pathname === '/login') {
        navbar.current.style.display = 'none'
    } else if(location.pathname === '/signup'){
        navbar.current.style.display = 'none'
    } else {
        navbar.current.style.display = 'block'
    }
},[location.pathname])

  return (
    <div>
        <div ref={navbar}>
          <TopNavbar></TopNavbar>
          <SideNavbar></SideNavbar>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/employee-info" element={<EmployeePersonalInfo></EmployeePersonalInfo>}>
            <Route index element={<EmployeeInfo></EmployeeInfo>}></Route>
            <Route path='address' element={<EmployeeAddress></EmployeeAddress>}></Route>
            <Route path='education-degree' element={<EmployeeEducation></EmployeeEducation>}></Route>
            <Route path='spouse' element={<EmployeeSpouse></EmployeeSpouse>}></Route>
            <Route path='child' element={<EmployeeChild></EmployeeChild>}></Route>
            <Route path='transfer' element={<EmployeeTransfer></EmployeeTransfer>}></Route>
            <Route path='travell' element={<EmployeeTravell></EmployeeTravell>}></Route>
            <Route path='language-efficiency' element={<EmployeeLanguageEfficiency></EmployeeLanguageEfficiency>}></Route>
            <Route path='trainings' element={<EmployeeTraining></EmployeeTraining>}></Route>
            {/* <Route path='services' element={<EmployeeService></EmployeeService>}></Route> */}
            <Route path='extra-curricular' element={<EmployeeExtraCurricular></EmployeeExtraCurricular>}></Route>
            <Route path='prize-info' element={<PrizeInfoDetails></PrizeInfoDetails>}></Route>
            <Route path='leave-management' element={<LeaveManagement></LeaveManagement>}></Route>
            <Route path='punishment' element={<Punishment></Punishment>}></Route>
          </Route>

          {/* <Route path='/prize-info' element={<PrizeInfo></PrizeInfo>}>
            <Route path='internal-prize' element={<PrizeInternal></PrizeInternal>}></Route>
            <Route path='international-prize' element={<PrizeInternational></PrizeInternational>}></Route>
            <Route path='sonodpotro-info' element={<PrizeSonodpotro></PrizeSonodpotro>}></Route>
          </Route> */}
        </Routes>
    </div>
  );
}

export default App;
