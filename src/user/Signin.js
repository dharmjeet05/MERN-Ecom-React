import React, { useState } from "react";
import { Link } from "react-router-dom";

// Base File
import Base from "../core/Base";

const Signin = () => {
  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
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
    <Base title="SignIn Page" description="A page for user to sign in!">
      {signInForm()}
    </Base>
  );
};

export default Signin;
