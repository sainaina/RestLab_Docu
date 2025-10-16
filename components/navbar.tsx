// A simple navbar component.
// You would use this on all your pages or in `_app.js` to create consistent navigation.
"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 text-white bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-xl font-semibold">
          RESTlab Docs
        </Link>
        <div className="space-x-4">
          <Link
            href="/get-started/installation"
            className="hover:text-gray-400"
          >
            Get Started
          </Link>
          <Link
            href="/workspace/personal-workspace"
            className="hover:text-gray-400"
          >
            Workspace
          </Link>
          <Link href="/mocking/mock-with-ai" className="hover:text-gray-400">
            Mocking
          </Link>
        </div>
      </div>
    </nav>
  );
}
