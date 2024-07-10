import { useState } from "react";
import Login from "./Pages/LoginEmployee/Login";
import CreateEmployee from "./Pages/CreateEmployee/CreateEmployee";

const App = () => {
  const [loggedin, setLoggedin] = useState(false);
  const handleLogin = () => {
    setLoggedin(true);
  };
  return (
    <>
      {loggedin ? (
        <CreateEmployee />
      ) : (
        <Login loggedin={handleLogin} loggedinVal={loggedin} />
      )}
    </>
  );
};
export default App;
