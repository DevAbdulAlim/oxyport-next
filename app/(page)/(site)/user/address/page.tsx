'use client'
import React, { useState } from 'react';

interface Address {
  id: number;
  fullName: string;
  streetAddress: string;
  city: string;
  zipCode: string;
}

const initialAddresses: Address[] = [
  {
    id: 1,
    fullName: 'John Doe',
    streetAddress: '123 Main St',
    city: 'Cityville',
    zipCode: '12345',
  },
  {
    id: 2,
    fullName: 'Jane Smith',
    streetAddress: '456 Oak Ave',
    city: 'Townsville',
    zipCode: '67890',
  },
];

const SavedAddressesPage: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);

  const handleDeleteAddress = (id: number) => {
    setAddresses((prevAddresses) => prevAddresses.filter((address) => address.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Saved Addresses</h2>

        {addresses.length === 0 ? (
          <p className="text-gray-500 text-center">No saved addresses found.</p>
        ) : (
          <ul className="space-y-4">
            {addresses.map((address) => (
              <li key={address.id} className="border p-4 rounded-md flex justify-between items-center">
                <div>
                  <p className="font-semibold">{address.fullName}</p>
                  <p>{`${address.streetAddress}, ${address.city}, ${address.zipCode}`}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteAddress(address.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SavedAddressesPage;
