import tiktok from "./assets/tiktok.svg";
import twitter from "./assets/twitter.svg";
import youtube from "./assets/youtube.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import ABCMlogo from "./assets/ABCMlogo.svg";
import { Link } from "react-scroll";
import linkedin from "./assets/linkedin.svg";

function Footer() {
  const explore = [
    { title: "About us", id: "about" },
    { title: "Our programs", id: "programs" },
    { title: "Testimonials", id: "testimonials" },
    { title: "Resources", id: "resources" },
    { title: "Contact", id: "contact" },
  ];

  return (
    <>
      <section className="flex justify-center items-center bg-[#FAFAFA] px-[5vw] sm:px-[5vw] w-full lg:h-[25vw]">
        <div className="flex w-full h-full flex-col gap-[5vw] sm:gap-[3vw] justify-center items-center">
          <div className="flex sm:justify-between w-full lg:h-[202px] flex-col sm:flex-row">
            <div className="flex w-full sm:w-[70%] h-full gap-[2vw] flex-col">
              <div className="flex justify-center flex-col  gap-[1vw] items-center sm:items-start">
                <div className="flex justify-center sm:items-end items-center w-[10vw] h-[10vw]]">
                  <img src={ABCMlogo} alt="ABCMLogo" className="lg:w-[50vw]" />
                </div>
                <div className="lg:w-[265px] lg:h-[61.25px] flex text-center sm:text-start px-[1vw] sm:px-0 sm:text-end">
                  <p className="font-poppins font-semibold text-sm text-[#4F4F4F] leading-[140%] italic">
                    “For I will restore health unto thee, and I will heal thee
                    of thy wounds, saith the Lord.” – Jeremiah 30:17
                  </p>
                </div>
              </div>
              <div className="flex text-[#4F4F4F] w-full h-auto flex-col gap-[2vw] sm:gap-[1vw] sm:flex-row">
                {explore.map((items, index) => (
                  <Link
                    key={index}
                    to={items.id}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    spy={true}
                    activeClass="active-link"
                    className="w-fit hover:text-[#5C9DF5] h-auto cursor-pointer hover:border-[#E1781F]
 border-b-1 border-b-[#616B66]"
                  >
                    <p className="font-poppins font-semibold text-sm leading-[140%]">
                      {items.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex sm:gap-[3vw] gap-[5vw] flex-col w-full h-auto">
              <div className="flex flex-col items-end w-full h-auto gap-4 ml-auto">
                <p className="font-inter text-[#B0B0B0] font-bold text-sm leading-[140%]">
                  Contact us
                </p>
                <div className="flex flex-col items-end h-auto w-auto gap-2">
                  <p className="font-inter font-semibold text-sm leading-[140%] text-[#4F4F4F]">
                    Phone: [Insert Number]
                  </p>
                  <p className="font-inter font-semibold text-sm leading-[140%] text-[#4F4F4F]">
                    Email: [Insert Email Address]
                  </p>
                  <p className="font-inter font-semibold text-sm leading-[140%] text-[#4F4F4F]">
                    Address: [Insert Physical Address]
                  </p>
                </div>
              </div>
              <div className="justify-end flex w-full h-auto gap-3">
                <img
                  src={linkedin}
                  alt="linkedIn"
                  className="w-[28px] h-[28]"
                />
                <img src={youtube} alt="Youtube" className="w-[28px] h-[28]" />
                <img src={tiktok} alt="Tiktok" className="w-[28px] h-[28]" />
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-[28px] h-[28]"
                />
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-[28px] h-[28]"
                />
                <img src={twitter} alt="Twitter" className="w-[28px] h-[28]" />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col w-full justify-between">
            <div className="flex w-auto h-auto">
              <p className="font-poppins font-semibold text-[#6D6D6D] text-sm leading-[140%]">
                © 2025 TABTech. All rights reserved
              </p>
            </div>
            <div className="flex sm:justify-end w-auto h-auto">
              <p className="font-poppins font-semibold text-sm text-[#6D6D6D] leading-[140%]">
                Privacy Policy | Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
