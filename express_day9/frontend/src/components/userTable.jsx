import { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.userData || []);
      } catch (error) {
        setStatus("Unable to load users.");
      }
    };

    loadUsers();
  }, []);

  if (status) {
    return <p>{status}</p>;
  }

  if (!users.length) {
    return <p>No users found yet.</p>;
  }

  return (
    <div className="user-table">
      {users.map((user) => (
        <div key={user._id || user.email} className="user-item">
          <strong>{user.name}</strong>
          <div>{user.email}</div>
          <div>{user.city}</div>
          <div>{user.mobile}</div>
        </div>
      ))}
    </div>
  );
};

export default UserTable;
