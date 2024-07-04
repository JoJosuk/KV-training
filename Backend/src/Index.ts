import { Request, Response } from "express";
import express from "express";
import Middleware from "./middleware/logger.middleware";
import dataSource from "./db/data-source.db";
// import EmployeeRouter from "../EmployeeRouter";

import employeeRouter from "./routes/employee.routes";


// const server = http.createServer((req, res) => {
//   console.log("request method", req.method);
//   console.log(req.url);
//   let cookie = {
//     mycookie: "hello",
//   };
//   res.writeHead(200, {
//     "Set-Cookie": `Mycookie=hello`,
//     "Content-Type": "text/json",
//   });
//   res.end("Hello  ");
// });
// server.listen(5005, () => {
//   console.log("server is running on the port 5005");
// });
console.log(process.env.USERNAME,process.env.PASSWORD)
const app = express();
app.use(express.json());

interface Employee {
  name: string;
  age: number;
}

app.use(Middleware);
// app.get("/", (req: Request, res: Response) => {
//   console.log(req.params.id);
//   return res.status(500).json({ hello: "bye" });
// });

// //
// app.get("/getData", (req: Request, res: Response) => {
//   let employeedata: Employee = {
//     name: "jojo",
//     age: 34,
//   };
//   return res.json(employeedata);
// });

app.use("/employee", employeeRouter);
// app.use("/employee", employeeRouter)

(async () => {
  try {
    await dataSource.initialize();
    console.log("Initialized")
  } catch (e) {
    console.log("failed", e);
    process.exit(1);
  }
  app.listen(5005, () => {
    console.log("server is running on the port 5005");
  });
})();
