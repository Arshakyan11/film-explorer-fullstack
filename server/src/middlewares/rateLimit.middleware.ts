import rateLimit from "express-rate-limit";

export const appLimiter = rateLimit({
  windowMs: 16 * 60 * 1000,
  max: 500,
  message: "Too many attempts",
});

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: "Too many login attempts, try again later",
});

export const signupLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many accounts created, try later",
});
