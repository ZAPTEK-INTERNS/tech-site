import About from "../components/AboutUs/About";
import Better from "../components/AboutUs/Better";
import Build from "../components/AboutUs/Build";
import Culture from "../components/AboutUs/Culture";
import Work from "../components/AboutUs/Work";

const AboutUs = () => {
  return (
    <div className="bg-[url('../public/images/about1.webp')] bg-fixed bg-cover bg-center ">
      <About />
      <Culture />
      <Better />
      <Build />
      <Work />
    </div>
  );
};

export default AboutUs;
