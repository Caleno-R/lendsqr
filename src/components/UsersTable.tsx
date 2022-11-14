import React from 'react';
import UserRecordRow, { STATUS } from './UserRecordRow';
import "../styles/userTableSheet.css";
import UserRecordHeader from './UserRecordHeader';


const UserTable:React.FC = () => {
  return (
    <div aria-label='user-table' className="user-table">
      <table >
        <UserRecordHeader />
        <tbody>
          <UserRecordRow organization={"Lendsqr"} username={"Adedeji"} email={"adedeji@lendsqr.com"} phoneNumber={"08078903721"} dateJoined={"May 15, 2020 10:00 AM"} status={STATUS.INACTIVE}/>
          <UserRecordRow organization={"Lendsqr"} username={"Adedeji"} email={"adedeji@lendsqr.com"} phoneNumber={"08078903721"} dateJoined={"May 15, 2020 10:00 AM"} status={STATUS.PENDING}/>
          <UserRecordRow organization={"Lendsqr"} username={"Adedeji"} email={"adedeji@lendsqr.com"} phoneNumber={"08078903721"} dateJoined={"May 15, 2020 10:00 AM"} status={STATUS.BLACKLISTED}/>
          <UserRecordRow organization={"Lendsqr"} username={"Adedeji"} email={"adedeji@lendsqr.com"} phoneNumber={"08078903721"} dateJoined={"May 15, 2020 10:00 AM"} status={STATUS.ACTIVE}/>
        </tbody>
      </table>
    </div>
  )
}

export default UserTable;