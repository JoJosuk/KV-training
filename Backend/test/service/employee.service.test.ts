import { when } from "jest-when";
import Employee from "../../src/entity/employee.entity";
import EmployeeRepository from "../../src/repository/employee.repository";
import EmployeeService from "../../src/service/employee.service";
import DepartmentRepository from "../../src/repository/department.repository";
import Department from "../../src/entity/department.entity";
import Address from "../../src/entity/address.entity";
import { Role } from "../../src/utils/role.enum";

describe("Employee service", () => {
  let employeeRepository: EmployeeRepository;
  let departmentRepository: DepartmentRepository;
  let employeeService: EmployeeService;
  let dummyEmployees: Employee[];
  let dummyAddresses: Address[];
  let dummyDepartments: Department[];
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

    employeeService = new EmployeeService(
      employeeRepository,
      departmentRepository
    );
    dummyAddresses = [
      {
        id: 1,
        line1: "line1",
        pincode: "123",
        employee: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        line1: "line2",
        pincode: "456",
        employee: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ];
    dummyDepartments = [
      {
        id: 1,
        name: "HR",
        employee: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        name: "Engineering",
        employee: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ];
    dummyEmployees = [
      {
        id: 1,
        name: "test1",
        email: "test1@gmail.com",
        role: Role.HR,
        password: "123",
        address: dummyAddresses[0],
        department: dummyDepartments[0],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        name: "test2",
        email: "tes21@gmail.com",
        role: Role.DEVELOPER,
        password: "1234",
        address: dummyAddresses[1],
        department: dummyDepartments[1],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ];
  });

  it.only("should return all employees", async () => {
    const mock = jest
      .fn(employeeRepository.find)
      .mockResolvedValue(dummyEmployees);
    employeeRepository.find = mock;
    const users = await employeeService.getAllEmployeees();
    expect(users).toEqual(dummyEmployees);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it.only("should return get Employee by id", async () => {
    const mock = jest.fn();
    when(mock)
      .calledWith({ id: 1 })
      .mockResolvedValue(dummyEmployees[0] as Employee);
    employeeRepository.findOneBy = mock;
    const users = await employeeService.getEmployeeById(1);
    expect(users.name).toEqual("test1");
    expect(users.email).toEqual("test1@gmail.com");
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it.only("should return create employee", async () => {
    const mockSave = jest.fn(employeeRepository.save);
    mockSave.mockResolvedValue(dummyEmployees[0]);
    employeeRepository.save = mockSave;
    const mockDepartment = jest.fn(departmentRepository.findOneBy);
    when;
    when(mockSave).calledWith(dummyEmployees[0]);
  });
});
