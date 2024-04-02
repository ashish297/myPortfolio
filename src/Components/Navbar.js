import React, { useState } from "react";

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleClick = (Icon) => {
      if (Icon === "menu") setIcon("close")
      else setIcon("menu")
      setIsToggled(!isToggled);
    };

  const [Icon, setIcon] = useState("menu");
  
  

  return (
    <>
      <div className="bg-[#0e1630] h-14 w-screen flex items-center justify-center">
        <div className="container mx-auto max-w-screen-lg  px-8 grid grid-flow-col justify-between">
          <div className="">
            <div className="absolute left-4 md:static text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer" >Ashish Kumar Meena</div>
          </div>
          <div className={`${isToggled ? 'top-14' : 'top-[-100%]'} absolute px-4 left-0 md:static w-full gap-8 grid md:grid-flow-col md:justify-evenly md:gap-10 z-10 bg-[#0e1630]`}>
            <div className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer" >Home</div>
            <div className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer" >Projects</div>
            <div className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer" >Tech Stack</div>
            <div className="text-white hover:text-[#01d293] transition ease-in-out duration-300 cursor-pointer" >Contact Me</div>
          </div>
          <div onClick={()=>handleClick(Icon)} className="text-white text-3xl cursor-pointer md:hidden transition ease-in-out duration-300"><ion-icon name={Icon}></ion-icon></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
