import React from "react";
import "../styles.css";

// Api
import { API } from "../backend";

const Home = () => {
  console.log("API IS", API);
  return (
    <div>
      <h1 className="text-white">Home Page Hello Front End {API}</h1>
    </div>
  );
};

export default Home;
