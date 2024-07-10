import Logo from "../../assets/heroimg.jpeg";
import Kvlogo from "../../assets/kv-logo.png";
import Button from "../../components/Button";
import LoginInput from "../../components/LoginInput";
import "./styles.scss";

const Fields = [
  {
    id: "uname",
    inputPlaceholder: "Username",
    labelContent: "Username",
    name: "username",
    type: "text",
  },
  {
    id: "password",
    inputPlaceholder: "Password",
    labelContent: "Password",
    name: "password",
    type: "password",
  },
];
const Login = ({ loggedin, loggedinVal }) => {
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

            {Fields.map((field) => (
              <LoginInput
                key={field.id}
                id={field.id}
                inputPlaceholder={field.inputPlaceholder}
                labelContent={field.labelContent}
                name={field.name}
                type={field.type}
              />
            ))}
            <Button
              buttonContent={"Log in"}
              loggedin={loggedin}
              loggedinVal={loggedinVal}
            />
          </form>
        </div>
      </main>
    </div>
  );
};
export default Login;
