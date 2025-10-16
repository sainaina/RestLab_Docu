import React from "react";

const VideoGuideComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-sans">
      <div className="w-full max-w-4xl space-y-12">
        <h1 className="text-4xl font-bold text-gray-800">
          RESTlab Video Guides
        </h1>
        <div className="space-y-8 bg-white rounded-xl">
          {/* Text Guide */}
          <h2 className="pb-2 text-3xl font-bold text-gray-800 border-b-2 border-blue-500">
            Text Guide
          </h2>
          <p className="text-gray-600">
            Before diving into the videos, here is a quick summary of what
            you'll learn in each one. This text guide is designed to give you an
            overview and help you get started quickly.
          </p>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-700">
              Introduction to RESTlab
            </h3>
            <p className="text-gray-600">
              Learn about RESTlab's core features, including the user interface,
              request methods (GET, POST, PUT, DELETE), and how it can
              streamline your API development and testing workflow.
            </p>
            <h3 className="text-2xl font-semibold text-gray-700">
              Making Your First API Call
            </h3>
            <p className="text-gray-600">
              This section provides a step-by-step guide on how to set up your
              client and perform your first API calls.
            </p>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Enter an endpoint URL.</li>
              <li>Select the appropriate HTTP method (GET, POST, etc.).</li>
              <li>Add request headers and a request body.</li>
              <li>Send the request and view the response.</li>
            </ul>
          </div>

          {/* Video Guides */}
          <h2 className="pb-2 text-3xl font-bold text-gray-800 border-b-2 border-blue-500">
            Video Guides
          </h2>
          <p className="text-gray-600">
            These video guides are designed to help you get up and running with
            RESTlab quickly.
          </p>

          {/* Video 1 */}
          <h3 className="text-2xl font-semibold text-gray-700">
            Introduction to RESTlab
          </h3>
          <p className="text-gray-600">
            A quick overview of RESTlab's core features and how it can simplify
            your API development workflow.
          </p>
          <div className="w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/j4qPkYTD5YY?si=NRTmN1tDPoPv0ix4"
              title="Introduction to RESTlab"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-md"
            ></iframe>
          </div>

          {/* Video 2 */}
          <h3 className="text-2xl font-semibold text-gray-700">
            Making Your First API Call
          </h3>
          <p className="text-gray-600">
            A step-by-step guide on how to set up your client and perform your
            first GET, POST, PUT, and DELETE requests.
          </p>
          <div className="w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/R3JDNebOTUo?si=TpRcsS0bQk3beNw_"
              title="Making Your First API Call"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGuideComponent;
