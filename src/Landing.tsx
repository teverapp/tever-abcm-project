import Leaves from "./assets/Leaves.svg";
import LeaveLeft from "./assets/LeaveLeft.svg";
import YellowFlower from "./assets/YellowFlower.svg";
import PictureLogo from "./assets/PictureLogo.svg";
import PeoplePicture from "./assets/PeoplePicture.svg";
import MainImage from "./assets/MainImage.svg";
import RightFlower from "./assets/RightFlower.svg";
import LeftFlower from "./assets/LeftFlower.svg";
import { useEffect, useState, useRef } from "react";
import SecondLeftLeave from "./assets/SecondLeftLeave.svg";
import SecondRightLeave from "./assets/SecondRightLeave.svg";
import LeaveSection2a from "./assets/LeaveSection2a.svg";
import LeaveSection2b from "./assets/LeaveSection2b.svg";
//import LastMainPicture from "./assets/LastMainPicture.svg";
function LandingPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const picturePlate = [
    {
      text: "Downloadable guides, such as “Managing Stress & Anxiety with Faith”",
      btn: "Access guides",
      bg: "./FirstPicture.jpg",
    },
    {
      text: "Articles on mental health and Christian living",
      btn: "Read articles",
      bg: "./SecondPicture.jpg",
    },
    {
      text: "Information on helplines and crisis support services",
      btn: "Get support",
      bg: "./ThirdPicture.jpg",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollX = scrollContainer.scrollLeft;
      const width = scrollContainer.offsetWidth;

      const index = Math.round(scrollX / (width * 0.7 + width * 0.04));
      setActiveIndex(index);
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="sm:px-0 px-[5vw] w-full justify-center mt-[20vw] items-center flex flex-col gap-[2vw] sm:mt-[10vw]">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full h-auto py-4 gap-4 text-center">
            <p className="font-poppins font-semibold text-2xl sm:text-6xl">
              Healing minds with trust,
              <br /> hope, & faith-guided care.
            </p>
          </div>
          <div>
            <p className="font-poppins text-base sm:text-base text-[#616B66] text-center leading-[140%]">
              Bringing true healing by nurturing both mind and spirit through
              professional care, evidence-based treatment, and God’s word.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col sm:flex-row h-auto w-full gap-4">
          <div className="flex justify-center cursor-pointer items-center rounded-[1000px] bg-[#5C9DF5] p-2 w-[40vw] sm:w-[15vw] font-semibold text-[#1D201E]">
            Get Support
          </div>
          <div className="flex justify-center cursor-pointer items-center rounded-[1000px] border-1 border-bg-[#1D201E] p-2 w-[40vw] sm:w-[15vw] font-semibold text-[#1D201E]">
            Donate
          </div>
        </div>
        <div className="flex gap-[-5vw] justify-center items-center w-full ">
          <img
            src={LeaveLeft}
            alt="photo"
            className="w-[10%] z-10 relative mr-[-1vw]"
          />
          <img
            src={MainImage}
            alt="photo"
            className="w-[80%] rounded-[16px] ml-[-2vw] border-radius-1"
          />
          <img
            src={Leaves}
            alt="photo"
            className="w-[10%] ml-[-3vw] mt-[10vw]"
          />
        </div>
      </section>
      <section
        id="about"
        className="grid sm:px-[10vw] px-[5vw] grid-cols-1 w-full lg:mt-0 sm:mt-[10vw] gap-[10vw] sm:gap-[3vw] justify-center items-center mt-[-20vw]"
      >
        <div className="gap-[2vw] grid sm:grid-cols-2 justify-center items-center w-full h-[50%]">
          <img alt="picture" src={PictureLogo} className="h-full w-full" />
          <div className="grid grid-cols-1 justify-center w-full h-full items-center py-[4vw]">
            <div className="w-full h-auto">
              <p className="text-[#1D201E] w-full font-poppins font-semibold text-3xl">
                Who we are
              </p>
            </div>
            <div className="grid grid-cols-1 justify-center sm:py-0 py-[2vw] items-center gap-[1vw]">
              <p className="w-full font-poppins leading-[140%] text-[#616B66] text-sm sm:text-lg">
                A Beautiful and Clear Mind (ABCM) Foundation is a faith-
                <br />
                driven mental health initiative committed to helping
                <br />
                individuals experience emotional healing, spiritual renewal,
                <br /> and community support. We understand that life’s
                <br /> challenges can cloud the mind and weigh down the heart—
                <br />
                but with the right support, transformation is possible.
              </p>
              <p className="w-full sm:text-lg text-sm font-poppins leading-[140%] text-[#616B66]">
                Our foundation stands on the values of Healing, Trust, Faith,
                <br />
                and Community. We bring together evidence-based
                <br /> practices and biblical wisdom to create a safe space for
                <br /> recovery and growth.
              </p>
            </div>
          </div>
        </div>
        <div className="gap-[2vw] grid grid-cols-2 justify-center items-center w-full h-[50%]">
          <div className="py-[5vw] grid grid-cols-1 justify-center w-full h-full items-center">
            <div className="w-full h-auto">
              <p className="text-[#1D201E] w-full font-poppins font-semibold text-3xl">
                Mission & vision
              </p>
            </div>
            <div className="grid grid-cols-1 justify-center items-center gap-[1vw]">
              <p className="w-full font-poppins text-sm break-words leading-[140%] text-[#616B66] sm:text-lg">
                <strong>Mission</strong>
                <br />
                Our mission is to focus on mind healing, build trust, and
                <br />
                provide a consistent support system that raises hope. We
                <br />
                are committed to delivering professional and evidence-
                <br />
                based treatment, grounded in the Word of God, and driven
                <br />
                by integrity and excellence.
              </p>
              <p className="w-full font-poppins text-sm break-words leading-[140%] text-[#616B66] sm:text-lg">
                <strong>Vission</strong>
                <br />
                We envision a world where everyone can access hope,
                <br />
                healing, health, trust, confidentiality, recovery, and faith.
              </p>
            </div>
          </div>
          <img alt="picture" src={YellowFlower} className="w-full h-full" />
        </div>
      </section>
      <section
        id="programs"
        className="grid grid-cols-1 px-[5vw] mt-[40vw] sm:mt-[20vw] justify-center items-center w-full gap-[3vw]"
      >
        <div className="flex justify-center items-center w-full ">
          <img
            src={LeaveSection2a}
            alt="photo"
            className="w-[5%] sm:w-[10%] z-10 relative "
          />
          <img
            src={PeoplePicture}
            alt="photo"
            className="w-[80%] lg:w-[85%] rounded-[16px] border-radius-1  ml-[2vw] sm:ml-[4vw]"
          />
          <img
            src={LeaveSection2b}
            alt="photo"
            className="w-[5%] lg:w-[10%] mt-[10vw] mr-[5vw]"
          />
        </div>
        <div className="flex flex-col justify-center text-center items-center w-full lg:h-[81px] gap-[1vw]">
          <p className="font-poppins font-semibold text-3xl text-[#1D201E]">
            What we do
          </p>
          <p className="font-poppins text-lg text-[#616B66] leading-[140%]">
            We provide care that is holistic, compassionate, and faith-centered
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:h-[332px] gap-[2vw]">
          <div className="w-full h-full rounded-[16px] p-[4vw] sm:p-[1vw] bg-[#F4F5F5] items-center flex justify-center">
            <p className="font-poppins break-words text-lg leading-[140%] text-[#616B66]">
              <span className="block">
                <strong>Counseling & therapy</strong>
              </span>
              <span className="block mt-2">
                Confidential one-on-one and group therapy sessions led by
                licensed professionals, designed to promote emotional stability
                and spiritual peace.
              </span>
            </p>
          </div>
          <div className="w-full h-full rounded-[16px] p-[4vw] sm:p-[1vw] bg-[#F4F5F5] items-center flex justify-center">
            <p className="font-poppins break-words text-lg leading-[140%] text-[#616B66]">
              <span className="block">
                <strong>Support</strong>
              </span>
              <span className="block mt-2">
                Groups Safe, welcoming environments where individuals can share
                their experiences, learn from others, and heal together.
              </span>
            </p>
          </div>
          <div className="w-full h-full rounded-[16px] p-[4vw] sm:p-[1vw] bg-[#F4F5F5] items-center flex justify-center">
            <p className="font-poppins break-words text-lg leading-[140%] text-[#616B66]">
              <span className="block">
                <strong>Faith & Wellness Integration</strong>
              </span>
              <span className="block mt-2">
                Programs that combine biblical wisdom with therapeutic practices
                to strengthen both the mind and spirit.
              </span>
            </p>
          </div>
          <div className="w-full h-full rounded-[16px] p-[4vw] sm:p-[1vw] bg-[#F4F5F5] items-center flex justify-center">
            <p className="font-poppins break-words text-lg leading-[140%] text-[#616B66]">
              <span className="block">
                <strong>Education & Awareness</strong>
              </span>
              <span className="block mt-2">
                Community outreach, workshops, and seminars that break stigmas,
                raise awareness, and empower people to care for their mental
                health.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section
        id="testimonials"
        className="flex w-full px-[1vw] sm:px-[1vw] mt-[10vw] m-auto lg:mt-0 lg:mx-auto items-center justify-center rounded-[16px]"
      >
        <img
          src={RightFlower}
          alt="picture"
          className="lg:mt-[38%] lg:w-[20vw] sm:mt-[10vw] mt-[110%] z-10 w-[30%] mr-[-15%]"
        />
        <div className="py-[2vw] sm:p-[4vw] gap-[3vw] w-[60vw] flex justify-center items-center flex-col sm:w-[80vw] h-full rounded-[16px] bg-[#F5EBDD] lg:ml-[5vw]">
          <p className="font-poppins lg:text-4xl text-3xl font-semibold text-[#1D201E]">
            Testimonals
          </p>
          <div className="rounded-[16px] gap-[2vw] grid lg:grid-cols-2 grid-cols-1 w-[90%] lg:h-[180px]">
            <div className="border-[#AFB6B2] h-full w-full rounded-[1px] flex justify-center items-center border-[1px] p-[2vw]">
              <p className="text-lg font-poppins italic text-[#616B66] leading-[140%]">
                ABCM gave me hope when I thought all was lost. The counseling
                and faith-based support helped me rebuild my life with
                confidence and peace.
              </p>
            </div>
            <div className="rounded-[16px] border-[#AFB6B2] border-bg-[#AFB6B2] h-full border-[1px] w-full rounded-[1px] flex justify-center items-center p-[2vw]">
              <p className="text-lg font-poppins italic text-[#616B66] leading-[140%]">
                What makes ABCM different is the balance between professional
                care and spiritual guidance. I found both healing and direction
                for my future.
              </p>
            </div>
          </div>
        </div>
        <img
          src={LeftFlower}
          alt="picture"
          className="lg:mb-[30%] lg:w-[20vw] sm:mb-[30%] mb-[110%] z-10 w-[30%] sm:ml-[-10%] ml-[-12%]"
        />
      </section>
      <section
        id="donate"
        className="gap-[5vw] sm:gap-[3vw] grid px-[5vw] justify-center items-center grid-cols-1 w-full"
      >
        <div className="lg:h-[81px] text-center gap-[1vw] flex justify-center items-center flex-col w-full">
          <span className="text-[#1D201E] font-poppins font-semibold text-3xl">
            Be part of a healing community
          </span>
          <span className="text-[#616B66] sm:text-lg font-poppins leading-[140%]">
            Your care and support help create safe spaces for healing, hope, and
            faith-guided wellness.
          </span>
        </div>
        <div className="grid sm:grid-cols-3 text-[#616B66] grid-cols-1 gap-[2vw] w-full lg:h-[156px]">
          <div className="bg-[#F4F5F5] w-full h-full rounded-[16px] p-[2vw] gap-[2vw]">
            <span className="font-bold leading-[140%] text-lg">Donate</span>
            <span className="font-semi-bold block mt-2 leading-[140%] text-lg">
              Help fund counseling, support groups, and community programs that
              restore hope.
            </span>
          </div>
          <div className="bg-[#F4F5F5] w-full h-full rounded-[16px] p-[2vw] gap-[2vw]">
            <span className="font-bold leading-[140%] text-lg">Volunteer</span>
            <span className="font-semi-bold block mt-2 leading-[140%] text-lg">
              Offer your time, skills, and empathy to walk alongside those in
              need.
            </span>
          </div>
          <div className="bg-[#F4F5F5] w-full h-full rounded-[16px] p-[2vw] gap-[2vw]">
            <span className="font-bold leading-[140%] text-lg">
              Partner with us
            </span>
            <span className="font-semi-bold block mt-2 leading-[140%] text-lg">
              Collaborate with us to expand mental wellness support across
              communities.
            </span>
          </div>
        </div>
        <div className="mx-auto lg:w-[200px] flex justify-center items-center h-auto p-[3vw] sm:p-[1vw] gap-[8px] rounded-[1000px] bg-[#5C9DF5]">
          <p className="font-poppins cursor-pointer font-semibold text-base font-[#1D201E]">
            Join community
          </p>
        </div>
      </section>
      <section
        id="resources"
        className="gap-[2vw] hidden w-full mt-[10vw] lg:grid lg:grid-cols-3 px-[10vw]"
      >
        <div
          className="py-[1vw] px-[2vw] w-full h-[30vw] rounded-[16px] 
               bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(20,20,20,1)_100%),url('/FirstPicture.jpg')] 
               bg-cover bg-center flex flex-col justify-end"
        >
          <div className="flex z-10 flex-col gap-[1vw] w-full h-fit ">
            <span className="font-poppins text-base leading-[140%] text-white">
              Downloadable guides, such as “Managing Stress & Anxiety with
              Faith”
            </span>
            <div className="lg:w-[210px] h-[40%] cursor-pointer bg-white rounded-[1000px] border-1px border-[#1D201E] p-[1vw] flex justify-center items-center">
              <p className="font-semibold text-base font-[#1D201E]">
                Access guides
              </p>
            </div>
          </div>
        </div>
        <div
          className="py-[1vw] px-[2vw] w-full h-full rounded-[16px] 
               bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(20,20,20,1)_100%),url('/SecondPicture.jpg')] 
               bg-cover bg-center flex flex-col justify-end"
        >
          <div className="flex z-10 flex-col gap-[1vw] w-full h-fit ">
            <span className="font-poppins text-base leading-[140%] text-white">
              Articles on mental health and Christian living
            </span>
            <div className="lg:w-[210px] h-[40%] cursor-pointer bg-white rounded-[1000px] border-1px border-[#1D201E] p-[1vw] flex justify-center items-center">
              <p className="font-semibold text-base font-[#1D201E]">
                Read articles
              </p>
            </div>
          </div>
        </div>
        <div
          className="py-[1vw] px-[2vw] w-full h-full rounded-[16px] 
               bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(20,20,20,1)_100%),url('/ThirdPicture.jpg')] 
               bg-cover bg-center flex flex-col justify-end"
        >
          <div className="flex z-10 flex-col gap-[1vw] w-full h-fit ">
            <span className="font-poppins text-base leading-[140%] text-white">
              Information on helplines and crisis support services
            </span>
            <div className="lg:w-[210px] h-[40%] cursor-pointer bg-white rounded-[1000px] border-1px border-[#1D201E] p-[1vw] flex justify-center items-center">
              <p className="font-semibold text-base font-[#1D201E]">
                Get support
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-[10vw] lg:h-[500px] px-[10vw] lg:hidden">
        <div
          id="resourcePhone"
          ref={scrollRef}
          className="flex gap-[4vw] overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {picturePlate.map((item, index) => (
            <div
              key={index}
              className="w-[70%] h-[300px] py-[3vw] flex-shrink-0 snap-center rounded-[16px] 
        bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(20,20,20,1)_100%)] 
        bg-cover bg-center flex flex-col justify-end p-[2vw]"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(20,20,20,1) 100%), url(${item.bg})`,
              }}
            >
              <div className="flex z-10 flex-col gap-[1vw] w-full h-fit">
                <span className="font-poppins text-base leading-[140%] text-white">
                  {item.text}
                </span>
                <div className="lg:w-[210px] h-[40%] cursor-pointer bg-white rounded-[1000px] p-[1vw] flex justify-center items-center">
                  <p className="font-semibold text-base font-[#1D201E]">
                    {item.btn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="resources" className="flex justify-center gap-2 mt-4">
          {picturePlate.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeIndex === index ? "bg-black" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </section>
      <section
        id="contact"
        className="mb-[10vw] w-full mt-[10%] flex justify-center px-[5vw] lg:px-0 items-center gap-[10vw] flex-col"
      >
        <div className="h-full w-full grid grid-cols-1">
          <div className="flex justify-center">
            <img
              alt="picture"
              src={SecondLeftLeave}
              className="lg:w-[150px] h-[60px] w-[60px] lg:h-[150px] sm:mr-[1.5vw] mr-[2px]"
            />
            <img
              alt="picture"
              src={"./LastPicture.jpg"}
              className="w-[90vw] lg:w-full sm:w-[90%] h-[30vw] rounded-[16px] mr-[-1vw]"
            />
            <img
              alt="picture"
              src={SecondRightLeave}
              className="lg:w-[150px] h-[60px] w-[60px] lg:h-[150px] sm:w-[15vw] mt-[15vw] mr-[4vw]"
            />
          </div>
          <div className="flex flex-col justify-center text-center items-center w-full lg:h-[81px] gap-[1vw] my-[2vw]">
            <p className="font-poppins font-semibold text-2xl sm:text-3xl text-[#1D201E]">
              We’re here for you
            </p>
            <p className="font-poppins text-sm px-[3vw] sm:text-lg text-[#616B66] leading-[140%]">
              Whether you need support, want to volunteer, or would like to
              partner with us, we’d love to hear from you.
            </p>
          </div>
          <div className="m-auto lg:p-[1vw] w-full lg:w-[30vw] flex justify-center items-center lg:h-[465px]">
            <form
              action="/submit"
              method="POST"
              className="w-full h-full flex flex-col gap-[1vw] justify-center items-center"
            >
              <div className="flex gap-[0.5vw] flex-col w-full h-auto justify-center">
                <label className="text-[#1D201E] font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  required
                  className="w-full h-[48px] border border-[#DFE2E0] rounded-[16px] px-[2vw] placeholder:text-[#DFE2E0]"
                />
              </div>
              <div className="flex gap-[0.5vw] flex-col w-full h-auto justify-center">
                <label className="text-[#1D201E] font-semibold">Email</label>
                <input
                  type="text"
                  placeholder="Enter email address"
                  required
                  className="w-full h-[48px] border border-[#DFE2E0] rounded-[16px] px-[2vw] placeholder:text-[#DFE2E0]"
                />
              </div>
              <div className="flex gap-[0.5vw] flex-col w-full h-auto justify-center">
                <label className="text-[#1D201E] font-semibold">Message</label>
                <textarea
                  placeholder="Start typing..."
                  required
                  className="w-full h-[160px] border border-[#DFE2E0] rounded-[16px] px-[2vw] pt-2 placeholder:text-[#DFE2E0] resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#5C9DF5] hover:bg-[#E1781F] text-[#1D201E] p-[2vw] mt-[2vw] cursor-pointer sm:mt-[1vw] sm:p-[1vw] font-semibold w-full rounded-[1000px]"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default LandingPage;
