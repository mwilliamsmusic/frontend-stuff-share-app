import React from "react";

function UserCollect() {
  const user = localStorage.getItem("user");
  return (
    <div>
      <h3>My Collections</h3>
    </div>
  );
}

export default UserCollect;
