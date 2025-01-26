import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import AuthButton from "./AuthButton";
import clsx from "clsx";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Link } from "react-router";

const Navbar = () => {
    const [navAtTop, setNavAtTop] = useState<boolean>(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const scrollPercentage = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);

            if (scrollPercentage === 0) {
                setNavAtTop(true);
            } else {
                setNavAtTop(false);
            }
        });

        return () => window.removeEventListener("scroll", () => setNavAtTop(true));
    }, []);

    return (
        <>
            <nav className={clsx("sticky top-0 left-0 flex justify-between items-center px-14 py-4 sm:py-6 z-50 text-white", !navAtTop && "bg-primaryColor")}>
                <h1 className="text-xl sm:text-2xl font-bold cursor-pointer ml-2">
                    <a href="#" className="hover:text-gray-300">Boldo</a>
                </h1>
                <div className="md:flex hidden flex-wrap justify-center sm:justify-end items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
                    <a href="#" className="hover:text-gray-300 text-green-500">Home</a>
                    <a href="#product" className="hover:text-gray-300">Product</a>
                    <a href="#services" className="hover:text-gray-300">Services</a>
                    <a href="#about" className="hover:text-gray-300">About</a>
                    <AuthButton />
                </div>
                <div className='md:hidden flex relative'>
                    <Drawer direction="right">
                        <DrawerTrigger>
                            <FiMenu size={28} className="cursor-pointer" />
                        </DrawerTrigger>
                        <DrawerContent className="flex flex-col gap-3 h-screen p-5">
                            <div className="flex justify-end">
                                <DrawerClose>
                                    <IoMdClose size={28} />
                                </DrawerClose>
                            </div>
                            <div className="flex flex-col h-full justify-between">
                                <div className="flex flex-col gap-2">
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="products">
                                            <AccordionTrigger>Products</AccordionTrigger>
                                            <AccordionContent>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="services">
                                            <AccordionTrigger>Services</AccordionTrigger>
                                            <AccordionContent>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <Link to={'/about'} className="font-medium text-sm mt-4 hover:underline">
                                        About us
                                    </Link>
                                </div>
                                <AuthButton className="border" />
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </nav>
        </>
    )
}

export default Navbar
