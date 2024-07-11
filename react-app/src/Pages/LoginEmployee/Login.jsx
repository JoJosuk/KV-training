import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/heroimg.jpeg";
import Kvlogo from "../../assets/kv-logo.png";
import Button from "../../components/Button";
import LoginInput from "../../components/LoginInput";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  const [loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const loginRef = useRef(null);
  const handleUsername = (e) => {
    if (e.target.value.length < 10) {
      setErrorUsername(false);
      setUsername(e.target.value);
    } else {
      setErrorUsername(true);
    }
  };
  const handlePassword = (e) => {
    // if (e.target.value.length < 10) {
    setPassword(e.target.value);
    // }
  };
  const handleLogin = () => {
    localStorage.setItem("token", true);
    navigate("/employee/");
  };

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.focus();
    }
    const token = localStorage.getItem("token");
    if (token && token == "true") {
      navigate("employee");
    }
  }, []);

  // useEffect(() => {
  //   console.log("username : ", username, "Password :", password);
  //   if (username.length > 10 || password > 10) {
  //     alert("Out of charecters stupid");
  //   }
  // }, [username, password]);
  const Fields = [
    {
      id: "uname",
      inputPlaceholder: "Username",
      labelContent: "Username",
      name: "username",
      type: "text",
      value: username,
      error: errorUsername,
      onValueChange: handleUsername,
    },
    {
      id: "password",
      inputPlaceholder: "Password",
      labelContent: "Password",
      name: "password",
      type: "password",
      value: password,
      error: errorPassword,
      onValueChange: handlePassword,
    },
  ];
  return (
    <div className="stylechangerlogin">
      {" "}
      <main>
        <div className="hero">
          <div className="wrapper-hero">
            <img src={Logo} alt="Login Image" className="login-image" />
          </div>
        </div>
        <div className="login">
          <form action="/" method="post">
            <img src={Kvlogo} alt="Logo" className="logo" />

            {Fields.map((field, index) => (
              <LoginInput
                {...(index === 0 ? { ref: loginRef } : null)}
                key={field.id}
                id={field.id}
                inputPlaceholder={field.inputPlaceholder}
                labelContent={field.labelContent}
                name={field.name}
                type={field.type}
                value={field.value}
                onValueChange={field.onValueChange}
                error={field.error}
              />
            ))}
            <Button buttonContent={"Log in"} loggedin={handleLogin} />
          </form>
        </div>
      </main>
    </div>
  );
};
export default Login;
