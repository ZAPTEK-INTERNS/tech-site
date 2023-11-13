import { ItTopic, Process, Request } from "../../components/Services/constant";
import { Build, Navbar, Projects, Services, Services3 } from "../../components/links";

function index() {
  return (
    <div>
      <Navbar />
      <Services3 />
      <div className="flex flex-col mx-4 lg:flex-row-reverse lg:justify-between">
        <ItTopic />
        <Request />
      </div>
      <Process />
      <Projects />
      <Build />
    </div>
  );
}

export default index;
