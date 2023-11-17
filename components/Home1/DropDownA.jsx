import Link from "next/link";

const DropDownA = () => {
  return (
    <div className="flex-col hidden gap-4 px-8 py-3 rounded-md lg:bg-white w-fit md:w-40 lg:absolute group-hover:flex lg:z-20 text-black/70">
     <Link href="/" className="menu-link">
        <div className="menu-link-bar"></div>
        <div className="focus:text-violet-700">Home</div>
      </Link>
      <Link href="/home2" className="menu-link">
        <div className="menu-link-bar"></div>
        <div className="focus:text-violet-700">Home 2</div>
      </Link>
      <Link href="/home3" className="menu-link">
        <div className="menu-link-bar"></div>
        <div className="focus:text-violet-700">Home 3</div>
      </Link>
      <Link href="/home4" className="menu-link">
        <div className="menu-link-bar"></div>
        <div className="focus:text-violet-700">Home 4</div>
      </Link>
    </div>
  );
};

export default DropDownA;
