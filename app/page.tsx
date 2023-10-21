"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "/api/users";

    axios
      .get<User[]>(apiUrl)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
        // You can set an error state here for better error handling
      });
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
