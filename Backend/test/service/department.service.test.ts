import { when } from "jest-when";
import Department from "../../src/entity/department.entity";
import DepartmentRepository from "../../src/repository/department.repository";
import DepartmentService from "../../src/service/department.service";

describe("Department Service", () => {
  let departmentRepository: DepartmentRepository;
  let departmentService: DepartmentService;
  let dummyDepartments: Department[];
  beforeAll(() => {
    const dataSource = {
      getRepository: jest.fn(),
    };
    departmentRepository = new DepartmentRepository(
      dataSource.getRepository(Department)
    ) as jest.Mocked<DepartmentRepository>;

    departmentService = new DepartmentService(departmentRepository);
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
  });
  it.only("return all departments", async () => {
    const mockDepartment = jest
      .fn(departmentRepository.find)
      .mockResolvedValue(dummyDepartments);
    departmentRepository.find = mockDepartment;
    const departments = await departmentService.getAllDepartment();
    expect(departments).toEqual(dummyDepartments);
    expect(mockDepartment).toHaveBeenCalledTimes(1);
  });

  it.only("return department by id", async () => {
    const mockDepartment = jest.fn(departmentRepository.findOneBy);
    when(mockDepartment)
      .calledWith({ id: 1 })
      .mockResolvedValue(dummyDepartments[0]);
    departmentRepository.findOneBy = mockDepartment;
    const department = await departmentService.getDepartmentById(1);
    expect(department).toEqual(dummyDepartments[0]);
    expect(mockDepartment).toHaveBeenCalledTimes(1);
  });

  it.only("create department", async () => {
    const mockSave = jest.fn(departmentRepository.save);
    mockSave.mockResolvedValue(dummyDepartments[0]);
    departmentRepository.save = mockSave;

    const department = await departmentService.createDepartment(
      dummyDepartments[0].name
    );
    expect(department).toEqual(dummyDepartments[0]);
    expect(mockSave).toHaveBeenCalledTimes(1);
  });

  it.only("update department", async () => {
    const mockDepartment = jest.fn(departmentRepository.findOneBy);
    when(mockDepartment)
      .calledWith({ id: 1 })
      .mockResolvedValue(dummyDepartments[0]);
    departmentRepository.findOneBy = mockDepartment;
    const mockSave = jest.fn(departmentRepository.save);
    mockSave.mockResolvedValue(dummyDepartments[0]);
    departmentRepository.save = mockSave;

    const department = await departmentService.updateDepartment(
      1,
      dummyDepartments[1].name
    );
    let newUpdatedDepartment = dummyDepartments[0];
    newUpdatedDepartment.name = dummyDepartments[1].name;
    expect(department).toEqual(newUpdatedDepartment);
    expect(mockDepartment).toHaveBeenCalledTimes(1);
    expect(mockSave).toHaveBeenCalledTimes(1);
  });

  it.only("delete department", async () => {
    const mockDepartment = jest.fn(departmentRepository.findOneBy);
    when(mockDepartment)
      .calledWith({ id: 1 })
      .mockResolvedValue(dummyDepartments[0]);
    departmentRepository.findOneBy = mockDepartment;

    const mockDelete = jest.fn(departmentRepository.delete);
    when(mockDelete).calledWith(1).mockResolvedValue(dummyDepartments[0]);
    departmentRepository.delete = mockDelete;

    const department = await departmentService.deleteDepartment(1);
    expect(department).toEqual(dummyDepartments[0]);
    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockDepartment).toHaveBeenCalledTimes(1);
  });
});
