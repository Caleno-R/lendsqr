import React from 'react';
import "../styles/userBoxSheet.css";
// interface imports
import { UserBoxModel } from '../models/UserBoxModel';

const UserBox:React.FC<UserBoxModel> = ({ title, numberOfUsers, icon }: UserBoxModel) => {
  return (
    <div className="user-box">
        <div className="icon">
            {/* icon  */}
            <img src={icon} alt="" width={"40px"}/>
        </div>
        <div className="users">
            <span>{title}</span>
        </div>
        <div className="numOfUsers">
          {/* fetch number of users, api */}
          <span>{numberOfUsers}</span>
        </div>
    </div>
  );
}


export default UserBox;