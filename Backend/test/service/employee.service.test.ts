// import { when } from "jest-when";
// import Employee from "../../src/entity/employee.entity";
// import EmployeeRepository from "../../src/repository/employee.repository";
// import EmployeeService from "../../src/service/employee.service";
// import DepartmentRepository from "../../src/repository/department.repository";
// import Department from "../../src/entity/department.entity";
// import Address from "../../src/entity/address.entity";
// import { Role } from "../../src/utils/role.enum";
// import DepartmentService from "../../src/service/department.service";

// describe("Employee service", () => {
//   let employeeRepository: EmployeeRepository;
//   let departmentRepository: DepartmentRepository;
//   let employeeService: EmployeeService;
//   let departmentService: DepartmentService;
//   let dummyEmployees: Employee[];
//   let dummyAddresses: Address[];
//   let dummyDepartments: Department[];
//   beforeAll(() => {
//     const dataSource = {
//       getRepository: jest.fn(),
//     };
//     employeeRepository = new EmployeeRepository(
//       dataSource.getRepository(Employee)
//     ) as jest.Mocked<EmployeeRepository>;
//     departmentRepository = new DepartmentRepository(
//       dataSource.getRepository(Department)
//     ) as jest.Mocked<DepartmentRepository>;

//     departmentService = new DepartmentService(departmentRepository);
//     employeeService = new EmployeeService(
//       employeeRepository,
//       departmentService
//     );
//     dummyAddresses = [
//       {
//         id: 1,
//         line1: "line1",
//         pincode: "123",
//         employee: null,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//       {
//         id: 2,
//         line1: "line2",
//         pincode: "456",
//         employee: null,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//     ];
//     dummyDepartments = [
//       {
//         id: 1,
//         name: "HR",
//         employee: [],
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//       {
//         id: 2,
//         name: "Engineering",
//         employee: [],
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//     ];
//     dummyEmployees = [
//       {
//         id: 1,
//         name: "test1",
//         email: "test1@gmail.com",
//         role: Role.HR,
//         password: "123",
//         address: dummyAddresses[0],
//         department: dummyDepartments[0],
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//       {
//         id: 2,
//         name: "test2",
//         email: "tes21@gmail.com",
//         role: Role.DEVELOPER,
//         password: "1234",
//         address: dummyAddresses[1],
//         department: dummyDepartments[1],
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//     ];
//   });

//   it.only("should return all employees", async () => {
//     const mock = jest
//       .fn(employeeRepository.find)
//       .mockResolvedValue(dummyEmployees);
//     employeeRepository.find = mock;
//     const users = await employeeService.getAllEmployeees();
//     expect(users).toEqual(dummyEmployees);
//     expect(mock).toHaveBeenCalledTimes(1);
//   });

//   it.only("should return get Employee by id", async () => {
//     const mock = jest.fn();
//     when(mock)
//       .calledWith({ id: 1 })
//       .mockResolvedValue(dummyEmployees[0] as Employee);
//     employeeRepository.findOneBy = mock;
//     const users = await employeeService.getEmployeeById(1);
//     expect(users.name).toEqual("test1");
//     expect(users.email).toEqual("test1@gmail.com");
//     expect(mock).toHaveBeenCalledTimes(1);
//   });

//   it.only("should return create employee", async () => {
//     const mockSave = jest.fn(employeeRepository.save);
//     mockSave.mockResolvedValue(dummyEmployees[0]);
//     employeeRepository.save = mockSave;

//     const mockDepartment = jest.fn(departmentService.getDepartmentByName);
//     when(mockDepartment)
//       .calledWith("HR")
//       .mockResolvedValue(dummyDepartments[0]);
//     when(mockDepartment)
//       .calledWith("Engineering")
//       .mockResolvedValue(dummyDepartments[1]);
//     departmentService.getDepartmentByName = mockDepartment;
//     const user = await employeeService.createEmployee(
//       dummyEmployees[0].email,
//       dummyEmployees[0].name,
//       dummyAddresses[0],
//       dummyEmployees[0].password,
//       dummyEmployees[0].role,
//       dummyDepartments[0]
//     );
//     // const userPromise = employeeService.createEmployee(
//     //   dummyEmployees[0].email,
//     //   dummyEmployees[0].name,
//     //   dummyAddresses[0],
//     //   dummyEmployees[0].password,
//     //   dummyEmployees[0].role,
//     //   dummyDepartments[0]
//     // );

//     // // Await the returned Promise from createEmployee
//     // const user = await userPromise;

//     expect(user).toEqual(dummyEmployees[0]);
//     expect(mockSave).toHaveBeenCalledTimes(1);
//     expect(mockDepartment).toHaveBeenCalledTimes(1);
//   });

//   it.only("should return update employee", async () => {
//     const mockSave = jest.fn();
//     when(mockSave)
//       .calledWith(dummyEmployees[0])
//       .mockResolvedValue(dummyEmployees[0]);
//     employeeRepository.save = mockSave;

//     const mockFetchById = jest.fn();
//     when(mockFetchById).calledWith(1).mockResolvedValue(dummyEmployees[0]);
//     employeeService.getEmployeeById = mockFetchById;

//     const mockDepartment = jest.fn(departmentService.getDepartmentByName);
//     when(mockDepartment)
//       .calledWith("HR")
//       .mockResolvedValue(dummyDepartments[0]);
//     departmentService.getDepartmentByName = mockDepartment;

//     const userUpdate = await employeeService.updateEmployee(dummyEmployees[0]);
//     expect(userUpdate).toEqual(dummyEmployees[0]);
//     expect(mockSave).toHaveBeenCalledTimes(1);
//     expect(mockDepartment).toHaveBeenCalledTimes(1);
//     expect(mockFetchById).toHaveBeenCalledTimes(1);
//   });

//   it.only("should return delete employee", async () => {
//     const mockFetchById = jest.fn();
//     when(mockFetchById).calledWith(1).mockResolvedValue(dummyEmployees[0]);
//     employeeService.getEmployeeById = mockFetchById;

//     const mockDelete = jest.fn();
//     when(mockDelete).calledWith(1).mockResolvedValue(dummyEmployees[0]);
//     employeeRepository.delete = mockDelete;

//     expect(await employeeService.deleteEmployeeById(1)).toEqual(
//       dummyEmployees[0]
//     );
//     expect(mockFetchById).toHaveBeenCalledTimes(1);
//     expect(mockDelete).toHaveBeenCalledTimes(1);
//   });
// });
