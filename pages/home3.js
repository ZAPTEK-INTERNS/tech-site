import {
  Build,
  Commitment,
  Deliver,
  Git,
  Itservices,
  Navbar,
  OurBelieve,
  OurServices,
  Projects,
  TechLeaders,
} from "../components/links";


const backgroundImage = {
  backgroundImage: "bg-[#1a0533] ",
};

const home3 = () => {
  return (
    <div>
      <Navbar backgroundImage={backgroundImage} />
      <Deliver />
      <TechLeaders />
      <OurBelieve />
      <OurServices />
      <Git />
      <Commitment />
      <Itservices />
      <Projects />
      <Build />
    </div>
  );
};
export default home3;
