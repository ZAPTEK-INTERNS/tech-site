import React from "react";

const Commitment = () => {
    return (
      <div>
        <div className="bg-[#1a0533] bg-cover bg-center bg-no-repeat  w-full h-[60vh] md:h-screen bg-fixed">
          <div className="bg-ourteam w-full h-[50vh] md:h-screen bg-fixed">
            <div className="text-white inline-flex self-center pt-4 lg:pt-[8rem]">

              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mx-[5%] w-[90%] lg:w-[86%] lg:mx-[7%] mt-20">
                <span className="text-violet-100/60">
                  We are committed to staying at{" "}
                </span>
                the forefront of technological innovation,{" "}
                <span className="text-violet-100/60">
                  constantly exploring emerging trends and incorporating the
                </span>
                latest advancements into our solutions.
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Commitment;
