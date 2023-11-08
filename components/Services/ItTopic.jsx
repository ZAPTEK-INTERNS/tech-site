import Link from "next/link";
import { servicelist } from "../ServicesDetail/constant";
import { BsArrowUpRight } from "react-icons/bs";

const ItTopic = () => {
  return (
    <div className="mt-8 lg:pl-4 lg:w-2/3" data-aos="fade-up">
      <ul>
        {servicelist.map((topic) => (
          <li key={topic.id} data-aos="fade-up">
            <Link
              href={`/services/${topic.id}`}
              className="flex justify-between border-b py-8"
            >
              <h1 className="text-2xl lg:text-3xl font-bold">{topic.title}</h1>
              <BsArrowUpRight className="text-3xl " />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItTopic;
