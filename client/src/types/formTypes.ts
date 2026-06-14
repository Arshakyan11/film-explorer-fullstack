export interface FormHelpers {
  resetForm: () => void;
}
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
  subscription: {
    id: string;
    name: string;
    price: number;
  };
};

export type SignInDataRecievingType = {
  token: string;
  user: SignInUserInfoType;
};

export type SignInUserSendingType = {
  email: string;
  password: string;
};

export type RegisterUserSendingType = {
  username: string;
  email: string;
  phone: string;
  password: string;
};

export type ResetPasswordSendingType = {
  password: string;
  newPassword: string;
};
