import React from "react";
import { useState } from "react";

const AddUserForm = ({ onAddUser }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;
    const newUser = {
      id: Date.now(),
      name,
    };
    onAddUser(newUser);
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new User"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUserForm;
