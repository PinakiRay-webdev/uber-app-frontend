import React, { useEffect, useRef } from "react";
import { useLocation} from "react-router-dom";
import { leftNavElements } from "../../constants/constants.js";
const Navbar = () => {
  const location = useLocation();
  const leftNavref = useRef(null);
  const rightNavref = useRef(null);

  useEffect(() => {
    const pathname = location.pathname.split("/")[1];
    if (pathname === "signup" || pathname === "signin") {
      leftNavref.current.style.display = "none";
      rightNavref.current.style.display = "none";
    }
  });

  return (
    <nav className="bg-black py-4 lg:px-30 md:px-22 sm:px-12 px-8 flex justify-between">
      <div id="left" className="flex items-center gap-6">
        <h3 className="text-white text-2xl font-[regular1]">Uber</h3>
        <ul ref={leftNavref} className={`flex gap-1`}>
          {leftNavElements.map((ele, index) => (
            <li
              key={index}
              className="text-white capitalize text-sm font-[medium] cursor-pointer hover:bg-zinc-900 px-3 py-1 rounded-full"
            >
              {ele}
            </li>
          ))}
        </ul>
      </div>
      <div ref={rightNavref} id="right" className="">
        <ul className="flex gap-1">
          <li
            className="text-white capitalize text-sm font-[medium] cursor-pointer hover:bg-zinc-900 px-3 py-1 rounded-full"
          >
            Logout
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
