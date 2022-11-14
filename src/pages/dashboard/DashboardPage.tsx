import React, { useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import UserBox from '../../components/UserBox';
import UserTable from '../../components/UsersTable';
import SearchField from '../../components/SearchField';
// mui icons imports
import NotificationsIcon from '../../assets/notification 1.svg';
// import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import "../../styles/dashboard.css";
// svg imports
import LendSQR from "../../assets/lendsqr.svg";
import Logo from "../../assets/Logo.svg";
import AvatarPic from "../../assets/avatar.svg";
import BriefCase from "../../assets/briefcase 1.svg";
import HomeIcon from "../../assets/home 1.svg";
import UserBox1 from "../../assets/user-box 1.svg";
import UserBox2 from "../../assets/user-box 2.svg";
import UserBox3 from "../../assets/user-box 3.svg";
import UserBox4 from "../../assets/user-box 4.svg";
// Sidebar compoents imports
import CustomerSideBar from '../../components/CustomerSidebar';
import BusinessSideBar from '../../components/BusinessSideBar';
import SettingsSideBar from '../../components/SettingsSideBar';
import UserDetails from '../userDetails/UserDetailsPage';
import UsersRequest from '../../api/users';
import GeneralDetailBox from '../../components/GeneralDetails';

// amateur

const Dashboard: React.FC = () => {
  const response = new UsersRequest();
  const result = useMemo(() => response.getAllUsers(), []);

  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <nav>
        <div>
          <img src={Logo} alt="LendSqr Logo" width={"21px"} />
          <img src={LendSQR} alt="LendSqr Insignia" height={"30px"} />
        </div>
        <SearchField />
        <ul>
          <li className="active docs"><a href='/login'>Docs</a></li>
          <li className="notification"><img src={NotificationsIcon} alt="notification icon"/></li>
          <li className="avatar">
            <div>
              <img src={AvatarPic} alt="my avatar" />
            </div>
          </li>
          <li className="profile-name">
            <div>
              <p>Adedeji</p>
            </div>
          </li>
        </ul>
      </nav>
      <div className="app-container">
        <section className="sidebar">
          <div className="sidebar__head">
            <div className="sidebar__organization">
              <img src={BriefCase} alt="briefcase icon" />
              <p>Switch Organization</p>
            </div>
            <div className="sidebar__dashboard">
              <img src={HomeIcon} alt="home icon" />
              <p>Dashboard</p>
            </div>
            {/* Customers component */}
            <h5>Customers</h5>
            <CustomerSideBar />
            {/* Business Component */}
            <h5>Businesses</h5>
            <BusinessSideBar />
            {/* Settings component */}
            <h5>Settings</h5>
            <SettingsSideBar />
          </div>
        </section>
        <main className="main-content">
          <div className="content-title">
            <p>Users</p>
          </div>
          <div className="user-boxes">
            {/* <UserDetails /> */}
            <UserBox title={"USERS"} numberOfUsers={"2453"} icon={UserBox1} />
            <UserBox title={"ACTIVE USERS"} numberOfUsers={"2,453"} icon={UserBox2} />
            <UserBox title={"USERS WITH LOANS"} numberOfUsers={"12,453"} icon={UserBox3} />
            <UserBox title={"USERS WITH SAVINGS"} numberOfUsers={"102,453"} icon={UserBox4} />
          </div>
          <UserTable />
          {/* <GeneralDetailBox /> */}
        </main>

      </div>

    </div>
  )
}

export default Dashboard;