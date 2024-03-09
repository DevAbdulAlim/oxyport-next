import React from "react";

const Settings: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Account Settings</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/user/edit-profile"
                className="text-blue-500 hover:underline"
              >
                Edit Profile
              </a>
            </li>
            <li>
              <a
                href="/user/security"
                className="text-blue-500 hover:underline"
              >
                Security
              </a>
            </li>
            <li>
              <a
                href="/user/social-profiles"
                className="text-blue-500 hover:underline"
              >
                Social Profiles
              </a>
            </li>
            <li>
              <a
                href="/user/notifications"
                className="text-blue-500 hover:underline"
              >
                Notifications
              </a>
            </li>
            <li>
              <a
                href="/user/profile-privacy"
                className="text-blue-500 hover:underline"
              >
                Profile Privacy
              </a>
            </li>
            <li>
              <a
                href="/user/delete-profile"
                className="text-blue-500 hover:underline"
              >
                Delete Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Subscription Settings</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/user/subscriptions"
                className="text-blue-500 hover:underline"
              >
                My Subscriptions
              </a>
            </li>
            <li>
              <a href="/user/billing" className="text-blue-500 hover:underline">
                Billing Info
              </a>
            </li>
            <li>
              <a href="/user/payment" className="text-blue-500 hover:underline">
                Payment
              </a>
            </li>
            <li>
              <a href="/user/invoice" className="text-blue-500 hover:underline">
                Invoice
              </a>
            </li>
            <li>
              <a href="/user/quiz" className="text-blue-500 hover:underline">
                My Quiz Attempt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
