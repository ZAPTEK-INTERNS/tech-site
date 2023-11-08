import logoblack from "../../../public/images/logo-black.svg";
import logowhite from "../../../public/images/logo-white.svg";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsCartFill } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { FiArrowDownRight } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { DropDownA, DropDownB, DropDownC, Cart } from "../../links";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [navBg, setNavBg] = useState("");
  const [changeLogo, setChangeLogo] = useState(false);

  useEffect(() => {
    const currentPage = window.location.pathname;
    if (
      currentPage === "/" ||
      currentPage === "/home3" ||
      currentPage === "/shop" ||
      currentPage === "/getaquote" ||
      currentPage === "/testimonials" ||
      currentPage === "/pricing" ||
      currentPage === "/faq" ||
      currentPage === "/services/1"
    ) {
      setNavBg("bg-transparent text-white");
      setChangeLogo(false);
    } 
    else {
      setNavBg("bg-white text-black");
      setChangeLogo(true);
    }
  }, []);

  const handleCartOpen = () => {
    setCart(true);
  };
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };
  const handleClose = () => {
    setMenu(false);
  };

  return (
    <nav
      className={`${navBg} w-full overflow-hidden my-6 pb-3 lg:my-0 lg:pb-0 border-b border-gray-400`}
    >
      <section className="flex justify-between items-center w-[90%] lg:w-[96%] mx-[5%] lg:ml-[4%]">
        <Image src={changeLogo ? logoblack : logowhite} />

        <div className="hidden gap-12 text-lg font-semibold lg:flex">
          <div className="group">
            <p className="relative transition-all cursor-pointer hover:text-violet-900">
              <span className="absolute text-gray-400 bottom-3 left-[-15px] text-xs">
                01
              </span>
              Demos{" "}
            </p>
            <div>
              <DropDownA />
            </div>
          </div>

          <div className="group">
            <p className="relative transition-all cursor-pointer hover:text-violet-900">
              <span className="absolute text-gray-400 bottom-3 left-[-15px] text-xs">
                02
              </span>
              Company{" "}
            </p>
            <div>
              <DropDownB />
            </div>
          </div>

          <Link
            href="/services"
            className="relative transition-all hover:text-violet-900"
          >
            <span className="absolute text-gray-400 bottom-3 left-[-15px] text-xs">
              03
            </span>
            Services
          </Link>
          <Link
            href="/case-studies"
            className="relative transition-all hover:text-violet-900"
          >
            <span className="absolute text-gray-400 bottom-3 left-[-15px] text-xs">
              04
            </span>
            Case Studies
          </Link>
          <div className="group">
            <p className="relative transition-all cursor-pointer hover:text-violet-900">
              <span className="absolute text-gray-400 bottom-3 left-[-15px] text-xs">
                01
              </span>
              All Pages
            </p>
            <div>
              <DropDownC />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="relative cursor-pointer">
            <BsCartFill
              className="transition-all hover:text-violet-700"
              onClick={handleCartOpen}
            />
            <span className="absolute px-1 rounded-full text-white bg-black bottom-3 left-[15px] text-xs">
              0
            </span>
          </div>
          <div>
            <Cart cart={cart} setCart={setCart} />
          </div>
          
          <div className="z-30 items-center hidden gap-4 px-3 text-white transition-all cursor-pointer lg:flex py-7 group bg-violet-700 hover:bg-white hover:text-black">
            <p className="h-full text-lg font-semibold">Get in Touch</p>
            <FiArrowDownRight
              size={28}
              className="transition-all group-hover:-rotate-45"
            />
          </div>
          <div onClick={handleMenu} className="block lg:hidden">
            <CgMenuRight size={35} />
          </div>
        </div>
      </section>

      {menu && (
        <div className="fixed lg:hidden left-0 top-0 bg-white h-[100vh] w-[60%] sm:w-[300px] z-40 text-black">
          <div className="flex items-center justify-between mx-4 my-6">
            <Image src={logoblack} className="w-[70px] sm:w-[100px]" />
            <AiOutlineClose size={24} onClick={handleClose} />
          </div>
          <div className="flex flex-col gap-6 mx-4 text-lg font-semibold">
            <div className="group ">
              <p className="relative flex items-center justify-between transition-all cursor-pointer hover:text-violet-900">
                <span>Demos</span>
                <MdKeyboardArrowDown className="transition-all group-hover:-rotate-180" />
              </p>
              <div>
                <DropDownA />
              </div>
            </div>
            <div className="group">
              <p className="relative flex items-center justify-between transition-all cursor-pointer hover:text-violet-900">
                <span>Company</span>
                <MdKeyboardArrowDown className="transition-all group-hover:-rotate-180" />
              </p>
              <div>
                <DropDownB />
              </div>
            </div>
            <Link
              href="/services"
              className="relative transition-all hover:text-violet-900"
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="relative transition-all hover:text-violet-900"
            >
              Case Studies
            </Link>
            <div className="group">
              <p className="relative flex items-center justify-between transition-all cursor-pointer hover:text-violet-900">
                <span> All Pages</span>
                <MdKeyboardArrowDown className="transition-all group-hover:-rotate-180" />
              </p>
              <div>
                <DropDownC />
              </div>
            </div>
            <div className="z-30 flex items-center gap-4 px-3 py-5 text-white transition-all cursor-pointer group bg-violet-700 hover:bg-white hover:text-black">
              <p className="h-full text-lg font-semibold">Get in Touch</p>
              <FiArrowDownRight
                size={35}
                className="transition-all group-hover:-rotate-45"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
