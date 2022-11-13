import React from 'react';
// userdata interface
import { STATUS, UserData } from '../models/UserData';
// styles imports
import "../styles/userRecordSheet.css";

const statusClassName = (status: STATUS) => {
    return `status-${status.toLowerCase()}`;
}

const UserRecordRow: React.FC<UserData> = ({ organization, username, email, phoneNumber, dateJoined, status }: UserData) => {
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
    )
}

export default UserRecordRow;