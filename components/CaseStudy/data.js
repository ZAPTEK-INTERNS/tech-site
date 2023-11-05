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
      "Our development service firm to achieve their goal of modernizing their supply chain management processes",
    industry: "Supply Chain Management",
    location: "France",
    services: [ "IT Consultancy","Website Maintenance"],
    solution: "LogiTech Solutions engaged in a partnership with our development and IT consulting team to address these challenges:",
    solutionlist: [
      {
        head: "Assessment and Roadmap",
        body: "We conducted a comprehensive assessment of LogiTech's existing systems, identifying areas for improvement. Based on this assessment, we recommended a strategic roadmap for modernization.",
      },
      {
        head: "Custom Software Solutions",
        body: "To enhance supply chain efficiency, we developed tailored software solutions. These solutions optimized various processes, including inventory management, order tracking, and demand forecasting.",
      },
      {
        head: "Seamless Data Flow",
        body: "Our team implemented data integration solutions, enabling seamless data exchange across the entire supply chain network.",
      },
      {
        head: "Real-Time Insights",
        body: "We created real-time data analytics and reporting dashboards. These dashboards provided actionable insights, empowering informed decision-making throughout the supply chain.",
      },
     
    ],
    resultlist: [
      { head: "Efficiency Gains", body: "LogiTech Solutions experienced a 30% increase in operational efficiency, reducing lead times and costs." },
      { head: "Data-Driven Decisions", body: "Real-time data visibility allowed for data-driven decision-making, leading to better inventory management and demand forecasting." },
      { head: "Scalability", body: "The implemented solutions easily accommodated LogiTech's growth, ensuring long-term viability." },
      { head: "Enhanced Security", body: "Robust security measures safeguarded sensitive supply chain data, reducing cybersecurity risks." },
    ],
    result:
      "LogiTech Solutions, located in France, through a strategic partnership with our development and IT consulting team, successfully modernized its supply chain management processes.",
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
    background:
      "Our digital transformation consultancy successfully collaborated with MediTech Innovations to achieve their vision of a secure and efficient health data platform.",
    industry: "Healthcare",
    location: "USA",
    services: ["Web Development", "Web Maintenance"],
    solution: "",
    solutionlist: [
      {
        head: "Custom Health Data Platform",
        body: "Leveraging our expertise in healthcare technology, we designed and implemented a cutting-edge health data platform. The platform allowed secure storage, retrieval, and sharing of patient data while ensuring HIPAA compliance.",
      },{ head: "Interoperability", body: "We ensured seamless integration with electronic health record (EHR) systems, enabling healthcare providers to access patient data effortlessly." },
      { head: "Data Analytics", body: "Advanced analytics tools were integrated to provide healthcare professionals with actionable insights for improved patient care and treatment planning." },
      { head: "User Training", body: "We provided comprehensive training to healthcare staff to maximize the platform's utilization and efficiency." },
    ],
    resultlist: [{ head: "", body: "The health data platform streamlined access to patient information, reducing administrative burden and improving overall efficiency." },
    { head: "", body: "Healthcare providers reported more accurate diagnoses and treatment plans due to the platform's data analytics capabilities." },
    { head: "", body: "Enhanced data security and HIPAA compliance ensured patient confidentiality and trust." },
    { head: "", body: "Patients experienced improved care coordination, leading to better health outcomes." },
  
  ],
    result: false,
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
    background: "Our team of experienced professionals is dedicated to providing exceptional web design, development, and marketing services.",
    industry: "Photography",
    location: "Germany",
    services: ["IT consultant", "Web Development" , "Q&A Testing"],
    solution: "rr",
    solutionlist: [
      { head: "Strategic Planning", body: "We began by thoroughly understanding the client's photography style and goals. We then developed a comprehensive plan to design and develop a website that would align with their vision." },
      { head: "Custom Website Development", body: "We created a custom website tailored to the client's specific needs. This included a user-friendly content management system (CMS) for easy portfolio updates and a visually appealing design that highlighted the client's diverse photography work." },
      { head: "Portfolio Curation", body: "The heart of the website was a carefully curated portfolio section. We organized photos into various categories, allowing visitors to explore different styles and genres of photography easily." },
      { head: "Responsive Design", body: "To ensure a seamless experience across devices, we implemented a responsive design, making the website accessible and visually appealing on both desktop and mobile devices." },
    ],
    resultlist: false,
    result: "The health data platform streamlined access to patient information, reducing administrative burden and improving overall efficiency.Healthcare providers reported more accurate diagnoses and treatment plans due to the platform's data analytics capabilities.Enhanced data security and HIPAA compliance ensured patient confidentiality and trust.Patients experienced improved care coordination, leading to better health outcomes. Our digital transformation consultancy successfully collaborated with MediTech Innovations in the HealthTech industry to achieve their vision of a secure and efficient health data platform. This case exemplifies our dedication to driving innovation and efficiency in the healthcare technology sector.",
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
      {
        head: "Custom Dashboard Development",
        body: "Leveraging our expertise in dashboard development, we designed a customized IT management dashboard. It integrated with their existing systems and provided real-time information on network performance, server health, security threats, and more.",
      },
      {
        head: "Data Integration",
        body: "We integrated various data sources, including network monitoring tools, security systems, and performance metrics, into a single dashboard. This enabled XYZ Corporation to access all relevant information from a central location.",
      },
      {
        head: "User-Friendly Interface",
        body: "Our team ensured that the dashboard had an intuitive and user-friendly interface, making it accessible to both IT professionals and executives.",
      },
      {
        head: "Real-time Alerts",
        body: "We implemented real-time alerting mechanisms that notified the IT team of critical incidents, reducing response times and minimizing downtime.",
      },
    ],
    resultlist: [{ head: "", body: "" }],
    result:
      "XYZ Corporation saw a significant reduction in IT-related downtime, resulting in improved overall productivity.The centralized dashboard allowed for better resource allocation, reducing operational costs.Real-time insights empowered the IT team to proactively address issues, enhancing system reliability.Executive leadership gained a clear view of IT performance, facilitating data-driven decision-making.",
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
    background: "ABC Retail Group, a well-established player in the retail industry, approached our IT consulting and development firm with a clear objective. They sought to bolster their online presence and revenue streams through effective e-commerce integration. Recognizing the need for expert guidance, they turned to our team to bring their vision to life.",
    industry: "Retail",
    location: "United States",
    services: ["IT Consultancy", "Web Development"],
    solution: "",
    solutionlist: [
      { head: "Needs Assessment", body: "We conducted a comprehensive analysis of ABC Retail Group's business model, customer demographics, and market trends to identify strategic e-commerce opportunities." },
      { head: "Custom E-commerce Development", body: "Leveraging our expertise in IT consulting and development, we embarked on crafting a tailor-made e-commerce platform. This platform featured intuitive navigation, secure payment processing, and an appealing design to maximize user engagement." },
      { head: "Integration with Existing Systems", body: "We ensured a smooth integration between the new e-commerce platform and ABC Retail Group's existing inventory management, customer relationship management (CRM), and order processing systems." },
      { head: "Mobile Responsiveness", body: "Recognizing the importance of mobile commerce, we optimized the platform for seamless access and shopping on smartphones and tablets, capturing the burgeoning mobile market." },
      { head: "Digital Marketing Strategy", body: "Concurrently, we devised a comprehensive digital marketing strategy, encompassing SEO, email campaigns, and social media initiatives to drive targeted traffic and elevate online visibility." },
  ],
    resultlist: [
      { head: "", body: "ABC Retail Group experienced a substantial surge in online sales, diversifying their revenue streams and expanding their digital presence." },
      { head: "", body: "The e-commerce platform delivered an exceptional shopping experience, fostering increased customer satisfaction and brand loyalty." },
      { head: "", body: "Streamlined inventory management and order processing led to operational efficiencies and cost savings." },
      { head: "", body: "Mobile optimization broadened their customer base by catering to the growing mobile commerce trend." },
    ],
    result: "",
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
    background: "Onson Marketing Agency, a dynamic player in the marketing and advertising industry, approached our agency with a goal to improve its online presence, increase brand visibility, and boost lead generation. As a relatively new entrant in a competitive market, Onson sought to establish itself as a trusted partner for businesses seeking innovative marketing solutions.",
    industry: "Digital Marketing",
    location: "New York City, USA",
    services: ["IT Consultancy", "Website Maintenance"],
    solution: "Our agency implemented a multifaceted strategy to address Onson's challenges:",
    solutionlist: [
      { head: "Website Revamp", body: "We designed and developed a modern, user-friendly website for Onson, optimizing it for search engines and ensuring mobile responsiveness." },
      { head: "Content Marketing", body: "Our team created a blog section on the website, publishing informative articles, case studies, and industry insights regularly to establish Onson as a thought leader." },
      { head: "Social Media Engagement", body: "We devised a social media marketing plan, focusing on platforms like LinkedIn and Twitter, to engage with industry peers and potential clients" },
      { head: "Lead Generation Funnel", body: "We implemented lead capture forms, email marketing campaigns, and downloadable resources, such as e-books, to capture and nurture leads." },
    ],
    resultlist: [
      { head: "Improved Website Traffic", body: "Within six months, Onson's website experienced a 40% increase in organic traffic, resulting in higher visibility among potential clients." },
      { head: "Lead Generation Success", body: "Our lead generation funnel yielded a 25% increase in qualified leads, providing Onson with a consistent stream of potential clients." },
      { head: "Enhanced Authority", body: "Onson's active social media engagement and content marketing efforts led to its recognition as a trusted industry authority." },
    ],
    result: "",
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
