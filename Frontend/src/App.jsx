import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import bgImage from "../src/assets/main.jpg"

const NewsletterPage = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter an email.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/subscribe", { email });

      if (data?.message === "This email is already subscribed.") {
        toast.error(data.message);
      } else {
        toast.success("You are subscribed to our page!");
        setEmail("");
      }
    } catch (error) {
      console.error("Subscription failed:", error);
      return toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Toaster for notifications */}
      <Toaster
        toastOptions={{
          style: {
            background: "white",
            color: "black",
            border: "1px solid #ccc",
          },
          success: {
            iconTheme: {
              primary: "black",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "black",
              secondary: "white",
            },
          },
        }}
      />

      <div className="bg-white/90 shadow-xl rounded-xl p-10 max-w-xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Be the First to Know!
        </h1>
        <p className="text-gray-600 mb-6">
          Get updates on new arrivals, fresh collections, and what’s happening next.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center">
          <input
            className="w-full sm:w-2/3 border border-gray-300 rounded-md sm:rounded-r-none px-4 py-2 text-gray-700 focus:outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-1/3 bg-black text-white px-6 py-2 mt-3 sm:mt-0 rounded-md sm:rounded-l-none hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPage;
