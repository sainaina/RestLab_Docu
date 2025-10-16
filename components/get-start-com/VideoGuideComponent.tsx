"use client";

import React from "react";

const VideoGuideComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center  px-6 py-12 font-sans bg-gray-50 dark:bg-[#081910] transition-colors duration-300">
      <div className="w-full max-w-5xl  ">
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-extrabold mb-2 text-gray-900 dark:text-yellow-300">
            RESTlab Video Guides
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl py-2">
            A quick overview of RESTlab’s core features and how it can simplify
            your API development workflow.
          </p>
        </div>
  
        {/* Video Guides Section */}
        <section className="p-6 my-6 bg-white dark:bg-[#0f221e] rounded-2xl shadow-md transition-colors duration-300 space-y-8">
          {/* Video 1 */}
          <div className="space-y-3">
            <div className="w-full aspect-video overflow-hidden rounded-xl shadow-sm">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iOdAlKob3iU?si=g7oWfonT3YDc8UTu"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              This introductory video walks you through RESTlab’s interface and
              demonstrates how to quickly test and document your APIs.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoGuideComponent;
