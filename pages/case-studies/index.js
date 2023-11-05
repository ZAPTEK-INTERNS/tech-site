import Hero from "../../components/CaseStudy/Hero.jsx";
import Filter from "../../components/CaseStudy/Filter.jsx";
import { FilterProvider } from "../../components/CaseStudy/Context/Filter.js";

import CardWithFilter from "../../components/CaseStudy/CardWithFilter.jsx";
import Success from "../../components/CaseStudy/Success.jsx";
import Mail from "../../components/CaseStudy/Mail.jsx";
import { Navbar } from "../../components/links";
import Head from "next/head";

const Case = () => {
  return (
    <>
      <Head>
        <title> Categories </title>
      </Head>
      <Navbar />
      <div className="mx-4 md:mx-16">
        <FilterProvider>
          <Hero title="Case Studies" />
          <Filter />
          <div className="md:grid md:grid-flow-row-dense md:grid-cols-2  md:gap-4">
            <div className="md:col-start-2 ">
              <Success />
            </div>
            <CardWithFilter />
            <Mail />
          </div>
        </FilterProvider>
      </div>
    </>
  );
};

export default Case;
