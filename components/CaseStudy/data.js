
/**
 *  images and data for each @Card
 */
import CS1 from "../../public/images/supply-chain.jpg";
import CS2 from "../../public/images/case-study2.jpg";
import CS4 from "../../public/images/xyz.jpg";
import CS5 from "../../public/images/e-commerce.jpg";
import CS6 from "../../public/images/marketing.jpg";



export const cardsData = [
  { id: "1",
    image: CS1,
    title: "Modernizing Supply Chain Management",
    detail:
      "Discover how our IT consulting agency revolutionized XYZ Corporation's operations with a custom dashboard, providing real-time insights, reducing downtime.",
    categories: [
        { name: "IT Consultancy", link: "it-consultancy" },
      { name: "Design", link: "design" },
    ],
    background : "LogiTech Solutions, a prominent player in the supply chain management sector, recognized the need to modernize its operations to remain competitive in an ever-evolving industry. They sought comprehensive development and IT consulting services to enhance their technological infrastructure and optimize supply chain processes.",
    industry: "hh",
    location: "hh",
    services : ["hh","hh"],
    solution: "rr",
    solutionlist:[{head:"asssess",body:"we we"}],
    resultlist:[{head:"asssess",body:"we we"}],
    result: "rr",
  },
  {
    id: "2",
    image: CS2,
    title: "Digital Transformation for HealthTech Innovators",
    detail:
      "Our digital transformation consultancy successfully collaborated with MediTech Innovations to achieve their vision of a secure and efficient health data platform.",
    categories: [
      { name: "Design", link: "design" },
      { name: "Development", link: "development" },
    ],
    background: "hh",
    industry: "hh",
    location: "hh",
    services : ["hh","hh"],
    solution: "rr",
    solutionlist:[{head:"asssess",body:"we we"}],
    resultlist:[{head:"asssess",body:"we we"}],
    result: "rr",
  },
  {
    id: "3",
    image: CS2,
    title: "PicturePerfect Photography - photography business ",
    detail:
      "Our team of experienced professionals is dedicated to providing exceptional web design, development, and marketing services.",
    categories: [
     
      { name: "Development", link: "development" },
      { name: "IT Consultancy", link: "it-consultancy" },
    ],
    background: "hh",
    industry: "hh",
    location: "hh",
    services : ["hh","hh"],
    solution: "rr",
    solutionlist:[{head:"asssess",body:"we we"}],
    resultlist:[{head:"asssess",body:"we we"}],
    result: "rr",
  },
  {
    id: "4",
    image: CS4,
    title: "XYZ - Streamlining Operations",
    detail:
      "Discover how our IT consulting agency revolutionized XYZ Corporation's operations with a custom dashboard, providing real-time insights, reducing downtime.",
    categories: [
     
      { name: "Development", link: "development" },
      { name: "Design", link: "design" },
    ],
    background: "hh",
    industry: "hh",
    location: "hh",
    services : ["hh","hh"],
    solution: "rr",
    solutionlist:[{head:"asssess",body:"we we"}],
    resultlist:[{head:"asssess",body:"we we"}],
    result: "rr",
  },
  {
    id: "5",
    image: CS5,
    title: "Enhancing Market Reach with E-commerce Integration",
    detail:
      "Our IT consulting firm successfully enabled ABC Retailers to embrace e-commerce, significantly enhancing their market presence and revenue.",
    categories: [
     
        { name: "IT Consultancy", link: "it-consultancy" },
      { name: "Development", link: "development" },
    ],
    background: "hh",
    industry: "hh",
    location: "hh",
    services : ["hh","hh"],
    solution: "rr",
    solutionlist:[{head:"asssess",body:"we we"}],
    resultlist:[{head:"asssess",body:"we we"}],
    result: "rr",
  },
  {
    id: "6",
    image: CS6,
    title: "Onson - marketing agency website",
    detail:
      "Our team of experienced professionals is dedicated to providing exceptional web design, development, and marketing services.",
    categories: [
        { name: "Design", link: "design" },
        { name: "IT Consultancy", link: "it-consultancy" },
    ],
    background: "hh",
    industry: "hh",
    location: "hh",
    services : ["hh","hh"],
    solution: "rr",
    solutionlist:[{head:"asssess",body:"we we"}],
    resultlist:[{head:"asssess",body:"we we"}],
    result: "rr",
  },
];

/**
 * This array is for filters of card component 
 */

export const filterCategories = [
  { text: 'All', value: 'all' },
  { text: 'Design', value: 'design' },
  { text: 'Development', value: 'development' },
  { text: 'IT Consultancy', value: 'it-consultancy' },
];