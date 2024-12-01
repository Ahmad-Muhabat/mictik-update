import '@fortawesome/fontawesome-free/css/all.min.css';
import Cards from "./Cards";

export default function DescriptionCard({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 lg:px-20 bg-gray-50">
      {/* Title and Description Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <p className="my-6 max-w-[750px] text-lg text-gray-500">
          {description}
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col items-center justify-center w-auto gap-5 mt-6 lg:flex-row">
        <Cards
          icon="fa-lightbulb"
          title="Innovation"
          description="Lightwave pioneers cutting-edge technology solutions, driving innovation in fiber optics and networking to deliver faster, more reliable connections."
        />
        <Cards
          icon="fa-cogs"
          title="Reliability"
          description="Lightwave’s equipment is designed with a focus on durability and consistency, ensuring stable performance even in the most demanding environments."
        />
        <Cards
          icon="fa-expand"
          title="Scalability"
          description="Lightwave offers scalable solutions that grow with your business, providing the flexibility to expand your network infrastructure as your needs evolve."
        />
        <Cards
          icon="fa-headset"
          title="Expert Support"
          description="Lightwave provides comprehensive support services, including detailed documentation, expert consultations, and 24/7 technical assistance to keep your network running smoothly."
        />
      </div>
    </div>
  );
}
