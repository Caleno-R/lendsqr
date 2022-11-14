import React from 'react';
// interface model imports
import { UserContainerDetail } from '../models/UserDetailsModel';
// svg imports
import AvatarPic from "../assets/avatar-user 1.svg";
import FullStar from "../assets/full-star 1.svg";
import EmptyStar from "../assets/empty-star 1.svg";

// css imports
import "../styles/userDetailStyle.css";

const UserDetail:React.FC<UserContainerDetail> = ({ fullName, userId, userTier, bankBalance, bankName, bankAccountNumber, avatarPic, currency }: UserContainerDetail) => {
  const fullStars: Array<string> = [];
  const emptyStars: Array<string> = [];
  const numEmptyStars = 3 - userTier;
  for(let i=0; i<userTier; i++){
    fullStars.push(`${i}`);
  }
  for(let i=0; i<numEmptyStars; i++){
    emptyStars.push(`${i}`)
  }
  return (
    <div className="user__detail">
      <div className="user__image detail">
        <img src={typeof avatarPic !== "undefined"? avatarPic : AvatarPic} alt={`${fullName} avatar`} />
      </div>
      <div className="user__info detail">
        <p>{fullName}</p>
        <p id="user__id">{userId}</p>
      </div>
      <div className="user__rating detail">
        <p>User's Tier</p>
        <div>
          {fullStars.map((value) =>(
            <img src={FullStar} key={value} alt=""/>
          ))}
          {emptyStars.map((value) =>(
            <img src={EmptyStar} key={value} alt=""/>
          ))}
        </div>
      </div>
      <div className="user__bank__info detail">
        <p><span>{currency}</span> {bankBalance}</p>
        <p id="bank__info"><span>{bankAccountNumber}</span>/<span>{bankName}</span></p>
      </div>

    </div>
  )
}

export default UserDetail;

