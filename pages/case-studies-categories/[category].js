import { useRouter } from 'next/router';

import Hero from "../../components/CaseStudy/Hero.jsx";
import CardFilterParam from "../../components/CaseStudyCategory/CardFilterParam.jsx";
import Success from '../../components/CaseStudy/Success.jsx';
import Mail from '../../components/CaseStudy/Mail.jsx';

import { FilterProvider } from "../../components/CaseStudy/Context/Filter.js";
import { filterCategories } from "../../components/CaseStudy/data.js";

const Case = () => {
    const router = useRouter();
  const { category } = router.query;
  return (
    <div className="mx-4">
      <FilterProvider>
        {
            filterCategories.map((item,idx)=>(
                item.value === category ?  <Hero  title={item.text}/> : ""
            ))
        }
        <div className="md:grid md:grid-flow-row-dense md:grid-cols-2  md:gap-4">
          <div className="md:col-start-2 ">
            <Success />
          </div>
          <CardFilterParam />
          <Mail />
        </div>
      </FilterProvider>
    </div>
  );
};

export default Case;
