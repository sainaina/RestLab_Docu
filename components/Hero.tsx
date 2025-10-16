// A hero section for your main page.
// This is an example of a component that might contain an API call, similar to the previous example.
"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative p-12 text-center t ext-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl">
      <h1 className="mb-4 text-5xl font-extrabol text-primary">
        API Testing Made Easy
      </h1>
      <p className="mb-6 text-xl font-light opacity-80">
        Test, debug, and document your APIs with a powerful and simple platform.
      </p>
      <Link
        href="/get-started/installation"
        className="inline-block px-8 py-3 font-bold text-indigo-700 transition-colors bg-white rounded-full shadow-lg hover:bg-gray-200"
      >
        Start Now
      </Link>
    </div>
  );
}
