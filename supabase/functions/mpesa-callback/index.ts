import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { Body } = await req.json();

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Store payment result in database
    const { data, error } = await supabaseClient
      .from("mpesa_payments")
      .insert([
        {
          merchant_request_id: Body.stkCallback.MerchantRequestID,
          checkout_request_id: Body.stkCallback.CheckoutRequestID,
          result_code: Body.stkCallback.ResultCode,
          result_desc: Body.stkCallback.ResultDesc,
          amount: Body.stkCallback.CallbackMetadata?.Item.find(
            (item: any) => item.Name === "Amount"
          )?.Value,
          mpesa_receipt_number: Body.stkCallback.CallbackMetadata?.Item.find(
            (item: any) => item.Name === "MpesaReceiptNumber"
          )?.Value,
          transaction_date: Body.stkCallback.CallbackMetadata?.Item.find(
            (item: any) => item.Name === "TransactionDate"
          )?.Value,
          phone_number: Body.stkCallback.CallbackMetadata?.Item.find(
            (item: any) => item.Name === "PhoneNumber"
          )?.Value,
        },
      ]);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to process callback" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});