import { Link } from "react-router-dom";

const NotFound = (message = "") => {
  return (
    <div className="notfound">
      {message !== "" ? <p>No Such Id</p> : <p>page not found</p>}
      <Link to={"/"}>Redirect</Link>
    </div>
  );
};
export default NotFound;
