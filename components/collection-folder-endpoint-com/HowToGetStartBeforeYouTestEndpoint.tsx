import React from "react";

const HowToGetStartBeforeYouTestEndpoint = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-4 font-sans">
      <div className="w-full max-w-4xl space-y-12">
        <h1 className="text-4xl font-bold text-gray-800 ">
          How to Get Started with RESTlab
        </h1>
        <div className="space-y-8 bg-white rounded-xl">
          <h2 className="pb-2 text-3xl font-bold text-gray-800 border-b-2 border-blue-500">
            What is RESTlab?
          </h2>
          <p className="text-gray-600">
            RESTlab is a powerful and lightweight API client designed to
            simplify your development workflow. It helps you quickly and easily
            send requests to, and receive responses from, your API endpoints.
            This guide will walk you through the essential steps to get started.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700">
            Step 1: Installation
          </h3>
          <p className="text-gray-600">
            First, ensure you have RESTlab and the optional `restlab-agent`
            installed in your project. The agent is useful for advanced features
            like proxying. Use your preferred package manager to install them.
          </p>
          <div className="p-4 overflow-x-auto bg-gray-200 rounded-md">
            <pre>
              <code className="text-sm">
                # Via NPM
                {"\n"}npm install restlab restlab-agent
                {"\n\n"}# Via Yarn
                {"\n"}yarn add restlab restlab-agent
                {"\n\n"}# Via pnpm
                {"\n"}pnpm add restlab restlab-agent
              </code>
            </pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-700">
            Step 2: Basic Client Setup
          </h3>
          <p className="text-gray-600">
            Import the `Restlab` client and initialize it. You'll need to
            provide your API's **base URL** and any necessary authentication,
            such as an API key or custom headers. The base URL is the common
            part of all your API endpoint URLs.
          </p>
          <div className="p-4 overflow-x-auto bg-gray-200 rounded-md">
            <pre>
              <code className="text-sm">
                {`import Restlab from 'restlab';

const client = new Restlab({
  baseURL: 'https://api.example.com/v1',
  apiKey: 'YOUR_API_KEY', // Optional, depending on your API
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN' // Example authorization header
  }
});`}
              </code>
            </pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-700">
            Step 3: Making Different API Calls
          </h3>
          <p className="text-gray-600">
            RESTlab supports all standard HTTP methods, allowing you to interact
            with your API in different ways.
          </p>

          <h4 className="mt-6 text-xl font-semibold text-gray-700">
            GET Request (Read Data)
          </h4>
          <p className="text-gray-600">
            Used to **retrieve** data from a server. It is a read-only operation
            and does not modify the server's state.
          </p>
          <div className="p-4 overflow-x-auto bg-gray-200 rounded-md">
            <pre>
              <code className="text-sm">
                {`const getPosts = async () => {
  try {
    const response = await client.get('/posts');
    // The response object contains data, status, and headers
    console.log('Posts:', response.data);
  } catch (error) {
    console.error('Failed to fetch posts:', error.message);
  }
};

getPosts();`}
              </code>
            </pre>
          </div>

          <h4 className="mt-6 text-xl font-semibold text-gray-700">
            POST Request (Create Data)
          </h4>
          <p className="text-gray-600">
            Used to **send** data to the server to create a new resource. The
            data you send is included in the request body.
          </p>
          <div className="p-4 overflow-x-auto bg-gray-200 rounded-md">
            <pre>
              <code className="text-sm">
                {`const newPost = {
  title: 'My First RESTlab Post',
  body: 'This is the body of the post.',
  userId: 1
};

const createPost = async () => {
  try {
    const response = await client.post('/posts', newPost);
    console.log('New Post Created:', response.data);
  } catch (error) {
    console.error('Failed to create post:', error.message);
  }
};

createPost();`}
              </code>
            </pre>
          </div>

          <h4 className="mt-6 text-xl font-semibold text-gray-700">
            PUT Request (Update Data)
          </h4>
          <p className="text-gray-600">
            Used to **update** a specific resource with new data. This typically
            replaces the entire resource with the new data you provide.
          </p>
          <div className="p-4 overflow-x-auto bg-gray-200 rounded-md">
            <pre>
              <code className="text-sm">
                {`const updatedData = {
  id: 1, // The ID is crucial for PUT requests
  title: 'My Updated RESTlab Post'
};

const updatePost = async () => {
  try {
    const response = await client.put('/posts/1', updatedData);
    console.log('Post Updated:', response.data);
  } catch (error) {
    console.error('Failed to update post:', error.message);
  }
};

updatePost();`}
              </code>
            </pre>
          </div>

          <h4 className="mt-6 text-xl font-semibold text-gray-700">
            DELETE Request (Remove Data)
          </h4>
          <p className="text-gray-600">
            Used to **delete** a specific resource from the server.
          </p>
          <div className="p-4 overflow-x-auto bg-gray-200 rounded-md">
            <pre>
              <code className="text-sm">
                {`const deletePost = async () => {
  try {
    const response = await client.delete('/posts/1');
    console.log('Post Deleted:', response.data);
  } catch (error) {
    console.error('Failed to delete post:', error.message);
  }
};

deletePost();`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToGetStartBeforeYouTestEndpoint;
