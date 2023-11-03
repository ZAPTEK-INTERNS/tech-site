import { useRouter } from 'next/router';


import { useFilter } from "../CaseStudy/Context/Filter";
import { cardsData } from "../CaseStudy/data";
import Card from "../CaseStudy/Card";


const CardFilterParam = () => {
  const { filter ,setFilter } = useFilter();
  const router = useRouter();
  const { category } = router.query;

      setFilter(category)
  

  return (
    <>
      {
        cardsData.map((card, index) => {
          const matchedCategories = card.categories.filter(
            (category) => category.link === filter
          );

          if ( matchedCategories.length > 0) {
            return <Card card={card} index={index} key={index} />;
          }
          return null;
        })  
      }
    </>
  );
};

export default CardFilterParam;
