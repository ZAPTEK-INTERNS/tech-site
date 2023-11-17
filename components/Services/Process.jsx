import React from "react";

const Process = () => {
  return (
    <div className="mb-8 bg-[#1a0533] bg-news1 text-white lg:inline-flex lg:h-[100vw] lg:items-center">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="ml-4 lg:ml-16">
          <h1 className="pb-4 pt-16 text-4xl font-bold">Working process</h1>
          <p className="w-2/3 pb-16 text-lg font-semibold lg:w-11/12">
            Our IT consulting process is a systematic journey comprising four
            stages: Assessment and Analysis, Planning, Implementation and
            Execution, and Monitoring and Optimization.
          </p>
        </div>
        <div className="lg:mr-24 ">
          <div className="lg:flex">
            <div className="my-4 ml-4 inline-flex w-2/4 flex-col   items-center justify-center gap-8 rounded-[50%] border border-violet-100/30 bg-violet-300/10 py-8 lg:mb-32 lg:h-[50vh] lg:w-[35vw]">
              <h3 className=" pt-4 text-4xl font-bold">01</h3>
              <h1 className="text-2xl font-bold">Analysis and Planning</h1>
              <p className="w-5/6 pb-4 text-center font-semibold">
                the process begins by thoroughly understanding the client's
                objectives.
              </p>
            </div>
            <div className="mr-4 flex justify-end lg:mt-24">
              <div className="my-4   ml-4 inline-flex w-2/4  flex-col items-center justify-center gap-8 rounded-[50%] border border-violet-100/30 bg-violet-300/10 py-8 lg:h-[50vh] lg:w-11/12">
                <h3 className=" pt-4 text-4xl font-bold">02</h3>
                <h1 className="text-2xl font-bold lg:text-center">
                  Current State Evaluation
                </h1>
                <p className="w-5/6 pb-4 text-center font-semibold">
                  Assess the client's existing IT infrastructure, systems, and
                  processes
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex">
            <div className="my-4  ml-4 inline-flex w-2/4 flex-col items-center justify-center gap-8 rounded-[50%] border border-violet-100/30 bg-violet-300/10 py-8 lg:h-[50vh] lg:w-[40vw]">
              <h3 className=" pt-4 text-4xl font-bold">03</h3>
              <h1 className="text-center text-2xl font-bold">
                Implementation and Execution
              </h1>
              <p className="w-5/7 pb-4 text-center font-semibold lg:w-11/12">
                Execute the project plan, which may involve deploying new
                software, hardware, or IT processes.
              </p>
            </div>
            <div className="mr-4  flex justify-end">
              <div className="my-4  inline-flex w-2/4 flex-col  items-center gap-8 rounded-[50%] border border-violet-100/30 bg-violet-300/10 py-8 lg:mt-24  lg:h-[50vh]  lg:w-11/12">
                <h3 className=" pt-4 text-4xl font-bold">04</h3>
                <h1 className="text-center text-2xl font-bold">
                  Evaluation and Maintenance
                </h1>
                <p className="w-9/12 pb-4 text-center font-semibold">
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
