import {
  Header,
  CareerClients,
  Benefits,
  Careers,
  Navbar,
} from "../../components/links";
import Head from "next/head";

const Career = () => {
  return (
    <div className="w-full overflow-hidden">
      <Head>
        {" "}
        <title> Career - Tech </title>{" "}
      </Head>

      <Navbar />
      <Header />
      <CareerClients />
      <Benefits />
      <Careers />
    </div>
  );
};

export default Career;
