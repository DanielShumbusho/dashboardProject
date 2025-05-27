import React from "react";
import { Link } from "react-router-dom";
import UserList from "../components/UserList";
import AddUserForm from "../components/AddUserForm";
import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    if (savedUsers && savedUsers.length > 0) {
      setUsers(savedUsers);
    } else {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUsers(res.data);
          localStorage.setItem("users", JSON.stringify(res.data)); // Save initial fetch
        })
        .catch(() => setError("Failed to fetch users"));
    }
  }, []);

  const handleAddUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
  return (
    <div className="grid grid-cols-20 grid-rows-20 h-[100vh]">
      <main className="row-span-19 col-span-20 bg-blue-50 p-6 overflow-auto">
        <h1>Users</h1>
        {error && <p>{error}</p>}
        <AddUserForm onAddUser={handleAddUser} />
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
        <UserList users={users} />
      </main>
    </div>
  );
}

export default Users;
