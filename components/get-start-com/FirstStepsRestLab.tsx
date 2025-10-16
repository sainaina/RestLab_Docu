"use client";

import React from "react";

export default function FirstStepsRestLab() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-700 dark:text-gray-300 ">
      {/* Header */}
      <div className=" mb-12">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-secondary">
          Your first steps with RestLab
        </h1>
        <p className=" text-gray-900 text-justify leading-relaxed dark:text-gray-300">
          Follow this quick guide to get started using RestLab. You'll learn how
          to install the RestLab desktop app, send your first API request, write
          a simple test, and organize your requests into collections. You’ll
          also discover how to collaborate with your team, automate workflows,
          and explore the RestLab platform.
        </p>
      </div>

      {/* Main description */}
      <div className="mb-10 text-gray-900 max-w-3xl mx-auto">
        <p className="text-justify leading-relaxed dark:text-gray-300">
          When you're ready to begin, click{" "}
          <span className="font-semibold dark:text-blue-300">Download</span> in
          the left navigation menu to install the RestLab desktop app for your
          operating system. We recommend going through each topic in this
          section step by step to fully understand how RestLab works. Make sure
          to create a free RestLab account so you can save your projects and
          access your workspace from any device.
        </p>
      </div>

      {/* Note box */}
      <div className="text-center text-gray-900 bg-gray-50 dark:bg-yellow-50 p-4 rounded-lg">
        <p className="text-justify leading-relaxed">
          You can use the navigation arrows at the bottom of this page to move
          between setup topics, such as installing RestLab, exploring the
          workspace, and sending your first API request.
        </p>
      </div>
    </div>
  );
}
