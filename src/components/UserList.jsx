import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  if (!users.length) return <p>No more users found.</p>;

  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
