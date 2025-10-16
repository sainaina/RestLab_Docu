import React from "react";

const QuickSetupGuideComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-sans">
      <div className="w-full max-w-4xl space-y-12">
        <div className="space-y-8 bg-white rounded-xl">
          <h2 className="pb-2 text-3xl font-bold text-gray-800 border-b-2 border-blue-500">
            Installation
          </h2>
          <p className="text-gray-600">
            To get started, install the RESTlab client and the optional `agent`
            component using your preferred package manager.
          </p>
          <div className="p-4 overflow-x-auto bg-gray-200 rounded-md">
            <pre>
              <code className="text-sm">
                # Via NPM
                {"\n"}npm install restlab restlab-agent
                {"\n\n"}# Or via Yarn
                {"\n"}yarn add restlab restlab-agent
                {"\n\n"}# Or via pnpm
                {"\n"}pnpm add restlab restlab-agent
              </code>
            </pre>
          </div>

          <h2 className="pb-2 text-3xl font-bold text-gray-800 border-b-2 border-blue-500">
            Basic Client Setup
          </h2>
          <p className="text-gray-600">
            Import and instantiate the `Restlab` client. Configure it with your
            API's base URL and API key.
          </p>
          <div className="p-4 overflow-x-auto bg-gray-200 rounded-md">
            <pre>
              <code className="text-sm">
                {`import Restlab from 'restlab';

const client = new Restlab({
  baseURL: 'https://api.example.com',
  apiKey: 'YOUR_API_KEY',
});`}
              </code>
            </pre>
          </div>

          <h2 className="pb-2 text-3xl font-bold text-gray-800 border-b-2 border-blue-500">
            Using the Agent
          </h2>
          <p className="text-gray-600">
            The `agent` component is used for advanced features like proxying.
            It's optional but recommended for development.
          </p>
          <div className="p-4 overflow-x-auto bg-gray-200 rounded-md">
            <pre>
              <code className="text-sm">
                {`import RestlabAgent from 'restlab-agent';

const agent = new RestlabAgent({
  proxy: 'http://localhost:8080',
});`}
              </code>
            </pre>
          </div>

          <h2 className="pb-2 text-3xl font-bold text-gray-800 border-b-2 border-blue-500">
            Making Your First API Call
          </h2>
          <p className="text-gray-600">
            Once your client is configured, you can start making API calls. Here
            is an example of a simple GET request.
          </p>
          <div className="p-4 overflow-x-auto bg-gray-200 rounded-md">
            <pre>
              <code className="text-sm">
                {`const fetchPosts = async () => {
  try {
    const response = await client.get('/posts');
    console.log('Posts:', response.data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

fetchPosts();`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSetupGuideComponent;
