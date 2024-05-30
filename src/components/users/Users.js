import React from "react";
import UserItem from "./UserItem";
export const Users = (props) => {
  const { users } = props;
  if (!users || users.length === 0) {
    return <div>No users found.</div>;
  }
  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

