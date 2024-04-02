import React from "react";

const Home = () => {
  return (
    <>
    <div className="container max-w-screen-lg mx-auto px-8 mb-14">
      <div className="bg-[#0e1630] text-white  mt-14 md:gap-10 grid grid-flow-row md:grid-flow-col items-center">
        <div className="grid col-span-1 order-3 md:order-1">
          <div className="mb-4">
            <span className="text-[#01d293] text-5xl">Hello</span>
          </div>
          <div className="text-3xl mb-2">I'm Ashish Kumar Meena</div>
          <div className="mb-2">Fullstack Developer</div>
          <div className="mb-5">
            Hi there! My name is Ashish Kumar Meena. I am a 2nd Year
            Undergraduate Student at Indian Institue of Technology, Kharagpur.
          </div>
          <div>
            <a
              href="/"
              target="_blank"
              className="bg-gray-700 hover:bg-[#01d293] text-[#01d293] transition ease-in-out duration-700 hover:text-white py-2 px-4 rounded"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="grid col-span-1 order-2">
          <img
            className="w-full h-full rounded-full"
            src="/images/myPhoto.jpg"
            alt=""
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
