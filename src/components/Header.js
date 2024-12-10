
import React, {useState} from "react";
import menu from "../assets/hamburger-menu.svg";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";

const Header = () => {

  const dispatch = useDispatch();
  const toggleSidebarHandler = () => {
      dispatch(toggleSidebar());
  }

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">

      <div className="flex items-center">
        <img onClick={() => toggleSidebarHandler()} className="h-8 cursor-pointer" alt="menu" src={menu} />
        <h1 className="font-semibold ml-4 text-2xl cursor-pointe">Abhay Raj</h1>
      </div>

      <div className="relative w-16 h-8">
        <label className="absolute w-full h-full bg-gray-300 rounded-full cursor-pointer border-2 border-gray-800">
          <input type="checkbox" className="absolute hidden peer" />
          <span className="absolute w-full h-full rounded-full bg-gray-300 transition duration-300 peer-checked:bg-gray-800"></span>
          <span className="absolute top-1/2 left-1 w-6 h-6 bg-gray-800 rounded-full shadow-inner transition-transform duration-300 transform -translate-y-1/2 peer-checked:translate-x-8 peer-checked:bg-gray-300"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;

