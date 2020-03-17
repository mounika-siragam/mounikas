import React, { Component } from "react";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <div>
      <h2>You have been logged out successfully!</h2>
      <p className="small">
        click <Link to="/login">here</Link>
      </p>
    </div>
  );
};

export default Logout;
