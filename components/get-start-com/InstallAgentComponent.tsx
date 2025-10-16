"use client";

import React from "react";
import Link from "next/link";

export default function InstallRestLabApp() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans text-gray-800 dark:text-gray-300">
      {/* Header */}
      <h1 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-yellow-300">
        Get the RestLab app
      </h1>

      {/* Download link box */}
      <div className="bg-blue-50 dark:bg-blue-100 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-6">
        <Link
          href="/download"
          className="text-blue-900 dark:text-blue-700 font-semibold hover:underline"
        >
          Download the RestLab app for macOS, Windows, or Linux.
        </Link>
      </div>

      {/* Description */}
      <p className="text-justify leading-relaxed mb-6">
        RestLab is an API platform for building, testing, and collaborating on
        APIs. You can use the RestLab desktop app to manage every stage of your
        API lifecycle, from designing endpoints to monitoring performance.
      </p>

      {/* Feature list */}
      <ul className="space-y-3 list-disc list-inside">
        <li>
          Send requests with the RestLab API client, including HTTP, GraphQL,
          and WebSocket APIs.
        </li>
        <li>Design, build, and document your APIs in one workspace.</li>
        <li>Build smart API workflows with RestLab Flows.</li>
        <li>Test and monitor your API’s performance and reliability.</li>
        <li>
          Organize your work and collaborate with teammates on shared projects.
        </li>
        <li>Discover, share, and reuse APIs through the RestLab API Hub.</li>
      </ul>
    </div>
  );
}
