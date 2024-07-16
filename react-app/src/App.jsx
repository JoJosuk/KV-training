import { useEffect, useReducer, useState } from "react";
import Login from "./Pages/LoginEmployee/Login";
import CreateEmployee from "./Pages/CreateEmployee/CreateEmployee";
import NotFound from "./Pages/ErrorPage/NotFound";
import Counter from "./components/Counter";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import HeaderLayout from "./Layout/HeaderLayout";
import EmployeeList from "./Pages/EmployeeList/EmployeeList";
import EditEmployee from "./Pages/EditEmployee/EditEmployee";
import EmployeeDetails from "./Pages/EmployeeDetails/EmployeeDetails";
import tempEmployeeList from "../utils/dummyData";
import reducer, { actionTypes } from "./store/reducer";
import store from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    employee: tempEmployeeList,
    status: "Status",
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/employee",
      element: <HeaderLayout state={state} dispatch={dispatch} />,
      children: [
        {
          index: true,
          element: <EmployeeList />,
          errorElement: <NotFound />,
        },
        {
          path: "create",
          element: <CreateEmployee />,
          errorElement: <NotFound />,
        },
        {
          path: "edit/:id",
          element: <EditEmployee />,
        },
        {
          path: ":id",
          element: <EmployeeDetails />,
          errorElement: <NotFound />,
        },
      ],
    },
    {
      path: "/counter",
      element: <Counter />,
      errorElement: <NotFound />,
    },
  ]);
  return (
    <>
      {/* {loggedin ? (
        <CreateEmployee />
      ) : (
        <Login loggedin={handleLogin} loggedinVal={loggedin} />
      )}
      <Counter id="1">
        hello
        <h1>hey</h1>
      </Counter> */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
};
export default App;
