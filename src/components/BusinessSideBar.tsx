import React from 'react';

import LoanrequestIcon from "../assets/loan-request 1.svg";
import NpBankIcon from "../assets/np_bank_148501_000000 1.svg";
import CoinsIcon from "../assets/coins-solid 1.svg";
import BriefCase from "../assets/briefcase 1.svg";
import TransactionIcon from "../assets/transanct.svg";
import GalaxyIcon from "../assets/galaxy 1.svg";
import UserCogIcon from "../assets/user-cog 1.svg";
import ScrollIcon from "../assets/scroll 1.svg";
import ChartBarIcon from "../assets/chart-bar 2.svg";

const BusinessSideBar:React.FC = () => {
  return (
    <div className="sidebar__business">
      <div className="business__item">
          <img src={BriefCase} alt="userfriends icon" />
          <p>Organization</p>
        </div>
        <div className="business__item">
          <img src={LoanrequestIcon} alt="userfriends icon" />
          <p>Loan Products</p>
        </div>
        <div className="business__item">
          <img src={NpBankIcon} alt="userfriends icon" />
          <p>Saving Products</p>
        </div>
        <div className="business__item">
          <img src={CoinsIcon} alt="userfriends icon" />
          <p>Fees and Charges</p>
        </div>
        <div className="business__item">
          <img src={TransactionIcon} alt="userfriends icon" />
          <p>Transactions</p>
        </div>
        <div className="business__item">
          <img src={GalaxyIcon} alt="userfriends icon" />
          <p>Services</p>
        </div>
        <div className="business__item">
          <img src={UserCogIcon} alt="userfriends icon" />
          <p>Service Account</p>
        </div>
        <div className="business__item">
          <img src={ScrollIcon} alt="userfriends icon" />
          <p>Settlements</p>
        </div>
        <div className="business__item">
          <img src={ChartBarIcon} alt="userfriends icon" />
          <p>Reports</p>
        </div>
    </div>
  )
}

export default BusinessSideBar;