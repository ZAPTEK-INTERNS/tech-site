
import { useFilter } from "./Context/Filter";
import { cardsData } from "./data";
import Card from "./Card";

const CardWithFilter = () => {
  const { filter } = useFilter();

  return (
    <>
      {
        cardsData.map((card, index) => {
          const matchedCategories = card.categories.filter(
            (category) => category.link === filter
          );

          if (filter === "all" || matchedCategories.length > 0) {
            return <Card card={card} index={index} key={index} />;
          }
          return null;
        })  
      }
    </>
  );
};

export default CardWithFilter;
