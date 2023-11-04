// pages/services/[id].js

// Import necessary components and styles
import { useRouter } from "next/router";
import { Projects } from "../../components/links";

// Sample service data for demonstration (replace with your actual data)
const serviceData = {
  title: "Service Title",
  description: "Description of the service.",
  image: "/path/to/image.jpg",
  topics: ["Topic 1", "Topic 2", "Topic 3"],
  benefits: "List of benefits for the service.",
  workProcess: "Description of the work process.",
  projects: "Recent projects related to the service.",
};

function ServiceDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>{serviceData.title}</h1>
      <p>{serviceData.description}</p>
      <img src={serviceData.image} alt={serviceData.title} />
      <h2>Topics</h2>
      <ul>
        {serviceData.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <h2>Benefits</h2>
      <p>{serviceData.benefits}</p>
      <h2>Work Process</h2>
      <p>{serviceData.workProcess}</p>
      <h2>Projects</h2>
      <Projects />
    </div>
  );
}

export default ServiceDetail;
