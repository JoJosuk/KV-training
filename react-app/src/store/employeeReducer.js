import { createReducer, createAction } from "@reduxjs/toolkit";
import tempEmployeeList from "../../utils/dummyData";

const addEmployee = createAction("ADD_EMPLOYEE");
const editEmployee = createAction("EDIT_EMPLOYEE");
const deleteEmployee = createAction("DELETE_EMPLOYEE");
const changeStatus = createAction("CHANGE_STATUS");

const employeeReducer = createReducer(
  { employees: tempEmployeeList, status: "Status" },
  (builder) => {
    builder.addCase(addEmployee, (state, action) => {
      state.employees.push(action.payload);
    });
    builder.addCase(editEmployee, (state, action) => {
      state.employees = state.employees.map((e) => {
        if (e.id === action.payload.id) return action.payload;
        else return e;
      });
    });
    builder.addCase(deleteEmployee, (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    });
    builder.addCase(changeStatus, (state, action) => {
      state.status = action.payload;
    });
  }
);
export {
  employeeReducer as default,
  addEmployee,
  editEmployee,
  changeStatus,
  deleteEmployee,
};
