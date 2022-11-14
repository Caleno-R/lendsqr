import React from 'react';

import UserFriends from "../assets/user-friends 1.svg";
import UsersIcon from "../assets/users 1.svg";
import SackIcon from "../assets/sack 1.svg";
import HandShakeIcon from "../assets/handshake-regular 1.svg";
import PiggyBankIcon from "../assets/piggy-bank 1.svg";
import LoanrequestIcon from "../assets/loan-request 1.svg";
import UserCheckIcon from "../assets/user-check 1.svg";
import UserTimesIcon from "../assets/user-times 1.svg";

const CustomerSideBar:React.FC = () => {
  return (
    <div className='sidebar__customers'>
        <div className="customer__item">
        <img src={UserFriends} alt="userfriends icon" />
        <p>Users</p>
        </div>
        <div className="customer__item">
        <img src={UsersIcon} alt="userfriends icon" />
        <p>Guarantors</p>
        </div>
        <div className="customer__item">
        <img src={SackIcon} alt="userfriends icon" />
        <p>Loans</p>
        </div>
        <div className="customer__item">
        <img src={HandShakeIcon} alt="userfriends icon" />
        <p>Decision Models</p>
        </div>
        <div className="customer__item">
        <img src={PiggyBankIcon} alt="userfriends icon" />
        <p>Savings</p>
        </div>
        <div className="customer__item">
        <img src={LoanrequestIcon} alt="userfriends icon" />
        <p>Loan Requests</p>
        </div>
        <div className="customer__item">
        <img src={UserCheckIcon} alt="userfriends icon" />
        <p>Whitelist</p>
        </div>
        <div className="customer__item">
        <img src={UserTimesIcon} alt="userfriends icon" />
        <p>Karma</p>
        </div>
    </div>
  )
}

export default CustomerSideBar;
