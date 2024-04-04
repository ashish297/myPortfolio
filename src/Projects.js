import React from "react";

const Projects = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen-lg px-8 text-white mb-10">
        <div className="mb-8 text-[#01d293] text-3xl">My Projects</div>
        <div className=" grid md:grid-cols-3 gap-10 wrap ">
          <div className="h-full w-full md:h-[450px] md:w-[300px] mb-10 grid col-span-1 grid-flow-row bg-[#1d284ba1] shadow-xl p-4 rounded-lg ">
            <div>
              <img
                className="w-full h-full rounded-lg object-cover"
                src="/images/myPhoto.jpg"
                alt=""
              />
            </div>
            <div className="mb-3 mt-3 text-3xl">Full Stack Twitter Clone</div>
            <div className="grid grid-flow-col grid-rows-2 gap-2">
              <span className="bg-gray-700 rounded flex justify-center items-center">
                Node Js
              </span>
              <span className="bg-gray-700 rounded flex justify-center items-center">
                Express
              </span>
              <span className="bg-gray-700 rounded flex justify-center items-center">
                Tailwind
              </span>
              <span className="bg-gray-700 rounded flex justify-center items-center">
                MongoDB
              </span>
              <span className="bg-gray-700 rounded flex justify-center items-center">
                MongoDB
              </span>
            </div>
          </div>
          <div className="h-full w-full md:h-[450px] md:w-[300px] mb-10 grid col-span-1 grid-flow-row bg-[#1d284ba1] shadow-xl p-4 rounded-lg ">
            <div>
              <img
                className="w-full h-full rounded-lg object-cover"
                src="/images/myPhoto.jpg"
                alt=""
              />
            </div>
            <div className="mb-3 mt-3 text-3xl">Full Stack Twitter Clone</div>
            <div className="grid grid-flow-col grid-rows-2 gap-2">
              <span className="bg-gray-700 rounded flex justify-center items-center">
                Node Js
              </span>
              <span className="bg-gray-700 rounded flex justify-center items-center">
                Express
              </span>
              <span className="bg-gray-700 rounded flex justify-center items-center">
                Tailwind
              </span>
              <span className="bg-gray-700 rounded flex justify-center items-center">
                MongoDB
              </span>
              <span className="bg-gray-700 rounded flex justify-center items-center">
                MongoDB
              </span>
            </div>
          </div>
          <div className="h-full w-full md:h-[450px] md:w-[300px] mb-10 grid col-span-1 grid-flow-row bg-[#1d284ba1] shadow-xl p-4 rounded-lg ">
            <div>
              <img
                className="w-full h-full rounded-lg object-cover"
                src="/images/myPhoto.jpg"
                alt=""
              />
            </div>
            <div className="mb-3 mt-3 text-3xl">Full Stack Twitter Clone</div>
            <div className="grid grid-flow-col grid-rows-2 gap-2">
              <span className="bg-gray-700 rounded flex justify-center items-center">
                Node Js
              </span>
              <span className="bg-gray-700 rounded flex justify-center items-center">
                Express
              </span>
              <span className="bg-gray-700 rounded flex justify-center items-center">
                Tailwind
              </span>
              <span className="bg-gray-700 rounded flex justify-center items-center">
                MongoDB
              </span>
              <span className="bg-gray-700 rounded flex justify-center items-center">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
