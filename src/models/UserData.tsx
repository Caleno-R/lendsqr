export enum STATUS{
    INACTIVE = "inactive",
    PENDING = "pending",
    BLACKLISTED = "blacklisted",
    ACTIVE = "active",
  }
  
export interface UserData{
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: STATUS;
  }
  