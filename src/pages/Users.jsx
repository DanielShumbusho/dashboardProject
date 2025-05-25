import React from "react";
import { Link } from "react-router-dom";
import UserList from "../components/UserList";
import AddUserForm from "../components/AddUserForm";
import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const handleAddUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };
  return (
    <>
      <h1>Users</h1>
      <AddUserForm onAddUser={handleAddUser} />
      <UserList users={users} />
    </>
  );
}

export default Users;
