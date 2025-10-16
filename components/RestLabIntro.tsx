// src/components/RestLabIntro.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function RestLabIntro() {
  return (
    <section className="max-w-5xl p-8 mx-auto">
      {/* Intro */}
      <h1 className="mb-4 text-4xl font-semibold dark:text-secondary text-primary">
        Welcome to RestLab
        <hr className="mt-3 border border-secondary dark:border-primary" />
      </h1>
      <p className="mb-8 text-base text-gray-700 leading-relaxed text-justify dark:text-gray-400">
        RestLab is an API testing and collaboration platform designed to make it
        easy to test, debug, and document your RESTful APIs. With RestLab, you
        can send requests, automate workflows, and collaborate with your team
        efficiently.
      </p>

      {/* Sections */}
      <div className="space-y-8 text-base text-gray-700 leading-relaxed text-justify">
        <div>
          <h2 className="text-2xl font-bold mb-2 dark:text-gray-300 text-primary">
            Get started
          </h2>
          <p className="dark:text-gray-400">
            To get started using RestLab, check out the{" "}
            <Link
              href="/docs/get-started"
              className="text-blue-600 hover:underline"
            >
              Get started section
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Send requests</h2>
          <p>
            You can send requests in RestLab to connect to APIs you are working
            with. To learn more, see{" "}
            <Link
              href="/docs/send-requests"
              className="text-blue-600 hover:underline"
            >
              Send API requests and get response data in RestLab
            </Link>{" "}
            and learn how to send your first request.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Write scripts</h2>
          <p>
            RestLab includes a powerful runtime that enables you to add dynamic
            behavior to requests and collections. You can write scripts that run
            before or after requests to perform API tests, build requests with
            dynamic parameters, pass data between requests, and more. To learn
            more, see{" "}
            <Link
              href="/docs/scripts"
              className="text-blue-600 hover:underline"
            >
              Use scripts to add logic and tests in RestLab requests
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Use collections</h2>
          <p>
            RestLab Collections are groups of saved requests. You can use
            collections to organize and group your requests, and then run them
            together. Collections can be run manually, on a schedule, or as part
            of CI/CD pipelines. To learn more, see{" "}
            <Link
              href="/docs/collections"
              className="text-blue-600 hover:underline"
            >
              Organize and automate API requests in RestLab Collections
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Use RestLab Flows</h2>
          <p>
            RestLab Flows is a visual tool for creating API workflows. You can
            chain requests, handle data, and design real-world workflows
            directly in your RestLab workspace. See{" "}
            <Link href="/docs/flows" className="text-blue-600 hover:underline">
              Build API applications visually using RestLab Flows
            </Link>{" "}
            to learn more.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Use the RestLab CLI</h2>
          <p>
            The RestLab CLI is a secure command-line companion for RestLab. You
            can run collections, send run results to RestLab, validate API
            definitions against rules, and more. To learn more, see{" "}
            <Link href="/docs/cli" className="text-blue-600 hover:underline">
              Explore RestLab’s command-line companion
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Collaborate in RestLab</h2>
          <p>
            RestLab provides collaboration tools for teams. You can create
            shared workspaces where team members can work together on API
            projects. Users can also comment directly on collections, APIs, and
            requests. See{" "}
            <Link
              href="/docs/collaboration"
              className="text-blue-600 hover:underline"
            >
              Collaborate in RestLab
            </Link>{" "}
            to learn more.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            Design and develop your API
          </h2>
          <p>
            RestLab supports API-first development with Spec Hub, types in
            collections, and an API Builder. You can design APIs with
            specifications or definitions and make them the single source of
            truth for your projects. To learn more, see{" "}
            <Link
              href="/docs/api-design"
              className="text-blue-600 hover:underline"
            >
              Design and build APIs in RestLab
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Document your API</h2>
          <p>
            Documentation is a key part of RestLab. You can generate and publish
            documentation for your APIs and collections, making it easier for
            consumers to understand and use your endpoints. Documentation can be
            private or public. To learn more, see{" "}
            <Link
              href="/docs/documentation"
              className="text-blue-600 hover:underline"
            >
              Document your APIs in RestLab
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Monitor your API</h2>
          <p>
            RestLab Monitors give you visibility into the health and performance
            of your APIs. You can schedule monitors to run test scripts, chain
            requests, and validate workflows. To learn more, see{" "}
            <Link
              href="/docs/monitors"
              className="text-blue-600 hover:underline"
            >
              Monitor health and performance of your APIs in RestLab
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            API Governance and API Security
          </h2>
          <p>
            RestLab provides features for API Governance and Security. These
            tools help enforce consistency across APIs and improve API security
            by identifying weaknesses and suggesting fixes. See{" "}
            <Link
              href="/docs/security"
              className="text-blue-600 hover:underline"
            >
              API Governance and Security in RestLab
            </Link>{" "}
            to learn more.
          </p>
        </div>

        {/* Key Features Overview */}
        <h2 className="mt-10 mb-3 text-2xl font-bold text-primary">
          What You Can Do with RestLab
        </h2>
        <ul className="pl-6 mb-8 space-y-2 list-disc">
          <li>Send API requests and inspect responses</li>
          <li>Organize your requests into collections</li>
          <li>Automate workflows with RestLab Flows</li>
          <li>Run API tests using built-in scripting</li>
          <li>Monitor API performance and uptime</li>
          <li>Collaborate with your team in shared workspaces</li>
          <li>Generate and publish API documentation</li>
        </ul>
      </div>
    </section>
  );
}
