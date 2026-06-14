export interface RegisterUserType {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export type SignInUserInfoType = {
  userName: string;
  phoneNumber: string;
  email: string;
};

export type SignInDataRecievingType = {
  token: string;
  user: SignInUserInfoType;
};

export type SignInUserSendingType = {
  email: string;
  password: string;
};
