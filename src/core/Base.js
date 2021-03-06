import React from "react";

// Components
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div className="main-div">
      <Menu />
      <div className="container-fluid main-in-base-template">
        <div className="jumbotron bg-dark text-white text-center herosection">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-dark py-1">
        <div className="container-fluid bg-success text-white text-center py-2">
          <h6>If you got any questions, feel free to reach out!</h6>
          <button className="btn btn-warning btn-sm rounded">Contact Us</button>
        </div>
        <div className="container text-center">
          <span className="text-muted">
            An Amazing <span className="text-white">MERN</span> Project
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Base;
