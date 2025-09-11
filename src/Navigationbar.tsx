import { useState } from "react";
import ABCMlogo from "./assets/ABCMlogo.svg";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { scroller } from "react-scroll";

function Navigationbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sections = [
    { title: "About us", id: "about" },
    { title: "Our programs", id: "programs" },
    { title: "Testimonials", id: "testimonials" },
    { title: "Resources", id: "resources" },
    { title: "Contact", id: "contact" },
  ];

  const sectionsPhone = [
    { title: "About us", id: "about" },
    { title: "Our programs", id: "programs" },
    { title: "Testimonials", id: "testimonials" },
    { title: "Resources", id: "resourcePhone" },
    { title: "Contact", id: "contact" },
  ];

  const scrollToDonate = () => {
    scroller.scrollTo("donate", {
      smooth: true,
      duration: 500,
      offset: -100,
    });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white py-[3vw] px-[10vw] shadow flex justify-between items-center lg:h-[6vw] sm:px-[10vw] sm:py-0 z-50">
        <div className="flex justify-center items-center gap-[1vw]">
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <img
            src={ABCMlogo}
            className="sm:w-[80px] md:w-[95px] lg:w-[110px] xl:w-[130px] w-[70px] h-auto mr-[3vw]"
            alt="ABCM logo"
          />
          {sections.map((item, index) => (
            <Link
              key={index}
              smooth={true}
              duration={500}
              offset={-50}
              to={item.id}
              spy={true}
              activeClass="active-link"
              className="border-b-2 cursor-pointer hover:text-[#5C9DF5] border-transparent text-[#49504C] hover:border-[#E1781F] p-2 hidden lg:flex"
            >
              <p className="whitespace-nowrap font-semibold leading-none text-center sm:text-sm text-base">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
        <div
          onClick={scrollToDonate}
          className="hover:bg-[#E1781F] text-center rounded-[1000px] p-2 gap-2 lg:w-[10vw] bg-[#5C9DF5]"
        >
          <p className="font-poppins cursor-pointer font-semibold sm:text-base text-sm ">
            Donate
          </p>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden absolute top-[12vw] fixed z-50 left-0 w-full bg-white shadow-md flex flex-col items-start px-[10vw] py-4 gap-1 z-40">
          {sectionsPhone.map((item, index) => (
            <Link
              key={index}
              smooth={true}
              duration={500}
              offset={-50}
              to={item.id}
              onClick={() => setIsOpen(false)}
              activeClass="active-link"
              className="w-full text-[#49504C] cursor-pointer p-2 gap-2 lg:w-[10vw] cursor-pointer"
            >
              <p className="font-semibold text-base">{item.title}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
export default Navigationbar;
