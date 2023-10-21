"use client";

import axios from "axios";
import { read } from "fs";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "users";

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
