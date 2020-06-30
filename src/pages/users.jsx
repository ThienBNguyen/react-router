import React from "react";

const UsersPage = () => {
  return (
    <div>
      <ul>
        {["thien", "thai", "thiensdf"].map((user, idx) => {
          return <li key={idx}>{user}</li>;
        })}
      </ul>
    </div>
  );
};

export default UsersPage;
