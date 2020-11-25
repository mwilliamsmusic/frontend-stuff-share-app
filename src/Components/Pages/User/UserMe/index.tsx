import React from "react";

function UserMe() {
  const user = localStorage.getItem("user");
  return (
    <div>
      <h3>ME</h3>
    </div>
  );
}

export default UserMe;
