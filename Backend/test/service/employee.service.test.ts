import { when } from "jest-when";
import Employee from "../../src/entity/Employee.entity";
import EmployeeRepository from "../../src/repository/employee.repository";
import EmployeeService from "../../src/service/employee.service";
import DepartmentRepository from "../../src/repository/department.repository";
import Department from "../../src/entity/department.entity";

describe("Employee service", () => {
  let employeeRepository: EmployeeRepository;
  let departmentRepository: DepartmentRepository;
  let employeeService: EmployeeService;
  beforeAll(() => {
    const dataSource = {
      getRepository: jest.fn(),
    };
    employeeRepository = new EmployeeRepository(
      dataSource.getRepository(Employee)
    ) as jest.Mocked<EmployeeRepository>;
    departmentRepository = new DepartmentRepository(
      dataSource.getRepository(Department)
    ) as jest.Mocked<DepartmentRepository>;

    employeeService = new EmployeeService(employeeRepository,departmentRepository);
  });

  it.only("should return all employees", async () => {
    const mock = jest.fn(employeeRepository.find).mockResolvedValue([]);
    employeeRepository.find = mock;
    const users = await employeeService.getAllEmployeees();
    expect(users).toEqual([]);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it.only("should return get Employee by id", async () => {
    const mock = jest.fn();
    when(mock)
      .calledWith({ id: 1 })
      .mockResolvedValue({ id: 1, name: "sample" } as Employee);
    employeeRepository.findOneBy = mock;
    const users = await employeeService.getEmployeeById(1);
    expect(users.name).toEqual("sample");
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
