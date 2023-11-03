import { digital, data, mobile, www, cloud , padlock, CS1, CS4, CS5, CS6} from "../../public/links"


export const cardsData = [
  { id: "1",
    image: CS1,
    title: "Modernizing Supply Chain Management",
    detail:
      "Our development service firm to achieve their goal of modernizing their supply chain management processes.",
    categories: [
        { name: "IT Consultancy", link: "it-consultancy" },
      { name: "Design", link: "design" },
    ],
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
  },
];

export const services = [
    { id:1,
      icon:digital,
     title:"Digital Consulting",
     text: "Unleashing the full potential of your business through expert guidance and strategic implementation of cutting-edge technologies."
    },
    { id:2,
     icon:www,
     title:"Custom Software Development",
     text: "Tailor-made software solutions designed to align seamlessly with your unique business needs and drive productivity to new heights."
    },
    { id:3,
     icon:data,
     title:"Data Analytics and Insights",
     text: "Unlocking the power of data to make informed decisions, identify trends, and gain a competitive edge in your industry."
    },
    { id:4,
    icon:mobile,
    title:"Mobile App Developmentt",
    text: "Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence is a crucial aspect of business."
    },
    {  id:5,
    icon:padlock,
    title:"Cybersecurity Solutions",
    text: "Safeguarding your invaluable digital assets and fortifying your online against the relentless and ever-evolving global landscape of cyber threats."
    },
    { id:6,
     icon:cloud,
    title:"Cloud Services and Migration",
    text: "Transitioning your business to the cloud, unlocking scalability, efficiency, and enhanced collaboration across your organization."
    }
]

export const itservices = [
  { id:1,
   title: "Web Development",
   text: "Encompasses building and maintaining websites, including front-end (user interface) and back-end (server-side) development."
  },
  { id:2,
   title: "Website Maintenance",
   text: "Involves the ongoing management and updates required to keep a website functioning smoothly."
   },
   { id:3,
    title: "IT Consultancy",
    text: "Provide expert guidance and strategic advice to organizations seeking to optimize their technology infrastructure"
   },
   { id:4,
    title: "Q&A Testing",
    text: "Involves a systematic process of evaluating software applications or systems to identify and fix issues."
   },
   { id:5,
    title: "Account & Security",
    text: "Focus on safeguarding digital assets, sensitive information, and user accounts from unauthorized access and cyber threats."
   },
   { id:6,
    title: "Digital Consulting",
    text: "Unleashing the full potential of your business through expert guidance and strategic implementation of cutting-edge technologies."
   }
]