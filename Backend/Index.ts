// console.log("hello listening server");

import { Request, Response } from "express";
import EmployeeRouter from "./EmployeeRouter"

// const http = require("http");
import  express  from "express";
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

const app = express();

interface Employee {
  name: string;
  age: number;
}


app.get("/", (req: Request, res: Response) => {
  console.log(req.params.id);
  return res.status(500).json({ hello: "bye" });
});

//
app.get("/getData", (req: Request, res: Response) => {
  let employeedata: Employee = {
    name: "jojo",
    age: 34,
  };
  return res.json(employeedata);
});

app.use("/employee",EmployeeRouter)

app.listen(5005, () => {
  console.log("server is running on the port 5005");
});
