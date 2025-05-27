import { useState } from 'react';

interface MpesaPaymentProps {
  phoneNumber: string;
  amount: number;
  orderId: string;
}

export const useMpesa = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initiatePayment = async ({ phoneNumber, amount, orderId }: MpesaPaymentProps) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/mpesa`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber,
          amount,
          orderId
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to initiate payment');
      }

      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process payment');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    initiatePayment,
    loading,
    error
  };
};