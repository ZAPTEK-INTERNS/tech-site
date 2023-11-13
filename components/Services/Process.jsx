import React from "react";

const Process = () => {
  return (
    <div className="bg-[#1a0533] bg-news1 text-white mb-8 lg:h-[100vw] lg:items-center lg:inline-flex">
      <div className="flex flex-col lg:items-center lg:flex-row">
        <div className="ml-4 lg:ml-16">
          <h1 className="text-4xl font-bold pt-16 pb-4">Working process</h1>
          <p className="text-lg font-semibold w-2/3 pb-16">
            Our IT consulting process is a systematic journey comprising four
            stages: Assessment and Analysis, Planning, Implementation and
            Execution, and Monitoring and Optimization.
          </p>
        </div>
        <div className="lg:flex-wrap   lg:mr-4">
          <div className="lg:flex">
            <div className="my-4  ml-4 py-8 gap-8   w-2/4 lg:w-10/12 lg:h-[50vh] bg-violet-300/10 border border-violet-100/30 rounded-[50%] inline-flex justify-center items-center flex-col">
              <h3 className=" text-4xl pt-4 font-bold">01</h3>
              <h1 className="text-2xl font-bold">Analysis and Planning</h1>
              <p className="w-5/6 font-semibold pb-4 text-center">
                the process begins by thoroughly understanding the client's
                objectives.
              </p>
            </div>
            <div className="flex justify-end mr-4">
              <div className="my-4   ml-4 py-8 gap-8  lg:w-11/12 lg:h-[50vh] w-2/4 bg-violet-300/10 border border-violet-100/30 rounded-[50%] inline-flex justify-center items-center flex-col">
                <h3 className=" text-4xl pt-4 font-bold">02</h3>
                <h1 className="text-2xl lg:text-center font-bold">
                  Current State Evaluation
                </h1>
                <p className="w-5/6 font-semibold pb-4 text-center">
                  Assess the client's existing IT infrastructure, systems, and
                  processes
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex">
            <div className="my-4  ml-4 py-8 gap-8 lg:w-11/12 lg:h-[60vh] w-2/4 bg-violet-300/10 border border-violet-100/30 rounded-[50%] inline-flex justify-center items-center flex-col">
              <h3 className=" text-4xl pt-4 font-bold">03</h3>
              <h1 className="text-2xl text-center font-bold">
                Implementation and Execution
              </h1>
              <p className="w-5/7 font-semibold pb-4 text-center">
                Execute the project plan, which may involve deploying new
                software, hardware, or IT processes.
              </p>
            </div>
            <div className="justify-end  mr-4 flex">
              <div className="my-4  py-8 gap-8  lg:w-11/12 lg:h-[60vh] w-2/4 bg-violet-300/10 border border-violet-100/30 rounded-[50%] inline-flex  items-center  flex-col">
                <h3 className=" text-4xl pt-4 font-bold">04</h3>
                <h1 className="text-2xl text-center font-bold">
                  Evaluation and Maintenance
                </h1>
                <p className="w-10/12 font-semibold pb-4 text-center">
                  Assess the results of the implemented solutions against the
                  predefined goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
