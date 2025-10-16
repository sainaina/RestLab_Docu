import React, { useState } from "react";

const MockWithAi = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedData, setGeneratedData] = useState<string>("");

  const generateMockData = async () => {
    setIsLoading(true);
    setGeneratedData("");

    const systemPrompt =
      "You are a specialized AI model for generating mock data for API testing. Your task is to generate valid JSON data based on a user's request. The JSON should be well-formed and directly usable in an API request body. Do not include any text or explanations outside of the JSON object itself. Ensure the JSON is properly formatted with correct syntax and data types.";
    const userQuery = `Generate mock JSON data based on the following request: ${prompt}`;
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: {
        parts: [{ text: systemPrompt }],
      },
      generationConfig: {
        responseMimeType: "application/json",
      },
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const result = await response.json();
      const jsonText = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (jsonText) {
        setGeneratedData(jsonText);
      } else {
        setGeneratedData(
          "Failed to generate data. Please try a different prompt."
        );
      }
    } catch (error) {
      console.error("Error generating mock data:", error);
      setGeneratedData(
        "Error generating mock data. Check the console for details."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-sans">
      <div className="w-full max-w-4xl space-y-12">
        <h1 className="text-4xl font-bold text-gray-800">Mocking with AI</h1>
        <div className="space-y-8 bg-white rounded-xl">
          <h2 className="pb-2 text-3xl font-bold text-gray-800 border-b-2 border-blue-500">
            Generate Mock Data with AI
          </h2>
          <p className="text-gray-600">
            RESTlab allows you to use AI to generate realistic mock data for
            your API requests. Simply describe the data structure you need, and
            the AI will generate a complete JSON object.
          </p>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-700">
              How it Works
            </h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>
                Enter a natural language description of the data you want to
                mock in the text field below.
              </li>
              <li>
                Click "Generate Mock Data" to send your request to the AI model.
              </li>
              <li>
                The AI will return a valid JSON object based on your
                description.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="mt-8 text-2xl font-semibold text-gray-700">
              Generate Your Data
            </h3>
            <textarea
              className="w-full h-32 p-4 text-sm border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., Generate a JSON object for a user with fields for name, email, age, and a list of hobbies."
            />
            <button
              onClick={generateMockData}
              disabled={isLoading}
              className={`w-full px-6 py-2 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                isLoading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isLoading ? "Generating..." : "Generate Mock Data"}
            </button>
          </div>
          <div className="mt-8 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-700">
              Generated JSON
            </h3>
            <pre className="w-full p-4 overflow-x-auto text-sm bg-gray-100 border border-gray-300 rounded-md">
              <code>
                {generatedData || "The generated JSON will appear here."}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockWithAi;
