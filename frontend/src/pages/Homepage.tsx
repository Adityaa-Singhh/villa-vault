import React, { useEffect, useState } from "react";
import Marquee from "@/components/ui/marquee";
import AuthButton from "@/components/AuthButton";
import { supabase } from "@/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { useNavigate } from "react-router";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";


const services = [
  {
    title: "Ready To Use Solutions",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sed suscipit obcaecati unde explicabo animi expedita nesciunt officia, rerum iure consequatur assumenda velit.",
    image: "https://asp-crm.indotalent.com/landing/assets/img/services/1.png",
  },
  {
    title: "Ready To Use Solutions",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sed suscipit obcaecati unde explicabo animi expedita nesciunt officia, rerum iure consequatur assumenda velit.",
    image: "https://asp-crm.indotalent.com/landing/assets/img/services/2.png",
  },
  {
    title: "Ready To Use Solutions",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sed suscipit obcaecati unde explicabo animi expedita nesciunt officia, rerum iure consequatur assumenda velit.",
    image: "https://asp-crm.indotalent.com/landing/assets/img/services/3.png",
  },
];

const Homepage: React.FC = () => {
  const [, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/dashboard");
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [navigate]);

  return (
    <>
      <div className="bg-custom-pattern min-h-screen text-white font-sans overflow-hidden overflow-x-hidden">
        {/* Navbar */}
        <nav className="flex justify-between items-center h-16 max-w-7xl mx-auto px-4 py-0 pb-24 relative top-14 z-10 font-normal text-start text-base">
          <h1 className="text-2xl font-bold cursor-pointer ml-5">
            <a href="#home" className="hover:text-gray-300 cursor-pointer">Boldo</a>
          </h1>
          <div className="flex items-center space-x-6">
            <a href="#home" className="hover:text-gray-300 cursor-pointer text-green-500">Home</a>
            <a href="#product" className="hover:text-gray-300 cursor-pointer">Product</a>
            <a href="#services" className="hover:text-gray-300 cursor-pointer">Services</a>
            <a href="#about" className="hover:text-gray-300 cursor-pointer">About</a>
            <AuthButton />
          </div>
        </nav>

        <div className="block absolute top-0 right-0 quarter-circle bg-secondary w-[580px] h-[580px] opacity-10 z-0"></div>

        {/* Main Section */}
        <section>
          <div className="block font-normal text-start text-base min-h-[630px] mx-auto max-w-7xl px-4 relative">
            <div className="flex items-center py-[90px] h-auto max-w-7xl mx-[auto] mt-0 font-normal text-start text-base">
              {/* Text Section */}
              <div className="flex-1 max-w-[568px] pr-8 mr-[156px] ml-4">
                <h1 className="text-[48px] h-[128px] leading-normal mb-2 mt-0 w-full">Rapid digital transformation.</h1>
                <p className="text-gray-300 mb-8 font-normal text-start text-base h-[102px] my-[16px] w-full py-[16px]">
                  Experience a seamless and enjoyable digital transformation journey with our cutting-edge solutions, tailored to rapidly empower Small and Medium-sized Businesses (SMBs) in embracing the future.
                </p>
                <div className="flex items-center font-normal text-start text-base h-[76px] w-full gap-[16px]">
                  <button className="bg-green-400 text-primary px-9 py-3 rounded-full font-medium">Buy template</button>
                  <button className="border-2 border-white px-9 py-3 rounded-full font-medium hover:bg-gray-300 hover:text-black">Explore</button>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex-1 max-w-[494px]">
                <img
                  className="h-[423px] max-w-full object-contain"
                  src="https://asp-crm.indotalent.com/landing/assets/img/hero/hero-graphics.png"
                  alt="Hero Graphics"
                />
              </div>
            </div>
          </div>
        </section>

        <Marquee
          className="text-gray-400 text-lg py-8"
          pauseOnHover
          repeat={4}
          reverse={false}
        >
          <span>Boldo</span>
          <span>Presto</span>
          <span>Innovate</span>
          <span>Grow</span>
          <span>Success</span>
        </Marquee>
      </div>

      {/* Services Section */}
      <section className="py-[90px] font-normal text-start text-base relative block">
        <div className="mx-auto max-w-7xl px-4 relative text-start">
          <p className="mb-4 text-center block text-[20px] leading-[28px]">Our Services</p>
          <h2 className="mx-auto text-center text-[48px] leading-none mb-2">Optimized for Productivity</h2>
          <div className="flex flex-wrap justify-between font-normal text-start text-base mt-12">
            {services.map((service, index) => (
              <div key={index} className="flex-1 max-w-[calc(33.333%-1rem)] px-4">
                <img
                  className="inline-block w-full h-auto overflow-hidden align-middle"
                  src={service.image}
                  alt={`Service ${index + 1}`}
                />
                <h4 className="mt-3 my-1 block font-normal text-start text-[clamp(1rem, 2vw, 24px)] leading-none">
                  {service.title}
                </h4>
                <p className="text-[20px] leading-[28px] m-0">
                  {service.description}
                </p>
                <a href="#" className="border-b border-b-black border-x-black border-t-black cursor-pointer inline h-auto text-[20px] leading-7 pb-2 text-customBlue text-left font-[700]">Explore Page</a>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Business Management Section */}
      <section className="py-[90px] font-normal text-start text-base relative block">
        <div className="mx-auto max-w-7xl px-4 relative text-start">
          <div className="flex flex-wrap items-center font-normal text-base gap-8">
            {/* Image Section */}
            <div className="flex-1 px-4">
              <img
                className="w-full h-auto overflow-hidden align-middle rounded-md"
                src="https://asp-crm.indotalent.com/landing/assets/img/offer/1.png"
                alt="Managing Business"
              />
            </div>

            {/* Text Section */}
            <div className="flex-1 px-4">
              <h1 className="text-[40px] font-normal my-4 leading-none">
                Managing Business Easily.
              </h1>
              <ul className="list-outside my-12 font-normal text-base">
                <li className="custom-flex">
                  <span>Tailored software development</span>
                </li>
                <li className="custom-flex">
                  <span>Managed cloud service.</span>
                </li>
                <li className="custom-flex">
                  <span>ERP subject matter expert.</span>
                </li>
              </ul>
              <button className="flex items-center bg-deepOcean border-deepOcean border-solid border-2 rounded-[80px] text-white font-sans font-bold text-[16px] leading-[23.2px] px-[48px] py-[16px]">
                Start now
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Final Section */}
      <section className="box-border text-slateBlue block font-sans text-[16px] font-normal leading-[23.2px] p-0 pt-0 pb-[90.4px] relative text-start text-size-adjust-100 isolate w-auto h-auto">
        <div className="mx-auto max-w-7xl px-4 relative text-start">
          <div className="box-border text-slateBlue flex flex-row font-sans text-[16px] font-normal leading-[23.2px] text-start text-size-adjust-100 isolate w-auto h-auto justify-between">
            <div className="box-border text-slateBlue block flex-basis-auto flex-grow-0 flex-shrink-0 font-sans text-[16px] font-normal leading-[23.2px] text-start text-size-adjust-100 isolate w-auto h-auto mr-32">
              <h1 className="box-border text-jetBlack block font-sans text-[39.8131px] font-normal leading-normal mb-[48px] mt-0 mx-0 text-start text-size-adjust-100 isolate h-[53px]">
                Managing Business Easily.
              </h1>
              <ul className="box-border text-slateBlue block font-sans text-[16px] font-normal leading-[23.2px] mb-[16px] mt-0 mx-0 pl-0 text-start text-size-adjust-100 isolate h-auto list-none">
                <li className="flex items-center box-border text-jetBlack text-[23.04px] font-normal leading-[33.408px] mb-[24px] mt-[24px] p-[28.8px_16px] gap-[20px] rounded-[4.992px] shadow-[0_2px_4px_rgba(0,0,0,0.075)] text-left text-size-adjust-100 transition-all duration-[0.3s] ease-in-out list-none unicode-bidi-isolate h-auto">
                  Tailored software development.
                </li>
                <li className="flex items-center box-border text-jetBlack text-[23.04px] font-normal leading-[33.408px] mb-[24px] mt-[24px] p-[28.8px_16px] gap-[20px] rounded-[4.992px] shadow-[0_2px_4px_rgba(0,0,0,0.075)] text-left text-size-adjust-100 transition-all duration-[0.3s] ease-in-out list-none unicode-bidi-isolate h-auto">
                  Managed cloud service.
                </li>
                <li className="flex items-center box-border text-jetBlack text-[23.04px] font-normal leading-[33.408px] mb-[24px] mt-[24px] p-[28.8px_16px] gap-[20px] rounded-[4.992px] shadow-[0_2px_4px_rgba(0,0,0,0.075)] text-left text-size-adjust-100 transition-all duration-[0.3s] ease-in-out list-none unicode-bidi-isolate h-auto">
                  ERP subject matter expert.
                </li>
              </ul>
            </div>
            <div className="box-border text-slateBlue block basis-auto grow-0 shrink-0 font-sans text-[16px] font-normal leading-[23.2px] text-right text-size-adjust-100 isolate w-auto h-auto">
              <img
                className="box-border text-jetBlack  block font-sans text-[23.04px] font-normal leading-[33.408px] h-auto text-left w-auto list-none text-size-adjust-100"
                src="https://asp-crm.indotalent.com/landing/assets/img/offer/2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primaryColor box-border text-slateBlue block font-sans text-[16px] font-normal leading-[23.2px] p-0 pt-16 pb-[90.4px] relative text-start text-size-adjust-100 isolate w-auto h-auto">
        <div className="mx-auto max-w-7xl px-4 relative text-start">
          <div className="box-border text-slateBlue block basis-auto grow-0 shrink-0 font-sans text-[16px] font-normal leading-[23.2px] text-right text-size-adjust-100 isolate w-auto h-auto">
            <h1 className="box-border text-white block font-sans text-[39.8131px] font-normal h-[106px] leading-normal mb-2 mt-0 text-left w-full">
              Crafting Your Digital Success Story
            </h1>
          </div>

          <div className="box-border text-slateBlue block font-sans text-[16px] font-normal leading-[23.2px] mt-[80px] text-left w-full">
            <div className="flex justify-between gap-x-8 flex-wrap">
              {Array(3)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[11.2px] box-border text-slateBlue block flex-shrink-0 font-sans text-[16px] font-normal h-auto leading-[23.2px] p-[48px] text-left transition-transform w-[362.656px]"
                  >
                    <div className="flex flex-col h-auto justify-between">
                      <h4 className="text-jetBlack  text-[24px] leading-normal mb-2">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                      </h4>
                      <div className="flex items-center gap-x-4 mt-12">
                        <img
                          src="https://asp-crm.indotalent.com/landing/assets/img/review/1.png"
                          alt=""
                          className="w-[50px] h-[50px] rounded-full"
                        />
                        <div>
                          <p className="text-inkBlue font-bold">Albus Dumbledore</p>
                          <small>Project Manager</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>


      <section className="text-stoneGray font-sans text-[16px] font-normal h-[812.438px] leading-[23.2px] pb-[90.4px] pt-[90.4px] relative text-left w-full">
        <div className="mx-auto max-w-7xl px-4 relative text-start jus">
          <img className="w-full max-w-auto h-auto object-contain" src="https://asp-crm.indotalent.com/landing/assets/img/offer/3.png" alt="Offer" />
          <div className="flex flex-wrap items-center mt-[48px]">
            <div className="text-left w-full pl-[16px] pr-[16px]">
              <h2 className="text-jetBlack text-[33.1776px] font-normal h-[60px] leading-normal mb-[8px] mt-0 pt-[16px]">
                Crafting Your Digital Success Story.
              </h2>
            </div>
            <div className="text-left w-full pl-atuo pr-auto pt-14">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-charcoal text-[18px] font-semibold py-4 px-6 bg-cloudWhite rounded-md shadow-md hover:bg-[#e2e2e2] transition-all duration-300 ease-in-out">
                    Why digital transformation matters?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-stoneGray bg-powderedSnow rounded-md shadow-md">
                    Digital transformation revolutionizes housing management by automating processes, improving tenant communication, and providing real-time insights into property operations. With our software, you can streamline rent collection, maintenance requests, and property tracking, ensuring efficient management and enhanced tenant satisfaction. It’s the modern solution for seamless and hassle-free housing management.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-charcoal text-[18px] font-semibold py-4 px-6 bg-cloudWhite rounded-md shadow-md hover:bg-[#e2e2e2] transition-all duration-300 ease-in-out">
                    How collaboration & integrated system help?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-stoneGray bg-powderedSnow rounded-md shadow-md">
                    Collaboration and integrated systems enhance housing management by connecting all stakeholders—property managers, tenants, maintenance teams, and owners—on a single platform. This ensures seamless communication, faster decision-making, and better coordination. With an integrated system, tasks like maintenance requests, payments, and lease tracking are automated and easily accessible, improving efficiency, reducing errors, and creating a more transparent and responsive housing management experience.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>


      <section className="text-stoneGray font-sans text-[16px] font-normal h-[812.438px] leading-[23.2px] pb-[90.4px] pt-[90.4px] relative text-left w-full">
        <div className="mx-auto max-w-7xl px-4 relative text-start">
          <p className="box-border text-slateBlue block font-sans text-[19.2px] font-normal h-[27.8438px] leading-[27.84px] mb-[16px] mt-0 mx-0 text-center text-size-adjust-100 isolate w-[1168px]">Our Blog</p>

          <h2 className="box-border text-black block font-sans text-[47.7757px] font-normal h-[64px] leading-normal mb-[8px] mt-0 mx-[146px] text-center text-size-adjust-100 isolate w-[876px]">Managed Cloud Service</h2>

          <div className="box-border text-slateBlue flex flex-wrap font-sans text-[16px] font-normal mt-[80px] text-start text-size-adjust-100 isolate w-[1248px]">
            {/* Blog Post 1 */}
            <div className="box-border text-slateBlue block flex-none font-sans text-[16px] font-normal h-[456.828px] leading-[23.2px] mb-[48px] mt-0 max-w-full pl-[40px] pr-[40px] text-left text-size-adjust-100 isolate w-[416px]">
              <div className="box-border text-slateBlue flex flex-col font-sans text-[16px] font-normal h-full justify-between leading-[23.2px] text-left text-size-adjust-100 isolate w-[336px]">
                <a href="#">
                  <img className="rounded-[24px] box-border text-ashGray cursor-pointer inline font-sans text-[16px] font-normal h-[234.078px] leading-[23.2px] overflow-clip overflow-x-clip overflow-y-clip text-left text-size-adjust-100 align-middle w-[336px]" src="https://asp-crm.indotalent.com/landing/assets/img/blog/1.png" alt="" />
                </a>
                <div className="flex items-center box-border text-slateBlue gap-x-[8px] font-sans text-[16px] font-normal h-[23.1875px] justify-start leading-[23.2px] mt-[16px] gap-y-[8px] text-left text-size-adjust-100 unicode-bidi-isolate w-[336px]">
                  <a href="#">
                    <p className="box-border text-black cursor-pointer block text-[16px] font-extrabold h-[23.1875px] leading-[23.2px] m-0 text-left">Category</p>
                  </a>
                  <p className="box-border text-stoneGray block text-[16px] font-normal h-[23.1875px] leading-[23.2px] m-0 text-left w-[138.484px]">November 22, 2021</p>
                </div>
                <a href="#">
                  <h5 className="box-border text-black cursor-pointer block text-[19.2px] font-normal h-[104px] leading-normal m-[4px_0_16px_0] text-left w-[336px]">Managed cloud service providers have dedicated teams of experts who specialize in managing and optimizing cloud infrastructure.</h5>
                </a>
                <div className="flex items-center box-border text-stoneGray gap-x-4 text-[16px] font-normal h-[32px] justify-start leading-[23.2px] gap-y-4 text-left w-[336px]">
                  <img className="block box-border text-stoneGray text-[16px] font-normal h-[32px] leading-[23.2px] max-w-full overflow-clip overflow-x-clip overflow-y-clip text-left align-middle w-[32px]" src="https://asp-crm.indotalent.com/landing/assets/img/blog/profile1.png" alt="" />
                  <a href="#">
                    <p className="block box-border text-warmGray cursor-pointer text-[16px] font-normal h-[23.1875px] leading-[23.2px] mb-0 mt-0 ml-0 mr-0 text-left align-middle w-[99.2969px]">Chandler Bing</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="box-border text-slateBlue block flex-none font-sans text-[16px] font-normal h-[456.828px] leading-[23.2px] mb-[48px] mt-0 max-w-full pl-[40px] pr-[40px] text-left text-size-adjust-100 isolate w-[416px]">
              <div className="box-border text-slateBlue flex flex-col font-sans text-[16px] font-normal h-full justify-between leading-[23.2px] text-left text-size-adjust-100 isolate w-[336px]">
                <a href="#">
                  <img className="rounded-[24px] box-border text-ashGray cursor-pointer inline font-sans text-[16px] font-normal h-[234.078px] leading-[23.2px] overflow-clip overflow-x-clip overflow-y-clip text-left text-size-adjust-100 align-middle w-[336px]" src="https://asp-crm.indotalent.com/landing/assets/img/blog/2.png" alt="" />
                </a>
                <div className="flex items-center box-border text-slateBlue gap-x-[8px] font-sans text-[16px] font-normal h-[23.1875px] justify-start leading-[23.2px] mt-[16px] gap-y-[8px] text-left text-size-adjust-100 unicode-bidi-isolate w-[336px]">
                  <a href="#">
                    <p className="box-border text-black cursor-pointer block text-[16px] font-extrabold h-[23.1875px] leading-[23.2px] m-0 text-left">Category</p>
                  </a>
                  <p className="box-border text-stoneGray block text-[16px] font-normal h-[23.1875px] leading-[23.2px] m-0 text-left w-[138.484px]">November 22, 2021</p>
                </div>
                <a href="#">
                  <h5 className="box-border text-black cursor-pointer block text-[19.2px] font-normal h-[104px] leading-normal m-[4px_0_16px_0] text-left w-[336px]">Managed cloud service providers have dedicated teams of experts who specialize in managing and optimizing cloud infrastructure.</h5>
                </a>
                <div className="flex items-center box-border text-stoneGray gap-x-4 text-[16px] font-normal h-[32px] justify-start leading-[23.2px] gap-y-4 text-left w-[336px]">
                  <img className="block box-border text-stoneGray text-[16px] font-normal h-[32px] leading-[23.2px] max-w-full overflow-clip overflow-x-clip overflow-y-clip text-left align-middle w-[32px]" src="https://asp-crm.indotalent.com/landing/assets/img/blog/profile2.png" alt="" />
                  <a href="#">
                    <p className="block box-border text-warmGray cursor-pointer text-[16px] font-normal h-[23.1875px] leading-[23.2px] mb-0 mt-0 ml-0 mr-0 text-left align-middle w-[99.2969px]">Rachel Green</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="box-border text-slateBlue block flex-none font-sans text-[16px] font-normal h-[456.828px] leading-[23.2px] mb-[48px] mt-0 max-w-full pl-[40px] pr-[40px] text-left text-size-adjust-100 isolate w-[416px]">
              <div className="box-border text-slateBlue flex flex-col font-sans text-[16px] font-normal h-full justify-between leading-[23.2px] text-left text-size-adjust-100 isolate w-[336px]">
                <a href="#">
                  <img className="rounded-[24px] box-border text-ashGray cursor-pointer inline font-sans text-[16px] font-normal h-[234.078px] leading-[23.2px] overflow-clip overflow-x-clip overflow-y-clip text-left text-size-adjust-100 align-middle w-[336px]" src="https://asp-crm.indotalent.com/landing/assets/img/blog/3.png" alt="" />
                </a>
                <div className="flex items-center box-border text-slateBlue gap-x-[8px] font-sans text-[16px] font-normal h-[23.1875px] justify-start leading-[23.2px] mt-[16px] gap-y-[8px] text-left text-size-adjust-100 unicode-bidi-isolate w-[336px]">
                  <a href="#">
                    <p className="box-border text-black cursor-pointer block text-[16px] font-extrabold h-[23.1875px] leading-[23.2px] m-0 text-left">Category</p>
                  </a>
                  <p className="box-border text-stoneGray block text-[16px] font-normal h-[23.1875px] leading-[23.2px] m-0 text-left w-[138.484px]">November 22, 2021</p>
                </div>
                <a href="#">
                  <h5 className="box-border text-black cursor-pointer block text-[19.2px] font-normal h-[104px] leading-normal m-[4px_0_16px_0] text-left w-[336px]">Managed cloud service providers have dedicated teams of experts who specialize in managing and optimizing cloud infrastructure.</h5>
                </a>
                <div className="flex items-center box-border text-stoneGray gap-x-4 text-[16px] font-normal h-[32px] justify-start leading-[23.2px] gap-y-4 text-left w-[336px]">
                  <img className="block box-border text-stoneGray text-[16px] font-normal h-[32px] leading-[23.2px] max-w-full overflow-clip overflow-x-clip overflow-y-clip text-left align-middle w-[32px]" src="https://asp-crm.indotalent.com/landing/assets/img/blog/profile3.png" alt="" />
                  <a href="#">
                    <p className="block box-border text-warmGray cursor-pointer text-[16px] font-normal h-[23.1875px] leading-[23.2px] mb-0 mt-0 ml-0 mr-0 text-left align-middle w-auto">Phoebe Buffay</p>

                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Homepage;
