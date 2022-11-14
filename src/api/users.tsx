import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../stores";
import { setGuarantorFields } from "../stores/guarantorStore";
import { setProfileFields } from "../stores/profileStore";
import { EducationResponse, GuarantorResponse, ProfileResponse, SocialsResponse, UserDetailsResponse, UsersMetaResponse } from "../models/UserDetailsModel";
import { setSocialFields } from "../stores/socialsStores";
import { setEducationFields } from "../stores/educationStore";
import { setMetaFields } from "../stores/usersStore";

class UsersRequest{
    static baseUrl:string = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/";

    getAllUsers = async() =>{
        const endpoint = `${UsersRequest.baseUrl}/users`;
        const response = await axios.get(endpoint)
        .then((results):UserDetailsResponse[] =>{
            console.log("Got back a response");
            // console.log(results);
            const usersResponse: Array<UserDetailsResponse> = results.data;
            console.log(usersResponse);
            return usersResponse;
        })
        .catch((error) =>{
            console.error(`Got back an error ${error}`);
            return null;
        });
        return response;
    }

    fetchGuarantors = (response: GuarantorResponse, dispatch: AppDispatch):void =>{
        dispatch(setGuarantorFields(response));
    }
    fetchProfile = (response: ProfileResponse, dispatch: AppDispatch) =>{
        dispatch(setProfileFields(response));
    }

    fetchSocials = (response: SocialsResponse, dispatch: AppDispatch) =>{
        dispatch(setSocialFields(response));
    }
    fetchEducation = (response: EducationResponse, dispatch: AppDispatch) =>{
        dispatch(setEducationFields(response));
    }
    fetchUserMeta = (response: UsersMetaResponse, dispatch: AppDispatch) =>{
        dispatch(setMetaFields(response));
    }
}

export default UsersRequest;