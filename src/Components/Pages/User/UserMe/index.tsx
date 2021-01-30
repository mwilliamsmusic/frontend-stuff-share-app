import React from "react";

function UserMe() {
  const user = localStorage.getItem("user");
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
}

export default UserMe;
