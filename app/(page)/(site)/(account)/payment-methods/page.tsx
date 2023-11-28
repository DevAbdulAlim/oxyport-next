'use client'
import React, { useState, useEffect } from 'react';

interface PaymentMethod {
  id: string;
  cardNumber: string;
  expiryDate: string;
}

interface UserProfileProps {
  userId: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  useEffect(() => {
    // Simulating fetching saved payment methods from a server
    // In a real application, you would make an API request here
    const fetchData = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch(`/api/user/${userId}/payment-methods`);
        const data = await response.json();

        setPaymentMethods(data);
      } catch (error) {
        console.error('Error fetching payment methods:', error);
      }
    };

    fetchData();
  }, [userId]);

  const handleMethodChange = (methodId: string) => {
    setSelectedMethod(methodId);
  };

  return (
    <div className="max-w-full mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">Saved Payment Methods</h2>

      {paymentMethods.length === 0 ? (
        <p className="text-gray-500 text-center">No saved payment methods found.</p>
      ) : (
        <div>
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center mb-4">
              <input
                type="radio"
                id={method.id}
                name="savedPaymentMethod"
                value={method.id}
                checked={selectedMethod === method.id}
                onChange={() => handleMethodChange(method.id)}
                className="mr-2"
              />
              <label htmlFor={method.id} className="text-lg">
                **** **** **** {method.cardNumber.slice(-4)}
              </label>
              <span className="ml-2 text-gray-500">{`Expiry: ${method.expiryDate}`}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
