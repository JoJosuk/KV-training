import express, { Request, Response } from "express";
import Employee from "./Employee";
import dataSource from "./data-source";
import { Equal } from "typeorm";
import { error } from "console";

let employees: Employee[] = [
  {
    id: 1,
    email: "joel@email.com",
    name: "jojo",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 2,
    email: "reenphy@hotmail.com",
    name: "reenphy",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];

const empRouter = express.Router();
const employeeRepository = dataSource.getRepository(Employee);

empRouter.get("/", async (req: Request, res: Response) => {
  const data = await employeeRepository.find();
  console.log(data);
  res.status(200).json(data);
});

empRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = await employeeRepository.findBy({
      id,
    });
    if (data.length == 0) {
      throw new error();
    }
    res.json(data);
  } catch (e) {
    res.status(404).json("data not found");
  }
});
empRouter.post("/", async (req: Request, res: Response) => {
  try {
    const newEmployee = new Employee();
    newEmployee.email = req.body.email;
    newEmployee.name = req.body.name;
    const savedEmployee = await employeeRepository.save(newEmployee);
    return res.status(201).json(savedEmployee);
  } catch (E) {
    return res.status(403).json("error in input");
  }
});

empRouter.put("/:id", (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const updateEmployee = new Employee();
    updateEmployee.email = req.body.email;
    updateEmployee.name = req.body.name;
    const employeedata = employeeRepository.update({ id }, updateEmployee);
    return res.json(employeedata);
  } catch (e) {
    return res.status(500).json({ error: e });
  }
});

empRouter.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const employeedata = employeeRepository.delete({id})
  return res.json(employeedata);
});

export default empRouter;
