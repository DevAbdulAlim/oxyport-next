'use client'
import React, { useState } from 'react';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

const initialUserProfile: UserProfile = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  address: '123 Main St, Cityville',
};

const UserSettingsPage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>(initialUserProfile);
  const [password, setPassword] = useState<string>('');
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailNotificationsChange = () => {
    setEmailNotifications((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement logic to update user settings on the server
    console.log('User settings updated:', { userProfile, password, emailNotifications });
  };

  return (
    <div className="min-h-screen flex  justify-center">
      <div className="w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">User Settings</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-md mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userProfile.firstName}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-md mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userProfile.lastName}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-md mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userProfile.email}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-md mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={userProfile.address}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-md mb-2">
              Change Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="emailNotifications"
              checked={emailNotifications}
              onChange={handleEmailNotificationsChange}
              className="mr-2"
            />
            <label htmlFor="emailNotifications" className="text-md">
              Receive Email Notifications
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSettingsPage;
