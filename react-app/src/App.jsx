import { useEffect, useState } from "react";
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

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/employee",
      element: <HeaderLayout />,
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
      <RouterProvider router={router} />
    </>
  );
};
export default App;
