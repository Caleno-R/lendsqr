export interface UserContainerDetail{
    fullName: string;
    userId: string;
    userTier: number;
    bankBalance: number;
    bankName: string;
    bankAccountNumber: string;
    avatarPic?: string;
    currency: string;
}

export interface UserDetailsResponse extends UsersMetaResponse{
    profile: ProfileResponse;
    guarantor: GuarantorResponse;
    socials: SocialsResponse;
    education: EducationResponse;
}

export interface UsersMetaResponse{
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    accountBalance: string;
    accountNumber: string;
    id: string;
}

export interface ProfileResponse extends GuarantorResponse{
    avatar: string;
    bvn: string;
    currency: string;
}

export interface GuarantorResponse{
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
}

export interface SocialsResponse{
    facebook: string;
    instagram: string;
    twitter: string;
}

export interface EducationResponse{
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: Array<string>;
    loanRepayment: string;
}

