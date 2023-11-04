import Background from "../../components/CaseStudy/id/Background";
import Hero from "../../components/CaseStudy/id/Hero";
import Navigation from "../../components/CaseStudy/id/Navigation";
import Result from "../../components/CaseStudy/id/Result";
import Solution from "../../components/CaseStudy/id/Solution";

import { cardsData } from "../../components/CaseStudy/data";

import { useRouter } from 'next/router';

const CaseDetails = () => {
  const router = useRouter();
  const { id } = router.query; 
  const selectedItem = cardsData.find(item => item.id == id);
 
  return (
    <>
    { selectedItem ? (
    <>
    <div className="mx-4 md:mx-16">
     <Hero data={selectedItem}/>
     <Background data={selectedItem}/>
     <Solution data={selectedItem}/>
     <Result data={selectedItem}/>
    </div>
     <Navigation id={id} data={cardsData} />
    </>) : (<div>No data available.</div>)
    }
    </>
  );
};

export default CaseDetails;
