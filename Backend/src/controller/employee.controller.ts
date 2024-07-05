import { plainToInstance } from "class-transformer";
import Address from "../entity/address.entity";
import HttpException from "../expceptions/http.exceptions";
import EmployeeService from "../service/employee.service";
import express, { NextFunction } from "express";
import { CreateEmployeeDto, UpdateEmployeeDto } from "../dto/employee.dto";
import { validate } from "class-validator";
import { LoginEmployeeDto } from "../dto/LoginEmployee.dto";
import { authMiddleware } from "../middleware/auth.middleware";
import { RequestWithUser } from "../utils/RequestWithUser";
import { Role } from "../utils/role.enum";
class EmployeeController {
  public router: express.Router;
  constructor(private employeeService: EmployeeService) {
    this.router = express.Router();
    this.router.post("/login",this.loginEmployee)
    this.router.get("/",authMiddleware, this.getAllEmployees);
    this.router.get("/:id",authMiddleware, this.getEmployeesById);
    this.router.post("/",authMiddleware, this.createEmployee);
    this.router.put("/:id",authMiddleware, this.updateEmployee);
    this.router.delete("/:id",authMiddleware, this.deleteEmployeeById);
  }
  public loginEmployee = async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
    try{const loginDto = plainToInstance(LoginEmployeeDto,req.body);
    const errors = await validate(loginDto)
    if (errors.length){
      throw new HttpException(400,"Login validation error",errors)
    }
    const token =await  this.employeeService.loginEmployeeService(loginDto.email,loginDto.password)
    console.log("token",token)
    return res.status(200).json(token)
  }
    catch(e){
      next(e)
    }
  }
  public getAllEmployees = async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const role = req.role
      if (role !== Role.UX){
        throw new HttpException(403,"Forbidden")
      }
      const employees = await this.employeeService.getAllEmployeees();
      return res.status(200).json(employees);
    } catch (e) {
      next(e);
    }
  };
  public getEmployeesById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const employee = await this.employeeService.getEmployeeById(
        Number(req.params.id)
      );
      console.log("empployee", employee);

      if (!employee) {
        throw new HttpException(404, "Not found the index");
      }
      return res.status(200).json(employee);
    } catch (err) {
      next(err);
    }
  };
  public createEmployee = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => {
    try {
      const employeeDto = plainToInstance(CreateEmployeeDto, req.body);
      const errors = await validate(employeeDto);

      if (errors.length) {
        // console.log(JSON.stringify(errors));
        // let resultstr :string ="";
        // errors.forEach((error)=>
        //   resultstr+= error

        // )
        throw new HttpException(400, JSON.stringify(errors), errors);
      }
      const employeeData = await this.employeeService.createEmployee(
        employeeDto.email,
        employeeDto.name,
        employeeDto.address,
        employeeDto.password,
        employeeDto.role
      );
      res.status(201).json("created data");
    } catch (e) {
      next(e);
    }
  };
  public updateEmployee = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const employeeDto = plainToInstance(UpdateEmployeeDto, req.body);
      const errors = await validate(employeeDto);
      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors), errors);
      }
      const updateAddress = new Address();
      if (employeeDto.address) {
        updateAddress.line1 = employeeDto.address.line1;
        updateAddress.pincode = employeeDto.address.pincode;
        updateAddress.createdAt= employeeDto.address.createdAt;
      }
      const updateEmployeeStatus = await this.employeeService.updateEmployee(
        Number(req.params.id),
        {
          name: employeeDto.name,
          email: employeeDto.email,
          address: employeeDto.address ? updateAddress : undefined,
        }
      );
      console.log("status of update employee",updateEmployeeStatus,updateEmployeeStatus.affected)
      if (!updateEmployeeStatus.affected) {
        throw new HttpException(400, "No such id");
      }
      return res.status(200).json(updateEmployeeStatus);
    } catch (e) {
      next(e);
    }
  };
  public deleteEmployeeById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const deleteEmployeeStatus =
        await this.employeeService.deleteEmployeeById(Number(req.params.id));
      return res.status(200).json(deleteEmployeeStatus);
    } catch (e) {
      next(e);
    }
  };
}
export default EmployeeController;
