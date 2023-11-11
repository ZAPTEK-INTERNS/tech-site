const Request = () => {
  return (
    <div className="flex flex-col mt-16 mb-8 bg-[#8000FF] justify-start rounded-xl mx-4 lg:w-5/12 lg:mr-8 h-[65vh] lg:h-[70vh]">
      <div className="px-8 flex flex-col gap-4 pt-10 ">
        <h1 className="text-white text-3xl lg:text-4xl font-bold ">
          Request a free consultation
        </h1>
        <form className=" inline-flex flex-col">
          <label htmlFor="Email"></label>
          <br />
          <input
            type="text"
            name="Email"
            placeholder="Email"
            className="w-full py-4 rounded-lg bg-violet-100/10 placeholder:text-violet-100/30 placeholder:text-base placeholder:pl-4 placeholder:font-semibold border border-violet-100/20"
          />
          <br />
          <label htmlFor="Phone-Number"></label>
          <br />
          <input
            type="text"
            name="Email"
            placeholder="Email"
            className=" w-full py-4 rounded-lg bg-violet-100/10 placeholder:text-violet-100/30 placeholder:text-base placeholder:pl-4 placeholder:font-semibold border border-violet-100/20"
          />
          <br />
        </form>
        <button className=" self-start mt-[-1rem] bg-white w-1/5 lg:w-full py-4 rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Request;
