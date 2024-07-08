import { Request, Response } from "express";
import express from "express";
import Middleware from "./middleware/logger.middleware";
import dataSource from "./db/data-source.db";
// import EmployeeRouter from "../EmployeeRouter";

import employeeRouter from "./routes/employee.routes";
import HttpException from "./exceptions/http.exceptions";
import errorMiddleware from "./middleware/error.middleware";
import departmentRouter from "./routes/department.routes";
const app = express();
app.use(express.json());

// interface Employee {
//   name: string;
//   age: number;
// }

// console.log(
//   process.env["PG-USERNAME"],
//   process.env["PG_DATABASE"],
//   process.env["PG-PASSWORD"],
//   process.env.port
// );

app.use(Middleware);

app.use("/employee", employeeRouter);
app.use("/department", departmentRouter);
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
