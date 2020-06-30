import React from "react";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div>
      <h3>Welcome to the react router tutorial</h3>
      <small> Main page</small>
      <Link to="/users">Show list of users</Link>
    </div>
  );
};

export default MainPage;
