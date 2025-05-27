import React, { useState } from 'react';
import { useMpesa } from '../../hooks/useMpesa';
import Button from './Button';

interface MpesaPaymentButtonProps {
  amount: number;
  orderId: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const MpesaPaymentButton: React.FC<MpesaPaymentButtonProps> = ({
  amount,
  orderId,
  onSuccess,
  onError
}) => {
  const { initiatePayment, loading } = useMpesa();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await initiatePayment({
        phoneNumber,
        amount,
        orderId
      });
      
      onSuccess?.();
      setShowForm(false);
    } catch (error) {
      onError?.(error instanceof Error ? error.message : 'Payment failed');
    }
  };

  if (!showForm) {
    return (
      <Button 
        variant="primary"
        onClick={() => setShowForm(true)}
      >
        Pay with M-PESA
      </Button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
          M-PESA Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="254700000000"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>
      
      <div className="flex gap-2">
        <Button
          type="submit"
          variant="primary"
          disabled={loading}
          fullWidth
        >
          {loading ? 'Processing...' : `Pay KES ${amount}`}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default MpesaPaymentButton;