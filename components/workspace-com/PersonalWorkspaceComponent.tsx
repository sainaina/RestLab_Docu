import React from "react";

const PersonalWorkspaceComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-sans text-gray-800 ">
      <div className="w-full max-w-5xl py-12 space-y-12 bg-white rounded-3xl">
        <div className="">
          <h1 className="pb-2 text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Personal Workspace
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Your private hub for focused API development.
          </p>
        </div>

        {/* Introduction and Core Benefits */}
        <div className="p-8 space-y-6 bg-blue-50 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-700">
            A Private Space for Your Work
          </h2>
          <p className="text-lg text-gray-600">
            The personal workspace is a secure, isolated environment designed
            specifically for you. It ensures that all your API requests,
            collections, and sensitive data remain private. This makes it the
            perfect place for personal projects, testing sensitive endpoints,
            and learning the ropes without any risk of exposure.
          </p>
          <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
            <div className="p-4 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600">Private</h3>
              <p className="mt-2 text-sm text-gray-500">
                Only you have access.
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600">Secure</h3>
              <p className="mt-2 text-sm text-gray-500">
                Data is encrypted and protected.
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600">Isolated</h3>
              <p className="mt-2 text-sm text-gray-500">
                No interference from other projects.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="p-8 space-y-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-700">Key Features</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 mt-1 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm1-5a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-4 7a1 1 0 112 0v2a1 1 0 11-2 0v-2z"></path>
              </svg>
              <div className="ml-4">
                <span className="font-semibold text-gray-800">
                  API Request History:
                </span>{" "}
                Every request you make is automatically saved, allowing you to
                quickly revisit and reuse past queries without manual effort.
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 mt-1 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"></path>
              </svg>
              <div className="ml-4">
                <span className="font-semibold text-gray-800">
                  Collections for Organization:
                </span>{" "}
                Group related API requests into collections. This is a powerful
                way to organize your projects, making large-scale API management
                simple and intuitive.
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 mt-1 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"></path>
              </svg>
              <div className="ml-4">
                <span className="font-semibold text-gray-800">
                  Environment Variables:
                </span>{" "}
                Define and manage variables to handle different environments
                (e.g., development, testing, production). This prevents the need
                for hardcoding values and makes your requests portable.
              </div>
            </li>
          </ul>
        </div>

        {/* Best Practices Section */}
        <div className="p-8 space-y-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-700">
            Best Practices for API Management
          </h2>
          <ol className="pl-6 space-y-4 text-lg text-gray-600 list-decimal">
            <li>
              <span className="font-semibold text-gray-800">
                Start with a Plan:
              </span>{" "}
              Before writing your first request, plan your API interactions.
              What endpoints will you hit? What data will you send or receive?
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Use Collections Wisely:
              </span>{" "}
              Create a new collection for each major project or API. This keeps
              your workspace clean and makes it easy to find specific requests
              later.
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Leverage Variables:
              </span>{" "}
              Don't hardcode sensitive information like API keys or base URLs.
              Use environment variables to keep your data secure and to make
              switching between different environments seamless.
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Document Your Requests:
              </span>{" "}
              Add notes and descriptions to your saved requests. This is
              incredibly helpful for future you and for anyone else who might
              need to use your workspace.
            </li>
          </ol>
        </div>

        {/* Use Cases Section */}
        <div className="p-8 space-y-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-700">
            Practical Use Cases
          </h2>
          <p className="text-lg text-gray-600">
            Wondering how to put your personal workspace to good use? Here are a
            few common scenarios:
          </p>
          <ul className="space-y-4 text-lg text-gray-600">
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 mt-1 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 7.054A7.971 7.971 0 0110 4a7.971 7.971 0 015.668 3.054L10 11.668 4.332 7.054z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="ml-4">
                <span className="font-semibold text-gray-800">
                  Local Development:
                </span>{" "}
                Test and debug a local API before deploying it. You can create a
                collection for your API with requests for each endpoint, making
                development and testing efficient.
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 mt-1 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 7.054A7.971 7.971 0 0110 4a7.971 7.971 0 015.668 3.054L10 11.668 4.332 7.054z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="ml-4">
                <span className="font-semibold text-gray-800">
                  Learning a New API:
                </span>{" "}
                Use your personal workspace to get familiar with a new
                third-party API. Save the example requests from the
                documentation and see how the responses look in real-time.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalWorkspaceComponent;
