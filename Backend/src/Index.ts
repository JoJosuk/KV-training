import { Request, Response } from "express";
import express from "express";
import Middleware from "./middleware/logger.middleware";
import dataSource from "./db/data-source.db";
// import EmployeeRouter from "../EmployeeRouter";

import employeeRouter from "./routes/employee.routes";
import HttpException from "./expceptions/http.exceptions";
import errorMiddleware from "./middleware/error.middleware";
console.log(process.env.USERNAME, process.env.PASSWORD);
const app = express();
app.use(express.json());

interface Employee {
  name: string;
  age: number;
}

app.use(Middleware);

app.use("/employee", employeeRouter);
app.use(errorMiddleware);

(async () => {
  try {
    await dataSource.initialize();
    console.log("Initialized");
  } catch (e) {
    console.log("failed", e);
    process.exit(1);
  }
  app.listen(5005, () => {
    console.log("server is running on the port 5005");
  });
})();
