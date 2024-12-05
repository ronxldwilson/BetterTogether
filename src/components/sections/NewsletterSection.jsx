"use client";

import { useState } from "react";
import { supabase } from "@utils/supabase";

const NewsletterSection = ({ passText, defaultTitle = true }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  const handleSubscribe = async () => {
    if (!email) {
      setStatus("Please enter an email address.");
      setStatusType("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address.");
      setStatusType("error");
      return;
    }

    try {
      // Check if email already exists
      const { data: existingEmail, error: fetchError } = await supabase
        .from("Newsletter")
        .select("email")
        .eq("email", email)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        console.error(fetchError);
        setStatus("An error occurred. Please try again.");
        setStatusType("error");
        return;
      }

      if (existingEmail) {
        setStatus("This email is already subscribed.");
        setStatusType("error");
        return;
      }

      // Insert new email into the table
      const { error: insertError } = await supabase
        .from("Newsletter")
        .insert([{ email }]);

      if (insertError) {
        console.error(insertError);
        setStatus("Failed to subscribe. Please try again later.");
        setStatusType("error");
      } else {
        setStatus("Successfully subscribed!");
        setStatusType("success");
        setEmail(""); // Clear the input field
      }
    } catch (err) {
      console.error(err);
      setStatus("An unexpected error occurred.");
      setStatusType("error");
    }
  };

  return (
    <div className="text-center p-6">
      {/* Conditionally Render the Title */}
      {defaultTitle && <h2 className="mb-4">Subscribe To Our Newsletter</h2>}
      <div className=" flex justify-center items-center">
        <p className="w-[50%] ">{passText}</p>

      </div>
      <br />
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Input Field */}
        <input
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Subscribe Button */}
        <button
          onClick={handleSubscribe}
          className=" px-6 py-2 text-white rounded-md transition duration-300 "
        >
          Subscribe
        </button>
      </div>

      {/* Status Message */}
      {status && (
        <p
          className={`mt-4 text-sm ${statusType === "success" ? "text-green-600" : "text-red-600"
            }`}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default NewsletterSection;
