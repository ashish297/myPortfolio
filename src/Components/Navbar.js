import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="hidden md:bg-[#0e1630] md:h-14 md:flex md:items-center">
        <div className="container max-w-screen-lg mx-auto px-8 grid grid-flow-col justify-between ">
          <div>
            <div className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer" >Ashish Kumar Meena</div>
          </div>

          <div className="grid grid-flow-col justify-evenly gap-10">
            <div className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer" >Home</div>
            <div className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer" >About</div>
            <div className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer" >Projects</div>
            <div className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer" >Contact Me</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
