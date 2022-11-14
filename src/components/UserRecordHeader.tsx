import React from "react";
// svg import
import FilterIcon from "../assets/Vector.svg";
// css imports
// import "../styles/userRecordHeader.css";
const UserRecordHeader:React.FC = () =>{
    return (
        <thead style={{
            // height: "60px",
            width: "100%"
          }}>
            <tr>
              <th className="th__organization">
                <div>
                  <p>organization</p>
                  <img src={FilterIcon} alt="filter icon" width={"16px"}/>
                </div>
              </th>
              <th className="th__username">
                <div>
                  <p>username</p>
                  <img src={FilterIcon} alt="filter icon" width={"16px"}/>
                </div>
              </th>
              <th>
                <div>
                  <p>email</p>
                  <img src={FilterIcon} alt="filter icon" width={"16px"}/>
                </div>
              </th>
              <th>
                <div>
                  <p>phone number</p>
                  <img src={FilterIcon} alt="filter icon" width={"16px"}/>
                </div>
              </th>
              <th>
                <div>
                  <p>date joined</p>
                  <img src={FilterIcon} alt="filter icon" width={"16px"}/>
                </div>
              </th>
              <th>
                <div>
                  <p>status</p>
                  <img src={FilterIcon} alt="filter icon" width={"16px"}/>
                </div>
                
              </th>
            </tr>
        </thead>
    );
}

export default UserRecordHeader;