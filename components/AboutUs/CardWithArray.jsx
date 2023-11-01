import { cardsData } from "../CaseStudy/data";
import Card from "../CaseStudy/Card";


const CardWithArray = () => {
    const orderOfIds = [4, 5, 6, 1];

    return (
      <>
        {orderOfIds.map((id,index) => {
          const card = cardsData.find((cardData) => cardData.id === id.toString());
  
          if (card) {
            return <Card card={card} index={index} key={index} />
          }
          return null;
        })}
      </>
    );
}
 
export default CardWithArray;