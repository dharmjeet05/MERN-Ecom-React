import React, { useState } from "react";
import { Link } from "react-router-dom";

// Base File
import Base from "../core/Base";

const Signup = () => {
  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <lable className="text-light">Name</lable>
              <input className="form-control" type="text" />
            </div>

            <div className="form-group">
              <lable className="text-light">Email</lable>
              <input className="form-control" type="email" />
            </div>

            <div className="form-group">
              <lable className="text-light">Password</lable>
              <input className="form-control" type="password" />
            </div>

            <button className="btn btn-success btn-block rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="SignUp Page" description="A page for user to sign up!">
      {signUpForm()}
    </Base>
  );
};

export default Signup;
