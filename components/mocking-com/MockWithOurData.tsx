import React, { useState } from "react";

// Pre-defined mock data for different use cases.
const mockDataExamples = {
  userData: {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 32,
    hobbies: ["hiking", "reading", "coding"],
    isActive: true,
  },
  productData: {
    productId: "PROD-12345",
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    inStock: 150,
    details: {
      color: "Black",
      weight_g: 90,
    },
  },
  errorResponse: {
    status: 404,
    error: "Resource Not Found",
    message: "The requested product ID could not be located on the server.",
  },
};

const MockWithOurData = () => {
  const [selectedData, setSelectedData] = useState<string>("");

  const handleSelectData = (key: keyof typeof mockDataExamples) => {
    setSelectedData(JSON.stringify(mockDataExamples[key], null, 2));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans">
      <div className="w-full max-w-4xl space-y-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Mocking with Our Data
        </h1>
        <div className="space-y-8 bg-white rounded-xl">
          <h2 className="pb-2 text-3xl font-bold text-gray-800 border-b-2 border-blue-500">
            Use Pre-defined Mock Data
          </h2>
          <p className="text-gray-600">
            RESTlab provides a library of pre-defined mock data sets that you
            can use instantly for testing your API endpoints without relying on
            external services or AI generation.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-700">
              Select Your Data
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleSelectData("userData")}
                className="px-6 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                User Data
              </button>
              <button
                onClick={() => handleSelectData("productData")}
                className="px-6 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Product Data
              </button>
              <button
                onClick={() => handleSelectData("errorResponse")}
                className="px-6 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Error Response
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-700">
              Selected JSON
            </h3>
            <pre className="w-full p-4 overflow-x-auto text-sm bg-gray-100 border border-gray-300 rounded-md">
              <code>
                {selectedData || "Select a data type above to see the JSON."}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockWithOurData;
