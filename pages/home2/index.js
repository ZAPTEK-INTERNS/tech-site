import Head from "next/head";
import Hero from "../../components/Home2/Hero";
import FeatureImages from "../../components/Home2/FeaturedImages";
import FeaturedLogos from "../../components/Home2/FeaturedLogos";

const Home2 = () => {
  return (
    <div>
      <Head>
        <title>Home 2 - Tech</title>
      </Head>
      <Hero />
      <FeatureImages />
      <FeaturedLogos />
    </div>
  );
};

export default Home2;
