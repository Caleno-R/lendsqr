import React from 'react';

import SlidersIcon from "../assets/sliders-h 1.svg";
import BadgePercenticon from "../assets/badge-percent 1.svg";
import ClipBoardIcon from "../assets/clipboard-list 1.svg";

const SettingsSideBar:React.FC = () => {
  return (
    <div className="sidebar__settings">
        <div className="settings__item">
            <img src={SlidersIcon} alt="userfriends icon" />
            <p>Preferences</p>
        </div>
        <div className="settings__item">
            <img src={BadgePercenticon} alt="userfriends icon" />
            <p>Fees and Pricing</p>
        </div>
        <div className="settings__item">
            <img src={ClipBoardIcon} alt="userfriends icon" />
            <p>Audit Logs</p>
        </div>
    </div>
  )
}

export default SettingsSideBar;