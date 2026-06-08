import { prisma } from "../lib/prisma.ts";
import type {
  LoginUserType,
  RegisterUserType,
  ResetPasswordType,
} from "../types/auth.types.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { errorThrower } from "../utils/errorThrower";

export const registerService = async (data: RegisterUserType) => {
  const checkUser = await prisma.user.findFirst({
    where: {
      OR: [{ email: data.email }, { phone: data.phone }],
    },
  });
  if (checkUser) {
    return errorThrower("User Already Exists!");
  }
  const securePassword = await bcrypt.hash(data.password, 10);

  await prisma.user.create({
    data: {
      email: data.email,
      phone: data.phone,
      password: securePassword,
      username: data.username,
    },
  });
};
export const loginService = async (data: LoginUserType) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });
  if (!existingUser) {
    return errorThrower("Email or Password is wrong", 401);
  }
  const isMatch = await bcrypt.compare(data.password, existingUser.password);
  if (!isMatch) {
    return errorThrower("Email or Password is wrong", 401);
  }
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return errorThrower("JWT SECRET CODE IS MISSING IN BACKEND", 500);
  }
  const token = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    secret,
    { expiresIn: "1h" },
  );

  const { id: _, password: _pass_word, ...cleanData } = existingUser;
  return {
    user: cleanData,
    token,
  };
};

export const resetPasswordService = async (
  userID: string,
  data: ResetPasswordType,
) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      id: userID,
    },
  });
  if (!existingUser) {
    return errorThrower("User not Found!", 404);
  }
  const isMatch = await bcrypt.compare(data.password, existingUser.password);
  if (!isMatch) {
    return errorThrower("Current password is incorrect", 401);
  }
  if (data.newPassword === data.password) {
    return errorThrower(
      "New password must be different from the current password",
      400,
    );
  }
  const newHashedPassword = await bcrypt.hash(data.newPassword, 10);
  await prisma.user.update({
    where: { id: userID },
    data: { password: newHashedPassword },
  });
  return {
    message: "Password has been changed successfully",
  };
};
