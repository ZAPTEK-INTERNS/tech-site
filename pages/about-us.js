import About from "../components/AboutUs/About";
import Better from "../components/AboutUs/Better";
import Build from "../components/AboutUs/Build";
import Culture from "../components/AboutUs/Culture";
import Work from "../components/AboutUs/Work";
import Testimonial from "../components/AboutUs/Testimonials";
import TeamCards from "../components/AboutUs/TeamCards";
import Excellence from "../components/AboutUs/Excellence";

const AboutUs = () => {
  return (
    <div className="bg-[url('../public/images/about1.webp')] bg-fixed bg-cover bg-center ">
      <About />
      <Culture />
      <Better />
      <TeamCards/>
      <Excellence/>
      <Build />
      <Work />
      <Testimonial/>
    </div>
  );
};

export default AboutUs;
