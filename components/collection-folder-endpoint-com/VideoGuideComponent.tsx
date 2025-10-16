import React from "react";

const VideoGuideComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-sans ">
      <div className="w-full max-w-4xl space-y-12">
        <h1 className="text-4xl font-bold text-gray-800">
          RESTlab Video Guides
        </h1>

        <div className="space-y-8 bg-white rounded-xl">
          <h2 className="pb-2 text-3xl font-bold text-gray-800 border-b-2 border-blue-500">
            Learn RESTlab in Minutes
          </h2>
          <p className="text-gray-600">
            These video guides are designed to help you get up and running with
            RESTlab quickly.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700">
            Introduction to RESTlab
          </h3>
          <p className="text-gray-600">
            A quick overview of RESTlab's core features and how it can simplify
            your API development workflow.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full rounded-md shadow-lg h-80"
              src="https://www.youtube.com/embed/NqBxVZsp3L8?si=gpZm0GkQ1vfPV14A"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <h3 className="text-2xl font-semibold text-gray-700">
            Making Your First API Call
          </h3>
          <p className="text-gray-600">
            A step-by-step guide on how to set up your client and perform your
            first GET, POST, PUT, and DELETE requests.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full rounded-md shadow-lg h-80"
              src="https://www.youtube.com/embed/AdKX8tqxrfs?si=Yj6Hq15AuEguJ3Fh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGuideComponent;
