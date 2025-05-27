import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const MPESA_CONSUMER_KEY = Deno.env.get("MPESA_CONSUMER_KEY") || "";
const MPESA_CONSUMER_SECRET = Deno.env.get("MPESA_CONSUMER_SECRET") || "";
const MPESA_PASSKEY = Deno.env.get("MPESA_PASSKEY") || "";
const MPESA_SHORTCODE = Deno.env.get("MPESA_SHORTCODE") || "";
const MPESA_CALLBACK_URL = Deno.env.get("MPESA_CALLBACK_URL") || "";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phoneNumber, amount, orderId } = await req.json();

    // Generate access token
    const auth = btoa(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`);
    const tokenResponse = await fetch(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );
    const { access_token } = await tokenResponse.json();

    // Generate timestamp
    const date = new Date();
    const timestamp =
      date.getFullYear() +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      ("0" + date.getDate()).slice(-2) +
      ("0" + date.getHours()).slice(-2) +
      ("0" + date.getMinutes()).slice(-2) +
      ("0" + date.getSeconds()).slice(-2);

    // Generate password
    const password = btoa(MPESA_SHORTCODE + MPESA_PASSKEY + timestamp);

    // Initiate STK Push
    const stkResponse = await fetch(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify({
          BusinessShortCode: MPESA_SHORTCODE,
          Password: password,
          Timestamp: timestamp,
          TransactionType: "CustomerPayBillOnline",
          Amount: amount,
          PartyA: phoneNumber,
          PartyB: MPESA_SHORTCODE,
          PhoneNumber: phoneNumber,
          CallBackURL: MPESA_CALLBACK_URL,
          AccountReference: orderId,
          TransactionDesc: "Payment for Sasabot subscription",
        }),
      }
    );

    const stkResult = await stkResponse.json();

    return new Response(JSON.stringify(stkResult), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to process payment" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});