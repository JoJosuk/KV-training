import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeReducer";
import { employeeBaseApi } from "../api/employeeApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { departmentBaseApi } from "../api/departmentApi";
const store = configureStore({
  reducer: {
    employee: employeeReducer,
    [employeeBaseApi.reducerPath]: employeeBaseApi.reducer,
    [departmentBaseApi.reducerPath]: departmentBaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      employeeBaseApi.middleware,
      departmentBaseApi.middleware
    ),
});
setupListeners(store.dispatch);
export default store;
