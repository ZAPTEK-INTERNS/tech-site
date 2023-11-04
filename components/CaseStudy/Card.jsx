import Image from "next/image";
import Link from "next/link";

const Card = ({ card, index }) => {
    return (
      <div key={index} className="my-4 md:row-span-2">
        <div class="group relative overflow-hidden">
          <Image
            height="auto"
            width="auto"
            src={card.image}
            alt=" image"
            className="rounded-lg  h-80 transform transition-transform group-hover:scale-110 ease-in-out duration-300 hover:cursor-pointer"
          />
        </div>
        <Link href={`${card.id}`}>
          <div className="flex justify-between my-8 hover:text-purple-900 hover:cursor-pointer xl:w-fit xl:space-x-20">
            <p className="font-bold text-3xl"> {card.title}</p>
            <Image
              height={40}
              width={40}
              src="https://assets-global.website-files.com/64f99a189bbe4d7717201680/650429c24fb418451f11a527_arrow%20dark%20big.svg"
              alt="image"
              className="rounded-lg w-8 h-8 hover:text-purple-900 hover:cursor-pointer"
            />
          </div>
        </Link>
        <p className="font-medium my-2">{card.detail}</p>
        <div className="text-purple-900 font-medium">
          {card.categories.map((category, categoryIndex) => (
            <span key={categoryIndex}>
              <Link href={`/${category.link}`}>{category.name}</Link>
              {categoryIndex < card.categories.length - 1 ? " / " : ""}
            </span>
          ))}
        </div>
      </div>
    );
  };

  export default Card