import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  return (
    isSidebarOpen && (
      <div className="max-w-40 m-8">
        <ul className="space-y-4 ">
          <li className="px-4 py-2 font-semibold text-center bg-black text-white rounded-2xl border border-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 shadow-lg hover:shadow-neon-green">
            Home
          </li>
          <li className="px-4 py-2 font-semibold text-center bg-black text-white rounded-2xl border border-neon-pink hover:bg-neon-pink hover:text-black transition-all duration-300 shadow-lg hover:shadow-neon-pink">
            About Me
          </li>
          <li className="px-4 py-2 font-semibold text-center bg-black text-white rounded-2xl border border-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-lg hover:shadow-neon-blue">
            Projects
          </li>
          <li className="px-4 py-2 font-semibold text-center bg-black text-white rounded-2xl border border-neon-yellow hover:bg-neon-yellow hover:text-black transition-all duration-300 shadow-lg hover:shadow-neon-yellow">
            Stats
          </li>
          <li className="px-4 py-2 font-semibold text-center bg-black text-white rounded-2xl border border-neon-orange hover:bg-neon-orange hover:text-black transition-all duration-300 shadow-lg hover:shadow-neon-orange">
            Contacts
          </li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
