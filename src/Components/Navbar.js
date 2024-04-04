import React, { useState } from "react";
const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = (Icon) => {
    if (Icon === "menu") setIcon("close");
    else setIcon("menu");
    setIsToggled(!isToggled);
  };

  const [Icon, setIcon] = useState("menu");

  const handleNavigation = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <div className="w-full h-14">
      <div className="container fixed bg-[#0e1630]  top-0 left-4 right-4 w-screen mx-auto h-14 px-8  grid grid-flow-col justify-between items-center">
        <div className="absolute md:static text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer">
            Ashish Kumar Meena
        </div>
        <div
          className={`${
            isToggled ? "top-14" : "top-[-100%]"
          } fixed pb-8 px-5 left-0 md:static w-full gap-8 grid  md:grid-flow-col md:justify-evenly items-center md:gap-10 z-10 bg-[#0e1630]`}
        >
          <div className="flex items-center justify-center">
            <a
              onClick={() => handleNavigation("Home")}
              href="#Home"
              className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer "
            >
              Home
            </a>
          </div>
          <div>
            <a
              onClick={() => handleNavigation("Projects")}
              href="#Projects"
              className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer"
            >
              Projects
            </a>
          </div>
          <div>
            {" "}
            <a
              onClick={() => handleNavigation("Home")}
              href=""
              className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer"
            >
              Tech Stack
            </a>
          </div>
          <div>
            <a
              onClick={() => handleNavigation("ContactMe")}
              href="#ContactMe"
              className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer"
            >
              Contact Me
            </a>
          </div>
          x
        </div>
        <div
          onClick={() => handleClick(Icon)}
          className="text-white text-3xl cursor-pointer md:hidden transition ease-in-out duration-300"
        >
          <ion-icon name={Icon}></ion-icon>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
