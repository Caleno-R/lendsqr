import React from 'react';

const UserTabs = () => {
  return (
    <div className='user__tabs'>
      <div id="active-tab" className="user__tab">
        <a href="#general-details">General Details</a>
      </div>
      <div className="user__tab">
        <a href="#documents">Documents</a>
      </div>
      <div className="user__tab">
        <a href="#bank-details">Bank Details</a>
      </div>
      <div className="user__tab">
        <a href="#loans">Loans</a>
      </div>
      <div className="user__tab">
        <a href="#savings">Savings</a>
      </div>
      <div className="user__tab">
        <a href="#app-system">App and System</a>
      </div>
    </div>
  )
}

export default UserTabs;