// pages/services/index.js

import Link from "next/link";

// Sample service categories data for demonstration (replace with your actual data)
const serviceCategories = [
  { id: "app-development", name: "App Development" },
  { id: "data-analysis", name: "Data Analysis" },
  { id: "testing", name: "Testing" },
  // Add more categories
];

function index() {
  return (
    <div>
      <h1>Services</h1>
      <ul>
        {serviceCategories.map((category) => (
          <li key={category.id}>
            <Link href={`/services/${category.id}`}>
              <p>{category.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default index;
