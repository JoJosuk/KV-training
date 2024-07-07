import DepartmentService from "../service/department.service";
import express from "express";
import { RequestWithUser } from "../utils/RequestWithUser";
import { plainToInstance } from "class-transformer";
import { CreateEmployeeDto } from "../dto/employee.dto";
import { validate } from "class-validator";
import HttpException from "../exceptions/http.exceptions";
import {
  CreateDepartmentDto,
  UpdateDepartmentDto,
} from "../dto/department.dto";
import { Permission } from "../utils/permissions.roles";
import { Role } from "../utils/role.enum";
import { authMiddleware } from "../middleware/auth.middleware";

export default class DepartmentController {
  public router: express.Router;
  constructor(private departmentService: DepartmentService) {
    this.router = express.Router();
    this.router.get("/",authMiddleware ,this.getAllDepartment);
    this.router.post("/",authMiddleware, this.createDepartment);
    this.router.get("/:id", authMiddleware,this.getDepartmentbyId);
    this.router.put("/:id", authMiddleware,this.updateDepartment);
    this.router.delete("/:id",authMiddleware, this.deleteDepartment);
  }

  getAllDepartment = async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      Permission.employeePermission(req, [Role.UX]);

      const response = await this.departmentService.getAllDepartment();
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  };
  getDepartmentbyId = async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      Permission.employeePermission(req, [Role.UX]);

      const id = parseInt(req.params.id);
      const response = await this.departmentService.getDepartmentById(id);
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  };
  createDepartment = async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      Permission.employeePermission(req, [Role.UX]);

      const createDepartmentDto = plainToInstance(
        CreateDepartmentDto,
        req.body
      );
      const errors = await validate(createDepartmentDto);
      if (errors.length) {
        throw new HttpException(400, "Department error", errors);
      }
      const response = await this.departmentService.createDepartment(
        createDepartmentDto.name
      );
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  };
  updateDepartment = async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      Permission.employeePermission(req, [Role.UX]);

      let id: number;
      try {
        id = Number(req.params.id);
      } catch (e) {
        throw new HttpException(400, "Not valid id");
      }
      const updateDepartmentDto = await plainToInstance(
        UpdateDepartmentDto,
        req.body
      );
      const errors = await validate(updateDepartmentDto);
      if (errors.length) {
        throw new HttpException(400, "Department error", errors);
      }
      const response = await this.departmentService.updateDepartment(
        id,
        updateDepartmentDto.name
      );
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  };
  deleteDepartment = async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      Permission.employeePermission(req, [Role.UX]);

      let id: number;
      try {
        id = Number(req.params.id);
      } catch (e) {
        throw new HttpException(400, "Not valid id");
      }
      const response = await this.departmentService.deleteDepartment(id);
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  };
}
