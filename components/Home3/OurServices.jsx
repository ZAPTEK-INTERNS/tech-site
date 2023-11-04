import { www, data, mobile, lock } from "../../public/links";
import Image from "next/image";
import { useState, useEffect } from "react";

const items = [
  {
    title: "Custom Software Development",
    content:
      "Tailor-made software solutions designed to align seamlessly with your unique business needs and drive productivity to new heights.",
    Image: www,
  },
  {
    title: "Data Analytics and Insights",
    content:
      "Unlocking the power of data to make informed decisions, identify trends, and gain a competitive edge in your industry.",
    Image: data,
  },
  {
    title: "Mobile App Development",
    content:
      "Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence is a crucial aspect of business.",
    Image: mobile,
  },
  {
    title: "Cybersecurity Solutions",
    content:
      "Safeguarding your invaluable digital assets and fortifying your online against the relentless and ever-evolving global landscape of cyber threats.",
    Image: lock,
  },
];

function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionPositions = items.map(
        (item) => item.element.getBoundingClientRect().top
      );
      const activeIndex = sectionPositions.findIndex(
        (pos) => pos < window.innerHeight / 2
      );

      setActiveIndex(activeIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Timeline.js

  return (
    <ol className="relative ml-8">
      {items.map((item, index) => (
        <li
          key={index}
          ref={(el) => (item.element = el)}
          className={`mb-10 ml-6 ${index === activeIndex ? "active" : ""}`}
        >
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
            <Image
              src={item.Image}
              alt={`${item.name} image`}
              className="rounded-full shadow-lg"
              width={50}
              height={50}
            />
          </span>

          <div className="bg-white  rounded-lg ">
            <div className="p-4">
              <h1 className="text-3xl font-bold">{item.title}</h1>
              <div className="text-lg font-normal text-gray-500">
                {item.content}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
export default OurServices;
