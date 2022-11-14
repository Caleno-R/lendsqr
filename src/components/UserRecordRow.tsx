import React from 'react';
// custom css imports
import "../styles/userRecordSheet.css";
// mui icon imports
// import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

const statusClassName = (status: STATUS) =>{
    return `status-${status.toLowerCase()}`;
}
const UserRecordRow:React.FC<UserData> = ({organization, username, email, phoneNumber, dateJoined, status}: UserData) => {
    const statusClass = statusClassName(status);
    return (
      <tr>
        <td>{organization}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <td>{dateJoined}</td>
        <td>
          <div className={statusClass}>
            {status}
          </div>
        </td>
      </tr>
  );
}
export enum STATUS{
  INACTIVE = "inactive",
  PENDING = "pending",
  BLACKLISTED = "blacklisted",
  ACTIVE = "active",
}

interface UserData{
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: STATUS;
}

export default UserRecordRow;