import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <p>page not found</p>
      <Link to={"/"}>Redirect</Link>
    </div>
  );
};
export default NotFound;
