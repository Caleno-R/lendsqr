import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProfileResponse } from '../models/UserDetailsModel';
import { setAddress, setFirstName, setLastName, setPhoneNumber, setCurrency, setGender,  } from "../stores/profileStore";
// import 
import { RootState } from '../stores';

const PersonalInfoBox:React.FC = () => {
    const firstName = useSelector((state: RootState) => state.profile.firstName);
    const lastName = useSelector((state: RootState) => state.profile.lastName);
    const phoneNumber = useSelector((state: RootState) => state.profile.phoneNumber);
    const bvn  = useSelector((state: RootState) => state.profile.bvn);
    const gender = useSelector((state: RootState) => state.profile.gender);

    // const email = useSelector((state: RootState) => state.profile.email);
    // const  = useSelector((state: RootState) => state.profile.lastName);
    // const lastName = useSelector((state: RootState) => state.profile.lastName);
    const dispatch = useDispatch();

    return (
        <div>
            <h4>Personal Information</h4>
            <div>
                <p>Full Name</p>
                <p>{firstName}</p>
            </div>
            <div>
                <p>Phone Number</p>
                <p>{phoneNumber}</p>
            </div>
            <div>
                <p>Email Address</p>
                {/* <p>{email}</p> */}
            </div>
            <div>
                <p>Full Name</p>
                <p>{firstName}</p>
            </div>
            <div>
                <p>Full Name</p>
                <p>{firstName}</p>
            </div>
        </div>
    );

}

export default PersonalInfoBox;
