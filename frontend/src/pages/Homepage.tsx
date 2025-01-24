import React, { useState } from "react";
import Marquee from "@/components/ui/marquee";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import PageWrapper from "@/components/PageWrapper";

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
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <PageWrapper
        title="Villa Vault"
        description="One stop solution for your hunt for new property"
        ogTitle="Villa Vault"
        ogDescription="One stop solution for your hunt for new property"
        ogUrl={import.meta.env.VITE_BASE_URL}
        ogImage=""
      >

        <div className="page-container bg-custom-pattern min-h-screen text-white font-sans overflow-hidden">

          <div className="absolute top-0 right-0 quarter-circle bg-secondary w-80 h-80 sm:w-[580px] sm:h-[580px] opacity-10 z-0"></div>

          {/* Main Section */}
          <section>
            <div className="font-normal text-start text-base min-h-[630px] mx-auto max-w-7xl px-4 relative">
              <div className="flex flex-col-reverse sm:flex-row items-center py-12 sm:py-[90px] h-auto">
                {/* Text Section */}
                <div className="flex-1 max-w-full sm:max-w-[568px] sm:pr-8 sm:mr-[156px] sm:ml-4 text-center sm:text-left">
                  <h1 className="text-3xl sm:text-[48px] leading-normal mb-2">Rapid digital transformation.</h1>
                  <p className="text-gray-300 mb-6 sm:mb-8 text-[16px] sm:text-base">
                    Experience a seamless and enjoyable digital transformation journey with our cutting-edge solutions, tailored to rapidly empower Small and Medium-sized Businesses (SMBs) in embracing the future.
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
                    <button className="bg-green-400 text-primary px-6 py-3 sm:px-9 rounded-full font-medium">Buy template</button>
                    <button className="border-2 border-white px-6 py-3 sm:px-9 rounded-full font-medium hover:bg-gray-300 hover:text-black">Explore</button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 max-w-full sm:max-w-[494px]">
                  <img
                    className="h-auto sm:h-[423px] max-w-full object-contain"
                    src="https://asp-crm.indotalent.com/landing/assets/img/hero/hero-graphics.png"
                    alt="Hero Graphics"
                  />
                </div>
              </div>
            </div>
          </section>

          <Marquee
            className="text-gray-400 text-sm sm:text-lg py-4 sm:py-8"
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
        <section className="section-css1">
          <div className="mx-auto max-w-7xl px-4 relative text-start">
            <p className="mb-4 text-center text-[16px] sm:text-[20px] leading-[24px] sm:leading-[28px]">
              Our Services
            </p>
            <h2 className="text-center text-[32px] sm:text-[48px] leading-none mb-2">
              Optimized for Productivity
            </h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center sm:justify-between mt-12 gap-6 sm:gap-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-1 max-w-full px-4 text-center sm:text-left"
                >
                  <img
                    className="inline-block w-full h-auto overflow-hidden align-middle"
                    src={service.image}
                    alt={`Service ${index + 1}`}
                  />
                  <h4 className="mt-3 text-[18px] sm:text-[clamp(1rem, 2vw, 24px)] leading-none">
                    {service.title}
                  </h4>
                  <p
                    className={`text-[14px] sm:text-[20px] leading-[24px] sm:leading-[28px] transition-all duration-300 ${expanded === index
                      ? "line-clamp-none"
                      : "line-clamp-3 sm:line-clamp-none"
                      }`}
                  >
                    {service.description}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="border-b border-black cursor-pointer text-[14px] sm:text-[20px] text-customBlue font-bold mt-2"
                  >
                    {expanded === index ? "Show Less" : "Read More"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Business Management Section */}
        <section className="section-css1">
          <div className="mx-auto max-w-7xl px-4 relative text-start">
            <div className="flex md:flex-row flex-col items-center font-normal text-base gap-8">
              {/* Image Section */}
              <div className="flex-1 px-4">
                <img
                  className="w-full h-auto overflow-hidden align-middle rounded-md"
                  src="https://asp-crm.indotalent.com/landing/assets/img/offer/1.png"
                  alt="Managing Business"
                />
              </div>

              {/* Text Section */}
              <div className="flex-1 px-4 text-center sm:text-left">
                <h1 className="text-2xl sm:text-[40px] font-normal my-4 leading-snug">
                  Managing Business Easily.
                </h1>
                <ul className="list-outside my-6 sm:my-12 font-normal text-sm sm:text-base">
                  <li className="custom-flex mb-2">
                    <span>Tailored software development</span>
                  </li>
                  <li className="custom-flex mb-2">
                    <span>Managed cloud service.</span>
                  </li>
                  <li className="custom-flex mb-2">
                    <span>ERP subject matter expert.</span>
                  </li>
                </ul>
                <button className="flex mx-auto sm:mx-0 items-center bg-deepOcean border-deepOcean border-solid border-2 rounded-full text-white font-sans font-bold text-sm sm:text-[16px] leading-[23.2px] px-6 sm:px-[48px] py-2 sm:py-[16px]">
                  Start now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="section-css2 text-size-adjust-100">
          <div className="mx-auto max-w-7xl px-4 relative text-start">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
              {/* Text Section */}
              <div className="flex-1">
                <h1 className="text-2xl sm:text-[40px] font-normal leading-snug mb-6">
                  Managing Business Easily.
                </h1>
                <ul className="list-none">
                  <li className="flex items-center text-lg sm:text-[23.04px] font-normal leading-8 sm:leading-[33.408px] mb-4 sm:mb-6 p-4 sm:p-[28.8px_16px] gap-4 sm:gap-[20px] rounded-md shadow-md">
                    Tailored software development.
                  </li>
                  <li className="flex items-center text-lg sm:text-[23.04px] font-normal leading-8 sm:leading-[33.408px] mb-4 sm:mb-6 p-4 sm:p-[28.8px_16px] gap-4 sm:gap-[20px] rounded-md shadow-md">
                    Managed cloud service.
                  </li>
                  <li className="flex items-center text-lg sm:text-[23.04px] font-normal leading-8 sm:leading-[33.408px] mb-4 sm:mb-6 p-4 sm:p-[28.8px_16px] gap-4 sm:gap-[20px] rounded-md shadow-md">
                    ERP subject matter expert.
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="flex-1">
                <img
                  className="w-full h-auto rounded-md"
                  src="https://asp-crm.indotalent.com/landing/assets/img/offer/2.png"
                  alt="Managing Business"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="bg-primaryColor box-border textslateBlue block font-sans text-[16px] font-normal leading-[23.2px] p-0 pt-16 pb-[90.4px] relative text-start text-size-adjust-100 isolate w-auto h-auto">
          <div className="mx-auto max-w-7xl px-4 relative text-start">
            <div className="box-border textslateBlue block basis-auto grow-0 shrink-0 font-sans text-[16px] font-normal leading-[23.2px] text-right text-size-adjust-100 isolate w-auto h-auto">
              <h1 className="box-border text-white block font-sans text-[39.8131px] font-normal h-[106px] leading-normal mb-2 mt-0 text-left w-full">
                Crafting Your Digital Success Story
              </h1>
            </div>

            <div className="box-border textslateBlue block font-sans text-[16px] font-normal leading-[23.2px] mt-[80px] text-left w-full">
              <div className="flex flex-wrap justify-between gap-x-8 gap-y-6 sm:gap-y-8">
                {Array(3)
                  .fill("")
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-[11.2px] box-border textslateBlue block flex-shrink-0 font-sans text-[16px] font-normal h-auto leading-[23.2px] p-[48px] text-left transition-transform w-full sm:w-[362.656px]"
                    >
                      <div className="flex flex-col h-auto justify-between">
                        <h4 className="text-black text-[24px] leading-normal mb-2">
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
                            <p className="text-[#0A2640] font-bold">Albus Dumbledore</p>
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




        <section className="secction-css3 flex-grow">
          <div className="mx-auto max-w-7xl px-4 relative text-start">
            <img className="w-full max-w-auto h-auto object-contain" src="https://asp-crm.indotalent.com/landing/assets/img/offer/3.png" alt="Offer" />
            <div className="flex flex-wrap items-center mt-[48px]">
              <div className="text-left w-full px-[16px]">
                <h2 className="text-jetBlack text-[33.1776px] font-normal h-[60px] leading-normal mb-[8px] mt-0 pt-[16px]">
                  Crafting Your Digital Success Story.
                </h2>
              </div>
              <div className="text-left w-full mx-auto pt-14">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="w-full text-left text-charcoal text-[18px] font-semibold py-4 px-6 bg-cloudWhite rounded-md shadow-md hover:bg-[#e2e2e2] transition-all duration-300 ease-in-out">
                      Why digital transformation matters?
                    </AccordionTrigger>
                    <AccordionContent className="w-full text-left px-6 py-4 text-stoneGray bg-powderedSnow rounded-md shadow-md overflow-y-auto max-h-[300px]">
                      Digital transformation revolutionizes housing management by automating processes, improving tenant communication, and providing real-time insights into property operations. With our software, you can streamline rent collection, maintenance requests, and property tracking, ensuring efficient management and enhanced tenant satisfaction. It’s the modern solution for seamless and hassle-free housing management.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="w-full text-left text-charcoal text-[18px] font-semibold py-4 px-6 bg-cloudWhite rounded-md shadow-md hover:bg-[#e2e2e2] transition-all duration-300 ease-in-out">
                      How collaboration & integrated system help?
                    </AccordionTrigger>
                    <AccordionContent className="w-full text-left px-6 py-4 text-stoneGray bg-powderedSnow rounded-md shadow-md overflow-y-auto max-h-[300px]">
                      Collaboration and integrated systems enhance housing management by connecting all stakeholders—property managers, tenants, maintenance teams, and owners—on a single platform. This ensures seamless communication, faster decision-making, and better coordination. With an integrated system, tasks like maintenance requests, payments, and lease tracking are automated and easily accessible, improving efficiency, reducing errors, and creating a more transparent and responsive housing management experience.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>



        <section className="secction-css3 mt-20 flex-grow">
          <div className="mx-auto max-w-7xl px-4 relative text-start">
            {/* Section Title */}
            <p className="text-slateBlue text-center text-lg md:text-xl font-normal mb-4">
              Our Blog
            </p>
            <h2 className="text-black text-center text-2xl md:text-4xl font-bold mb-8">
              Managed Cloud Service
            </h2>

            {/* Blog Posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-12">
              {/* Blog Post 1 */}
              <div className="flex flex-col items-start">
                <a href="#">
                  <img
                    className="rounded-2xl w-full h-auto"
                    src="https://asp-crm.indotalent.com/landing/assets/img/blog/1.png"
                    alt=""
                  />
                </a>
                <div className="flex items-center gap-2 mt-4">
                  <a href="#">
                    <p className="text-black font-extrabold text-sm md:text-base">
                      Category
                    </p>
                  </a>
                  <p className="text-stoneGray text-sm md:text-base">November 22, 2021</p>
                </div>
                <a href="#">
                  <h5 className="text-black text-base md:text-lg font-normal mt-2">
                    Managed cloud service providers have dedicated teams of experts who
                    specialize in managing and optimizing cloud infrastructure.
                  </h5>
                </a>
                <div className="flex items-center gap-4 mt-4">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://asp-crm.indotalent.com/landing/assets/img/blog/profile1.png"
                    alt=""
                  />
                  <a href="#">
                    <p className="text-warmGray text-sm md:text-base">
                      Chandler Bing
                    </p>
                  </a>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="flex flex-col items-start">
                <a href="#">
                  <img
                    className="rounded-2xl w-full h-auto"
                    src="https://asp-crm.indotalent.com/landing/assets/img/blog/2.png"
                    alt=""
                  />
                </a>
                <div className="flex items-center gap-2 mt-4">
                  <a href="#">
                    <p className="text-black font-extrabold text-sm md:text-base">
                      Category
                    </p>
                  </a>
                  <p className="text-stoneGray text-sm md:text-base">November 22, 2021</p>
                </div>
                <a href="#">
                  <h5 className="text-black text-base md:text-lg font-normal mt-2">
                    Managed cloud service providers have dedicated teams of experts who
                    specialize in managing and optimizing cloud infrastructure.
                  </h5>
                </a>
                <div className="flex items-center gap-4 mt-4">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://asp-crm.indotalent.com/landing/assets/img/blog/profile2.png"
                    alt=""
                  />
                  <a href="#">
                    <p className="text-warmGray text-sm md:text-base">Rachel Green</p>
                  </a>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="flex flex-col items-start">
                <a href="#">
                  <img
                    className="rounded-2xl w-full h-auto"
                    src="https://asp-crm.indotalent.com/landing/assets/img/blog/3.png"
                    alt=""
                  />
                </a>
                <div className="flex items-center gap-2 mt-4">
                  <a href="#">
                    <p className="text-black font-extrabold text-sm md:text-base">
                      Category
                    </p>
                  </a>
                  <p className="text-stoneGray text-sm md:text-base">November 22, 2021</p>
                </div>
                <a href="#">
                  <h5 className="text-black text-base md:text-lg font-normal mt-2">
                    Managed cloud service providers have dedicated teams of experts who
                    specialize in managing and optimizing cloud infrastructure.
                  </h5>
                </a>
                <div className="flex items-center gap-4 mt-4">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://asp-crm.indotalent.com/landing/assets/img/blog/profile3.png"
                    alt=""
                  />
                  <a href="#">
                    <p className="text-warmGray text-sm md:text-base">Phoebe Buffay</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </section>

      </PageWrapper>

    </>
  );
};

export default Homepage;
