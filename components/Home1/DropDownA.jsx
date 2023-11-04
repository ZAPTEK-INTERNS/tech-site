import Link from "next/link";

const DropDownA = () => {
  return (
    <div className="lg:bg-white w-fit lg:absolute hidden group-hover:flex py-3 px-8 rounded-md flex-col gap-4 lg:z-20 text-black/70">
      <Link
        href="/"
        className="hover:text-violet-900 flex items-center gap-3 group"
      > 
       <div className="w-4 h-[2px] bg-violet-700 hidden group-hover:flex transition-all duration-300"></div>
        Home
      </Link>
      <Link href="/home2" className="hover:text-violet-900">
        Home 2
      </Link>
      <Link href="/home3" className="hover:text-violet-900">
        Home 3
      </Link>
      <Link href="/home4" className="hover:text-violet-900">
        Home 4
      </Link>
    </div>
  );
};

export default DropDownA;
