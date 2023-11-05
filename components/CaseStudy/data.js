/**
 *  images and data for each @Card
 */
import CS1 from "../../public/images/supply-chain.jpg";
import CS2 from "../../public/images/case-study2.jpg";
import CS4 from "../../public/images/xyz.jpg";
import CS5 from "../../public/images/e-commerce.jpg";
import CS6 from "../../public/images/marketing.jpg";

export const cardsData = [
  {
    id: "1",
    image: CS1,
    title: "Modernizing Supply Chain Management",
    detail:
      "Discover how our IT consulting agency revolutionized XYZ Corporation's operations with a custom dashboard, providing real-time insights, reducing downtime.",
    categories: [
      { name: "IT Consultancy", link: "it-consultancy" },
      { name: "Design", link: "design" },
    ],
    background:
      "LogiTech Solutions, a prominent player in the supply chain management sector, recognized the need to modernize its operations to remain competitive in an ever-evolving industry. They sought comprehensive development and IT consulting services to enhance their technological infrastructure and optimize supply chain processes.",
    industry: "Manufacturing",
    location: "Germany",
    services: ["Web Development", "IT Consultancy"],
    solution: "",
    solutionlist: [
      {
        head: "Assessment and Planning",
        body: "We began by conducting a thorough assessment of XYZ Corporation's existing IT infrastructure and requirements. This step allowed us to identify pain points and goals.",
      },
      { head: "Custom Dashboard Development", body: "Leveraging our expertise in dashboard development, we designed a customized IT management dashboard. It integrated with their existing systems and provided real-time information on network performance, server health, security threats, and more." },
      { head: "Data Integration", body: "We integrated various data sources, including network monitoring tools, security systems, and performance metrics, into a single dashboard. This enabled XYZ Corporation to access all relevant information from a central location." },
      { head: "User-Friendly Interface", body: "Our team ensured that the dashboard had an intuitive and user-friendly interface, making it accessible to both IT professionals and executives." },
      { head: "Real-time Alerts", body: "We implemented real-time alerting mechanisms that notified the IT team of critical incidents, reducing response times and minimizing downtime." },
    ],
    resultlist: [{ head: "", body: "" }],
    result: "XYZ Corporation saw a significant reduction in IT-related downtime, resulting in improved overall productivity.The centralized dashboard allowed for better resource allocation, reducing operational costs.Real-time insights empowered the IT team to proactively address issues, enhancing system reliability.Executive leadership gained a clear view of IT performance, facilitating data-driven decision-making.",
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
    services: ["hh", "hh"],
    solution: "rr",
    solutionlist: [{ head: "asssess", body: "we we" }],
    resultlist: [{ head: "asssess", body: "we we" }],
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
    services: ["hh", "hh"],
    solution: "rr",
    solutionlist: [{ head: "asssess", body: "we we" }],
    resultlist: [{ head: "asssess", body: "we we" }],
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
    industry: "Manufacturing",
    location: "Germany",
    services: ["Web Development", "IT Consultancy"],
    solution: "",
    solutionlist: [
      {
        head: "Assessment and Planning",
        body: "We began by conducting a thorough assessment of XYZ Corporation's existing IT infrastructure and requirements. This step allowed us to identify pain points and goals.",
      },
      { head: "Custom Dashboard Development", body: "Leveraging our expertise in dashboard development, we designed a customized IT management dashboard. It integrated with their existing systems and provided real-time information on network performance, server health, security threats, and more." },
      { head: "Data Integration", body: "We integrated various data sources, including network monitoring tools, security systems, and performance metrics, into a single dashboard. This enabled XYZ Corporation to access all relevant information from a central location." },
      { head: "User-Friendly Interface", body: "Our team ensured that the dashboard had an intuitive and user-friendly interface, making it accessible to both IT professionals and executives." },
      { head: "Real-time Alerts", body: "We implemented real-time alerting mechanisms that notified the IT team of critical incidents, reducing response times and minimizing downtime." },
    ],
    resultlist: [{ head: "", body: "" }],
    result: "XYZ Corporation saw a significant reduction in IT-related downtime, resulting in improved overall productivity.The centralized dashboard allowed for better resource allocation, reducing operational costs.Real-time insights empowered the IT team to proactively address issues, enhancing system reliability.Executive leadership gained a clear view of IT performance, facilitating data-driven decision-making.",
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
    services: ["hh", "hh"],
    solution: "rr",
    solutionlist: [{ head: "asssess", body: "we we" }],
    resultlist: [{ head: "asssess", body: "we we" }],
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
    services: ["hh", "hh"],
    solution: "rr",
    solutionlist: [{ head: "asssess", body: "we we" }],
    resultlist: [{ head: "asssess", body: "we we" }],
    result: "rr",
  },
];

/**
 * This array is for filters of card component
 */

export const filterCategories = [
  { text: "All", value: "all" },
  { text: "Design", value: "design" },
  { text: "Development", value: "development" },
  { text: "IT Consultancy", value: "it-consultancy" },
];
