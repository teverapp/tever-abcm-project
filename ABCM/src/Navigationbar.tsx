import { NavLink } from "react-router-dom";
import { useState } from "react";
import ABCMlogo from "./assets/ABCMlogo.svg";
import { Menu, X } from "lucide-react";

function Navigationbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sections = [
    { title: "Home", path: "/" },
    { title: "About us", path: "./about-us" },
    { title: "Our programs", path: "./programs" },
    { title: "Testimonials", path: "./testimonials" },
    { title: "Resources", path: "./resources" },
    { title: "Contact", path: "./contact" },
  ];
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white py-[3vw] px-[10vw] shadow flex justify-between items-center lg:h-[96px] sm:px-[10vw] sm:py-0 z-50">
        <div className="flex justify-center items-center gap-[2vw]">
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <img
            src={ABCMlogo}
            className="sm:w-[80px] md:w-[95px] lg:w-[110px] xl:w-[130px] w-[70px] h-auto"
            alt="ABCM logo"
          />
          {sections.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 border-[#E1781F] text-[#5C9DF5]"
                    : "border-b-2 border-transparent text-[#49504C]"
                } hover:border-[#E1781F] p-2 hidden lg:flex`
              }
            >
              <p className="whitespace-nowrap font-semibold leading-none text-center text-base lg:text-lg">
                {item.title}
              </p>
            </NavLink>
          ))}
        </div>
        <div className="text-center rounded-[1000px] p-2 sm:p-4 gap-2 lg:w-40 h-[60%] bg-[#5C9DF5]">
          <p className="font-poppins cursor-pointer font-semibold sm:text-base text-sm ">
            Donate
          </p>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden absolute top-[12vw] fixed z-50 left-0 w-full bg-white shadow-md flex flex-col items-start px-[10vw] py-4 gap-4 z-40">
          {sections.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)} // close menu when link clicked
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 border-[#E1781F] text-[#5C9DF5]"
                    : "border-b-2 border-transparent text-[#49504C]"
                } hover:border-[#E1781F] w-full`
              }
            >
              <p className="font-semibold text-base">{item.title}</p>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
export default Navigationbar;
