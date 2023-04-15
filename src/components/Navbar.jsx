import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center h-16 pt-[90px]">
      <div className="flex items-center ">
        <a href="#home" className="font-bold text-5xl text-[#3949AB] ml-[120px]">
          Youvatar
        </a>
      </div>
      <div className="flex items-center">
        <button className="bg-[#3949AB] hover:bg-blue-600 w-[183px] h-[48px] text-white font-bold py-2 rounded mr-[50px]">
          Save Draft
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
