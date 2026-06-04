import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import AuthRoute from "./src/routes/auth.route.ts";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/auth", AuthRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const status = 500;
  return res.status(status).json({
    message: err.message || "Something went wrong!!",
  });
});

const runServer = () => {
  const PORT = process.env.PORT || 8000;
  const HOST = process.env.HOST;
  app.listen(PORT, () => {
    console.log(`SERVER CONNECTED SUCCESSFULLY \nhttp://${HOST}:${PORT}`);
  });
};

runServer();
