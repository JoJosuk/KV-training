import { useEffect, useState } from "react";
import Login from "./Pages/LoginEmployee/Login";
import CreateEmployee from "./Pages/CreateEmployee/CreateEmployee";
import Counter from "./components/Counter";

const App = () => {
  const [loggedin, setLoggedin] = useState(false);
  const handleLogin = () => {
    setLoggedin(true);
  };

  return (
    <>
      {/* {loggedin ? (
        <CreateEmployee />
      ) : (
        <Login loggedin={handleLogin} loggedinVal={loggedin} />
      )} */}
      <Counter id="1">
        hello
        <h1>hey</h1>
      </Counter>
    </>
  );
};
export default App;
