"use client";
import React, { useState } from "react";

interface WebsiteNotificationsState {
  newFollower: boolean;
  postLike: boolean;
  someonePosted: boolean;
  postAddedToCollection: boolean;
  orderDelivery: boolean;
}

const NotificationSettings: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true);
  const [weeklyNotifications, setWeeklyNotifications] = useState<boolean>(true);
  const [orderUpdates, setOrderUpdates] = useState<boolean>(true);
  const [textMessages, setTextMessages] = useState<boolean>(true);
  const [callBeforeCheckout, setCallBeforeCheckout] = useState<boolean>(true);
  const [websiteNotifications, setWebsiteNotifications] =
    useState<WebsiteNotificationsState>({
      newFollower: true,
      postLike: true,
      someonePosted: true,
      postAddedToCollection: true,
      orderDelivery: true,
    });

  return (
    <div className="max-w-full mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Notification Settings
      </h2>

      {/* Weekly Notifications */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <label htmlFor="weeklyNotifications" className="text-lg">
            Weekly Notifications
          </label>
          <p className="text-gray-500 text-sm">
            Various versions have evolved over the years.
          </p>
        </div>
        <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            id="weeklyNotifications"
            checked={weeklyNotifications}
            onChange={() => setWeeklyNotifications(!weeklyNotifications)}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="weeklyNotifications"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
      </div>

      {/* Order Updates */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Order Updates</h3>
        {/* Receive Text Messages */}
        <div className="flex items-center justify-between">
          <div>
            <label htmlFor="orderUpdates" className="text-md">
              Receive Text Messages
            </label>
            <p className="text-gray-500 text-sm">
              Keep up to date with order updates via text.
            </p>
          </div>
          <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              id="orderUpdates"
              checked={orderUpdates}
              onChange={() => setOrderUpdates(!orderUpdates)}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="orderUpdates"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>

        {/* Call Before Checkout */}
        <div className="ml-6">
          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="callBeforeCheckout" className="text-md">
                Call Before Checkout
              </label>
              <p className="text-gray-500 text-sm">
                We&apos;ll only call if there are pending changes.
              </p>
            </div>
            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                id="callBeforeCheckout"
                checked={callBeforeCheckout}
                onChange={() => setCallBeforeCheckout(!callBeforeCheckout)}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="callBeforeCheckout"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </div>
        </div>
      </div>

      {/* Website Notification */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Website Notification</h3>
        {/* Iterate over websiteNotifications */}
        {Object.entries(websiteNotifications).map(([key, value]) => (
          <div key={key} className="mb-2 flex items-center justify-between">
            <div>
              <label htmlFor={key} className="text-md">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </label>
              <p className="text-gray-500 text-sm">
                Stay informed about {key.toLowerCase()}.
              </p>
            </div>
            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                id={key}
                checked={value}
                onChange={() =>
                  setWebsiteNotifications((prev) => ({
                    ...prev,
                    [key]: !prev[key as keyof WebsiteNotificationsState],
                  }))
                }
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor={key}
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
