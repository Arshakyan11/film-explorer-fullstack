import { RegisterUserType } from "../types/auth.types.ts";
import { prisma } from "../lib/prisma.ts";
import { errorThrower } from "../utils/errorThrower.ts";
export const registerService = async (data: RegisterUserType) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email: data.email }, { phone: data.phone }],
    },
  });
  if (existingUser) {
    errorThrower("User Already Exists!");
  }
  const user = await prisma.user.create({
    data: {
      username: data.username,
      email: data.email,
      phone: data.phone,
      password: data.password,
    },
  });
  return user;
};
// export const loginService = async (data) => {};
