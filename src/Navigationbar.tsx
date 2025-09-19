import { useState } from "react";
import ABCMlogo from "./assets/ABCMlogo.svg";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
//import { useLocation } from "react-router-dom";
function Navigationbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  const sections = [
    { title: "About us", id: "about" },
    { title: "Our programs", id: "programs" },
    { title: "Testimonials", id: "testimonials" },
    { title: "Resources", id: "resources" },
    { title: "Contact", id: "footer" },
  ];

  const sectionsPhone = [
    { title: "About us", id: "about" },
    { title: "Our programs", id: "programs" },
    { title: "Testimonials", id: "testimonials" },
    { title: "Resources", id: "resourcePhone" },
    { title: "Contact", id: "footer" },
  ];

  const scrollToDonate = () => {
    scroller.scrollTo("contact", {
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
            className="sm:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <Link
            to="pageTop"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
          >
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              src={ABCMlogo}
              className="sm:w-[80px] md:w-[95px] cursor-pointer lg:w-[110px] xl:w-[130px] w-[70px] h-auto mr-[3vw]"
              alt="ABCM logo"
            />
          </Link>
          {sections.map((item, index) => (
            <Link
              key={index}
              smooth={true}
              duration={500}
              offset={-50}
              to={item.id}
              spy={true}
              activeClass="active-link"
              className="border-b-2 cursor-pointer hover:text-[#5C9DF5] border-transparent text-[#49504C] hover:border-[#E1781F] p-2 hidden sm:flex"
            >
              <p className="whitespace-nowrap font-semibold leading-none text-center sm:text-sm text-base">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={scrollToDonate}
          className="hover:bg-[#E1781F] text-center rounded-[1000px] p-2 gap-2 lg:w-[10vw] bg-[#5C9DF5]"
        >
          <p className="font-poppins cursor-pointer font-semibold sm:text-base text-sm ">
            Donate
          </p>
        </motion.div>
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
              onClick={() => {
                setActive(item.title);
                setIsOpen(false);
              }}
              className={`w-full text-[#49504C] p-2 gap-2 lg:w-[10vw] cursor-pointer ${
                active === item.title
                  ? "border-b border-[#E1781F]"
                  : "border-transparent"
              }}`}
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
