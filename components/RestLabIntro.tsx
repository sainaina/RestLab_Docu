// src/components/RestLabIntro.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function RestLabIntro() {
  return (
    <section className="max-w-5xl p-8 mx-auto">
      {/* Intro */}
      <h1 className="mb-4 text-4xl font-semibold text-primary dark:text-yellow-300">
        Welcome to RestLab
        <hr className="mt-3 border-primary dark:border-yellow-300" />
      </h1>
      <p className="mb-8 text-base leading-relaxed text-justify text-gray-800 dark:text-gray-300">
        RestLab is an API testing and collaboration platform designed to make it
        easy to test, debug, and document your RESTful APIs. With RestLab, you
        can send requests, automate workflows, and collaborate with your team
        efficiently.
      </p>

      {/* Sections */}
      <div className="space-y-8 text-base leading-relaxed text-justify">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-primary dark:text-yellow-300">
            Get started
          </h2>
          <p className="text-gray-800 dark:text-gray-300">
            To get started using RestLab, check out the{" "}
            <Link
              href="/docs/get-started"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Get started section
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2 text-primary dark:text-yellow-300">
            Send requests
          </h2>
          <p className="text-gray-800 dark:text-gray-300">
            You can send requests in RestLab to connect to APIs you are working
            with. To learn more, see{" "}
            <Link
              href="/docs/send-requests"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Send API requests and get response data in RestLab
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2 text-primary dark:text-yellow-300">
            Write scripts
          </h2>
          <p className="text-gray-800 dark:text-gray-300">
            RestLab includes a powerful runtime that enables you to add dynamic
            behavior to requests and collections. You can write scripts that run
            before or after requests to perform API tests, build requests with
            dynamic parameters, pass data between requests, and more. To learn
            more, see{" "}
            <Link
              href="/docs/scripts"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Use scripts to add logic and tests in RestLab requests
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2 text-primary dark:text-yellow-300">
            Use collections
          </h2>
          <p className="text-gray-800 dark:text-gray-300">
            RestLab Collections are groups of saved requests. You can use
            collections to organize and group your requests, and then run them
            together. Collections can be run manually, on a schedule, or as part
            of CI/CD pipelines. To learn more, see{" "}
            <Link
              href="/docs/collections"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Organize and automate API requests in RestLab Collections
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2 text-primary dark:text-yellow-300">
            Use RestLab Flows
          </h2>
          <p className="text-gray-800 dark:text-gray-300">
            RestLab Flows is a visual tool for creating API workflows. You can
            chain requests, handle data, and design real-world workflows
            directly in your RestLab workspace. See{" "}
            <Link
              href="/docs/flows"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Build API applications visually using RestLab Flows
            </Link>{" "}
            to learn more.
          </p>
        </div>

        {/* … repeat same for all other sections, just add dark:text-gray-300 for text and dark:text-secondary for headings */}
      </div>
    </section>
  );
}
