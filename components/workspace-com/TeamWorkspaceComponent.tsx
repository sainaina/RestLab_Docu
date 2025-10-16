import React from "react";

const TeamWorkspaceComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-sans text-gray-800 0">
      <div className="w-full max-w-5xl py-12 space-y-12 bg-white rounded-3xl">
        <div className="">
          <h1 className="pb-2 text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
            Team Workspace
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Collaborate and share your API projects with your team.
          </p>
        </div>

        {/* Introduction and Core Benefits */}
        <div className="p-8 space-y-6 bg-teal-50 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-700">
            The Power of Collaboration
          </h2>
          <p className="text-lg text-gray-600">
            A team workspace is a shared environment where multiple members can
            work together on API projects. Unlike a personal workspace, a team
            workspace allows for real-time collaboration, shared access to
            collections, and centralized management of environments. This is
            essential for agile development and ensuring consistency across a
            project.
          </p>
          <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
            <div className="p-4 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold text-green-600">
                Shared Access
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Everyone on the team can view and edit.
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold text-green-600">
                Centralized
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                All data in one secure location.
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold text-green-600">
                Efficient
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Streamline your workflow.
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
                className="flex-shrink-0 w-6 h-6 mt-1 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"></path>
              </svg>
              <div className="ml-4">
                <span className="font-semibold text-gray-800">
                  Shared Collections:
                </span>{" "}
                Work on a single source of truth. All team members have
                immediate access to the same requests and collections, ensuring
                everyone is on the same page.
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 mt-1 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"></path>
              </svg>
              <div className="ml-4">
                <span className="font-semibold text-gray-800">
                  Centralized Environments:
                </span>{" "}
                Manage environment variables for the entire team. This
                eliminates the need for manual configuration and reduces the
                risk of errors across different environments.
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 mt-1 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"></path>
              </svg>
              <div className="ml-4">
                <span className="font-semibold text-gray-800">
                  Role-Based Access Control:
                </span>{" "}
                Assign roles to team members to manage who can edit or view
                collections, ensuring data integrity and security.
              </div>
            </li>
          </ul>
        </div>

        {/* Collaboration Tools Section */}
        <div className="p-8 space-y-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-700">
            Collaboration Tools
          </h2>
          <ol className="pl-6 space-y-4 text-lg text-gray-600 list-decimal">
            <li>
              <span className="font-semibold text-gray-800">
                Real-Time Sync:
              </span>{" "}
              Changes made by any team member are instantly synchronized across
              the workspace.
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Comment and Discuss:
              </span>{" "}
              Leave comments on requests to discuss implementation details or
              potential issues, keeping all communication in one place.
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Version History:
              </span>{" "}
              Track changes to collections and requests. You can easily revert
              to a previous version if needed, providing a safety net for your
              work.
            </li>
          </ol>
        </div>

        {/* Best Practices Section */}
        <div className="p-8 space-y-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-700">
            Best Practices for Team Workspaces
          </h2>
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
                  Standardize Your Workflow:
                </span>{" "}
                Agree on a naming convention for collections and requests to
                keep the workspace organized and easy to navigate.
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
                  Document Everything:
                </span>{" "}
                Make use of the description fields to explain the purpose of
                each request and collection. This is critical for new team
                members.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamWorkspaceComponent;
