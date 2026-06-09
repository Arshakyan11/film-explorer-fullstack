import { object, ref, string } from "yup";

export const validationRegistration = object({
  personName: string()
    .min(2, "Pls write more than 1 symbols")
    .max(16, "Pls write less than 16 symbols")
    .required("Pls write Name"),
  phone: string()
    .matches(/^\+[0-9]{11}$/, "Pls enter valid phone Number")
    .required("Pls write Your phone Number"),
  email: string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Pls enter valid email")
    .required("Pls write Your Email"),
  password: string()
    .min(6, "Write Minimum 6 symbols")
    .max(16, "Write Maximum 16 symbols")
    .required("Pls write Your password"),
  passwordRepeat: string()
    .oneOf([ref("password")], "The password is not the same")
    .required("Pls repeat your passowrd"),
});

export const validationLogin = object({
  email: string()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Pls enter valid email")
    .required("Pls write Your Email"),
  password: string()
    .min(6, "Write Minimum 6 symbols")
    .max(16, "Write Maximum 16 symbols")
    .required("Pls Write Your Password"),
});

export const validationProfile = object({
  password: string().required("Pls Write Your Old Password"),
  newPassword: string()
    .min(6, "Write Minimum 6 symbols")
    .max(16, "Write Maximum 16 symbols")
    .required("Pls write New password"),
  newPasswordRepeat: string()
    .oneOf([ref("newPassword")], "The password is not the same")
    .required("Pls Repeat Your New Passowrd"),
});
