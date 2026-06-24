import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import AuthRoute from "./src/routes/auth.route.ts";
import WatchlistRoute from "./src/routes/watchlist.route";
import SubscriptionRoute from "./src/routes/subscription.route";
import cors from "cors";
import {
  appLimiter,
  loginLimiter,
} from "./src/middlewares/rateLimit.middleware";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth/login", loginLimiter);
app.use("/auth/registration", loginLimiter);
app.use(appLimiter);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "ok", message: "Film Explorer API is running" });
});

app.use("/auth", AuthRoute);
app.use("/watchlist", WatchlistRoute);
app.use("/subscription", SubscriptionRoute);

app.use(
  (
    err: Error & { status?: number },
    req: Request,
    res: Response,  
    next: NextFunction,
  ) => {
    const status = err.status || 500;
    return res.status(status).json({
      message: err.message || "Something went wrong!!",
    });
  },
);

const runServer = () => {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

runServer();
