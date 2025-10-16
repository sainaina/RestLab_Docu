"use client";

import React from "react";

const CollectionOfRestLab = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-4 font-sans bg-gray-50 dark:bg-[#081910] transition-colors duration-300 px-6 py-12">
      <div className="w-full max-w-4xl space-y-12">
        {/* Page Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-yellow-300 mb-2">
            Collections in RESTlab
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Collections in RESTlab help you organize and manage your API
            requests into logical groups. This makes it easy to test, share, and
            document APIs efficiently — especially when working in teams.
          </p>
        </div>

        {/* What is a Collection */}
        <section className="bg-white dark:bg-[#0f221e] rounded-2xl shadow-md p-6 space-y-4 transition-colors duration-300">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-yellow-200 border-b-2 border-blue-500 pb-2">
            What is a Collection?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            A <strong>Collection</strong> is a structured workspace where you
            can group multiple API endpoints related to a specific project or
            service. Each collection may include:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>
              <strong>Folders</strong> — to organize related endpoints, such as
              authentication, users, or products.
            </li>
            <li>
              <strong>Endpoints</strong> — each representing a single API
              request (GET, POST, PUT, DELETE, etc.).
            </li>
            <li>
              <strong>Environment variables</strong> — reusable settings for
              base URLs or API keys.
            </li>
          </ul>
        </section>

        {/* Creating a Collection */}
        <section className="bg-white dark:bg-[#0f221e] rounded-2xl shadow-md p-6 space-y-4 transition-colors duration-300">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-yellow-200 border-b-2 border-blue-500 pb-2">
            Creating a Collection
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You can create a collection using the RESTlab UI or programmatically
            using the RESTlab API. Here’s how to define a new collection in
            JavaScript:
          </p>
        </section>

        {/* Adding Endpoints to a Collection */}
        <section className="bg-white dark:bg-[#0f221e] rounded-2xl shadow-md p-6 space-y-4 transition-colors duration-300">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-yellow-200 border-b-2 border-blue-500 pb-2">
            Adding Endpoints to a Collection
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Once you’ve created a collection, you can add endpoints inside it to
            organize your API requests.
          </p>
        </section>

        {/* Organizing with Folders */}
        <section className="bg-white dark:bg-[#0f221e] rounded-2xl shadow-md p-6 space-y-4 transition-colors duration-300">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-yellow-200 border-b-2 border-blue-500 pb-2">
            Organizing with Folders
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            RESTlab lets you organize endpoints into folders for better clarity
            and maintainability. For example:
          </p>
        </section>
      </div>
    </div>
  );
};

export default CollectionOfRestLab;
