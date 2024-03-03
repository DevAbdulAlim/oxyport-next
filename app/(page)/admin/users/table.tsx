import React from "react";
import Link from "@/components/ui/link";
import DeleteForm from "./deleteForm";
import { FaEdit } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";
import { User } from "@/lib/prismaTypes";

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Active</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) &&
            users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">{user.active ? "Yes" : "No"}</td>
                <td className="flex space-x-4 px-4 py-2">
                  <Link variant="success" to={`/admin/users/${user.id}/show`}>
                    <BiSolidShow />
                  </Link>
                  <DeleteForm id={user.id} name={user.name} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
