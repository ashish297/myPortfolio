import React from "react";

const Footer = () => {
  return (
    <>
      <div id="ContactMe" className=" container mx-auto px-8 max-w-screen-lg pb-6 text-white grid grid-flow-row md:grid-flow-col items-start ">
        <div className="mb-14 md:mb-0">
          <div className="mb-8 text-[#01d293] text-3xl">Connect with me</div>
          <div className="mb-3 text-[#809EAD] grid grid-flow-col items-center">
            <i className="text-[#01d293] mr-4 text-1xl grid col-span-1 ">
              <ion-icon name="location-outline"></ion-icon>
            </i>
            <span className="grid col-span-11">Jaipur, India</span>
          </div>
          <div className="mb-3 text-[#809EAD] grid grid-flow-col items-center">
            <i className="text-[#01d293] mr-4 text-1xl  ">
              <ion-icon name="mail-outline"></ion-icon>
            </i>
            <span className="grid col-span-11 hover:text-[#01d293] cursor-pointer transition duration-300">
              dewandameena1098@gmail.com
            </span>
          </div>
        </div>

        <div className="">
          <div className="mb-6 text-[#01d293] text-3xl">Contact me</div>
          <div>
            <form action="">
              <div className="">
                <input
                  className="appearance-none outline-none bg-gray-700 w-full focus:bg-gray-700 text-gray-300 border-2 border-gray-400 focus:border-[#01d293] py-3 px-4 mb-3 rounded"
                  type="text"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <input
                  className="appearance-none outline-none bg-gray-700 w-full focus:bg-gray-700 text-gray-300 border-2 border-gray-400 focus:border-[#01d293] py-3 px-4 mb-3 rounded"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <textarea
                  className="appearance-none outline-none bg-gray-700 w-full focus:bg-gray-700 text-gray-300 border-2 border-gray-400 focus:border-[#01d293] py-3 px-4 mb-3 rounded"
                  rows="4"
                  type="text"
                  placeholder="Your Message"
                />
              </div>
              <div className=" ">
                <button className="bg-gray-700 hover:bg-[#01d293] hover:text-white text-[#01d293] transition ease-in-out duration-700 py-2 px-4 rounded">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
