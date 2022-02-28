import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Welcome to The Store</h1>
        <p className="lead">
          Index - A Specially Selected Collection of Products For You
        </p>
        <hr className="my-4" />
        <Link
          to="/survey"
          className="btn btn-lg custom-button"
          role="button"
        >
          Take our Survey
        </Link>
            
        <Link
          to="/Products"
          className="btn btn-lg custom-button"
          role="button"
        >
          View our Products
        </Link>
      </div>

    </div>
  </div>
);