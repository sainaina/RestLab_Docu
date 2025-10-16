import React, { useState } from "react";

const AutoPasteCodeToRequestBody = () => {
  const [requestBody, setRequestBody] = useState<string>("");

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setRequestBody(text);
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
      // Fallback for browsers that don't support navigator.clipboard
      // You could use a simple textarea and prompt the user to paste manually.
      alert("Clipboard access denied. Please paste the code manually.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans">
      <div className="w-full max-w-4xl space-y-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Auto-Paste Code to Request Body
        </h1>
        <div className="space-y-8 bg-white rounded-xl">
          <h2 className="pb-2 text-3xl font-bold text-gray-800 border-b-2 border-blue-500">
            Automate Your Workflow
          </h2>
          <p className="text-gray-600">
            The Auto-Paste feature in RESTlab allows you to quickly transfer
            code or JSON data from your clipboard directly into the request body
            editor, streamlining your testing process.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700">How It Works</h3>
          <p className="text-gray-600">
            This functionality uses the browser's native Clipboard API to
            securely access data you have copied. By clicking the "Paste from
            Clipboard" button, the contents of your clipboard are instantly
            populated in the request body textarea below.
          </p>

          <button
            onClick={handlePaste}
            className="px-6 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Paste from Clipboard
          </button>

          <h3 className="mt-8 text-2xl font-semibold text-gray-700">
            Request Body
          </h3>
          <textarea
            className="w-full h-64 p-4 font-mono text-sm border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
            placeholder="Paste your code or JSON here..."
          />
          <p className="text-sm italic text-gray-500">
            Note: For this feature to work, your browser may prompt you to grant
            clipboard access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutoPasteCodeToRequestBody;
