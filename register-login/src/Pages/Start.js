import "./Start.css";
import { NavLink } from "react-router-dom";

const Start = () => {
  return (
    <div className="container">
      <div className="start">
        <div className="App">
          <div className="linkDiv">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
