import React from "react";
import "../styles.css";

// Api
import { API } from "../backend";

// Base
import Base from "./Base";

const Home = () => {
  console.log("API IS", API);
  return (
    <Base title="Home Page" description="Welcome to the Tshirt Store">
      <div className="row">
        <div className="col-4 text-center">
          <button className="btn btn-success rounded">TEST</button>
        </div>
        <div className="col-4 text-center">
          <button className="btn btn-success rounded">TEST</button>
        </div>
        <div className="col-4 text-center">
          <button className="btn btn-success rounded">TEST</button>
        </div>
      </div>
    </Base>
  );
};

export default Home;
