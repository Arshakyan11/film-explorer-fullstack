import { nanoid } from "nanoid";

export const createUserFromRegistration = (evemt) => {
  const { personName, phone, email, password } = evemt;
  return {
    id: nanoid(3),
    username: personName,
    phone: phone,
    email: email,
    password: password,
    watchlist: [],
  };
};

export const editiingProfileInfo = (event, userData) => {
  const { emailInput, passwordInput } = event;
  return {
    ...userData,
    email: emailInput,
    password: passwordInput,
  };
};
