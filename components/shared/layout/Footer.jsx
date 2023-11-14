import logo from "../../../public/images/logo-white.svg";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1a0533] text-white z-20">
      <section className="py-12 text-lg font-semibold mx-[3%] w-[94%] lg:w-[90%] lg:mx-[5%] grid grid-cols-5 gap-12 lg:gap-2 place-items-center lg:place-items-start">
        <div className="flex flex-col gap-4 col-span-5 lg:col-span-2" data-aos="fade-right">
          <Image src={logo} />
          <Link href="https://maps.app.goo.gl/RCrJo5UKJNLZb1Tq7">
            4517 Washington Ave. <br className="hidden lg:block" />
            Manchester, Kentucky 39495
          </Link>
          <Link href="mailto:example.com" className="underline">
            tech@example.com
          </Link>
          <div className="flex gap-6 mt-3">
            <FaFacebookF
              className="hover:text-violet-900 transition-all"
              size={23}
            />
            <FaInstagram
              className="hover:text-violet-900 transition-all"
              size={23}
            />
            <FaXTwitter
              className="hover:text-violet-900 transition-all"
              size={23}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 col-span-2 sm:col-span-1 lg:col-span-1" data-aos="fade-left">
          <h1 className="text-2xl font-bold">Home</h1>
          <Link href="/" className="hover:text-violet-800 transition-all">
            Home 1
          </Link>
          <Link href="/home2" className="hover:text-violet-800 transition-all">
            Home 2
          </Link>
          <Link href="/home3" className="hover:text-violet-800 transition-all">
            Home 3
          </Link>
          <Link href="/home4" className="hover:text-violet-800 transition-all">
            Home 4
          </Link>
        </div>

        <div className="flex flex-col gap-4 col-span-3 sm:col-span-2 lg:col-span-1" data-aos="fade-right">
          <h1 className="text-2xl font-bold">Company</h1>
          <Link
            href="/about-us"
            className="hover:text-violet-800 transition-all"
          >
            About Us
          </Link>
          <Link
            href="/pricing"
            className="hover:text-violet-800 transition-all"
          >
            Pricing
          </Link>
          <Link href="/career" className="hover:text-violet-800 transition-all">
            Career
          </Link>
          <Link
            href="/services"
            className="hover:text-violet-800 transition-all"
          >
            Services
          </Link>
        </div>

        <div className="flex flex-col gap-4 col-span-5 sm:col-span-2 lg:col-span-1" data-aos="fade-left">
          <h1 className="text-2xl font-bold">Resources</h1>
          <Link href="/blog" className="hover:text-violet-800 transition-all">
            Blog
          </Link>
          <Link
            href="/case-studies"
            className="hover:text-violet-800 transition-all"
          >
            Case Studies
          </Link>
          <Link href="/blog/1" className="hover:text-violet-800 transition-all">
            Blog Details
          </Link>
          <Link href="/home4" className="hover:text-violet-800 transition-all">
            FAQ
          </Link>
        </div>
      </section>
      <hr className="border border-white/10 mx-[3%] w-[94%] lg:w-[90%] lg:mx-[5%]" />
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-6  mx-[3%] w-[94%] lg:w-[90%] lg:mx-[5%]">
        <p>
          ©Tech. All Rights Reserved 2023.
          <Link href="/lincense">Licensing</Link>
        </p>
        <p>
          <Link href="https://www.128.digital/webflow-templates">
            Webflow Templates{" "}
          </Link>
          by 128.digital.Powered by Webflow
        </p>
      </div>
    </footer>
  );
};

export default Footer;
