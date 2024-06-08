import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes  } from 'react-router-dom';
import './App.css';
import AddMemberComponent from './components/pages/add-member/add-member-component';
import ApproveOrRejectLicenseComponent from './components/pages/approve-or-reject-license/approve-or-reject-license.component';
import HomePageComponent from './components/pages/home-page-component/home-page-component';
import LoginPage from './components/pages/login-page/login-page';
import MySalesReportComponent from './components/pages/my-sales-report-component/my-sales-report-component';
import MySalesManDetail from './components/pages/my-team-performence-component/my-sales-man-detail';
import MyTeamPerformenceComponent from './components/pages/my-team-performence-component/my-team-performence-component';
import PayoutDetailsComponent from './components/pages/payout-model-component/payout-detail-component';
import PayoutModelComponent from './components/pages/payout-model-component/payout-model-component';
import SaleryCalculatorComponent from './components/pages/salary-calculator-component/salary-calculator-component';
import MyTdsComponent from './components/pages/tds-component/tds-component';
import TrainingViedoComponent from './components/pages/training-viedo-component/training-viedo-component';
import UploadEmployeeTdsComponent from './components/pages/upload-employee-tds/upload-employee-tds.component';
import UploadTrainingViedoComponent from './components/pages/upload-training-viedo/upload-training-viedo.component';
import { EnvironmentHelperService } from './services/helper-service/environment-helper.service';
import { ADMIN_SIDE_NAV, APP, MASTER_ADMIN_SIDE_NAV, PDM_SALES_AND_CHANNEL_HEAD_SIDE_NAV, PROMOTER_AND_PARTNER_SIDE_NAV, REGIONAL_ZONAL_HEAD_SIDE_NAV, USER_JOB_TITLE } from './services/utilities/APP.constant';

function App() {
  const _environmentHelperService = new EnvironmentHelperService();

  const [menuList, setMenuList] = useState([]);

  const [sideMenuOn, setSideMenuOn] = React.useState(false);

  const sideMenuStyle = {
    position: "absolute",
    left: sideMenuOn ? "0px" : "-100%",
    top: "60px",
    transition: ".5s",
    backgroundColor: '#ffffff',
    zIndex: 9
  }
  
  const userLoggedIn = localStorage.getItem('sessionObj') ? true : false;

  const toggleSideMenu = e => {
    setSideMenuOn(!sideMenuOn);
  }

  function assignMenuList() {
    const promoterAndParner = [USER_JOB_TITLE.PROMOTER, USER_JOB_TITLE.DIRECT_PARTNER, USER_JOB_TITLE.CHANNEL_PARTNER];
    const pdmAndHeads = [USER_JOB_TITLE.PDM, USER_JOB_TITLE.CHANNEL_HEAD, USER_JOB_TITLE.SALES_HEAD];
    const regionalAndZonal = [USER_JOB_TITLE.REGIONAL_HEAD, USER_JOB_TITLE.ZONAL_HEAD];
    if(_environmentHelperService.getRole() === USER_JOB_TITLE.admin) {
      setMenuList(ADMIN_SIDE_NAV);
    } else if(_environmentHelperService.getRole() === USER_JOB_TITLE.MASTER_ADMIN) {
      setMenuList(MASTER_ADMIN_SIDE_NAV)
    } else if(promoterAndParner.includes(_environmentHelperService.getRole())) {
      setMenuList(PROMOTER_AND_PARTNER_SIDE_NAV)
    } else if(pdmAndHeads.includes(_environmentHelperService.getRole())) {
      setMenuList(PDM_SALES_AND_CHANNEL_HEAD_SIDE_NAV)
    } else if(regionalAndZonal.includes(_environmentHelperService.getRole())) {
      setMenuList(REGIONAL_ZONAL_HEAD_SIDE_NAV)
    }
  }

  function logOut() {
    localStorage.removeItem('sessionObj');
    window.location.reload();
  }

  useEffect(() => {
    assignMenuList();
    // eslint-disable-next-line 
  }, []);
  return (
    <div className='relative'>
      <BrowserRouter>
        {/* <Header /> */}
        {/* Header Beigns */}
        <div className="p-4 text-white text-xl flex justify-between items-center bg-green-dark">
          {
            userLoggedIn ? <div className="flex gap-2 items-center w-full">
            {/* <button onClick={toggleSideMenu} className="menu-toggler">Toggle SideBar</button> */}
              <span className="menu-toggler-icon cursor-pointer material-symbols-outlined" onClick={toggleSideMenu}>
                menu
              </span>
              <div className='flex justify-between w-[95%] items-center'>
                <div>{APP.MATH_TUTEE_SALLES}</div>
                <div><button className="secondary" onClick={logOut}>Log out</button></div>
              </div>
            </div> : <div>{APP.MATH_TUTEE_SALLES}</div>
          }
        </div>
        {/* Header Ends */}
        <div className='flex layout-height'>
          {
            userLoggedIn ?
            <div className='side-nav pt-6 ml-4 flex flex-col gap-6 w-72 border-r border-r-black'  id="side-nav">
              {menuList.map((x, i) => <div>
                <NavLink className='hover:bg-neutral-9 hover:text-blue-4 rounded-xl p-3 flex gap-1 items-center' to={x.path}>
                  <div className='flex items-center'>
                    <span className="material-symbols-outlined text-blue-4">
                      {x.iconName}
                    </span>
                  </div>
                  {x.menu}
                </NavLink>
              </div>)}
            </div>
            : <div></div>
          }

          {
            userLoggedIn ?
            <div onClick={toggleSideMenu} className='toggle-side-nav pt-6 ml-4 flex flex-col gap-6 w-72 border-r border-r-black' style={sideMenuStyle} id="side-nav">
              {menuList.map((x, i) => <div>
                <NavLink className='hover:bg-neutral-9 hover:text-blue-4 rounded-xl p-3  flex gap-1 items-center' to={x.path}>
                  <div className='flex items-center'>
                    <span className="material-symbols-outlined text-blue-4">
                      {x.iconName}
                    </span>
                  </div>
                  {x.menu}
                </NavLink>
              </div>)}
            </div> : <div></div>
          }
          {/* Toggle Menu Starts */}
          
          {/* Toggle Menu Ends */}
          <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePageComponent />}>
              <Route path="/home/my-sales-report" element={<MySalesReportComponent />} />
              {/* <Route path="/home/check-my-managers-performence" element={<CheckMyManagerPerformence />} /> */}
              <Route path="/home/add-member" element={<AddMemberComponent />} />
              <Route path="/home/my-team-performence" element={<MyTeamPerformenceComponent />} />
              <Route path="/home/my-team-performence/:salesman" element={<MySalesManDetail />} />
              <Route path="/home/salary-caculator" element={<SaleryCalculatorComponent />} />
              <Route path="/home/payout-model" element={<PayoutModelComponent />} />
              <Route path="/home/payout-model/:detail" element={<PayoutDetailsComponent />} />
              <Route path="/home/my-payout-report" element={<MyTdsComponent />} />
              <Route path="/home/traning-viedo" element={<TrainingViedoComponent />} />


              <Route path="/home/upload-training-viedo" element={<UploadTrainingViedoComponent />} />
              <Route path="/home/approve-or-reject-request" element={<ApproveOrRejectLicenseComponent />} />
              <Route path="/home/upload-employee-tds" element={<UploadEmployeeTdsComponent />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
