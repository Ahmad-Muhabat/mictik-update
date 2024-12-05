import '@fortawesome/fontawesome-free/css/all.min.css';
import Cards from "./Cards";

export default function DescriptionCard({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-8 lg:px-28 bg-neutral-100">
      {/* Title and Description Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-xl font-extrabold text-black lg:text-3xl lg:mb-5">{title}</h1>
        <p className="my-6 text-lg font-thin text-gray-500 lg:max-w-[750px]">
          {description}
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-4">
        <Cards
          icon="fa-lightbulb"
          title="Innovation"
          description="Lightwave pioneers cutting-edge technology solutions, driving innovation in fiber optics and networking to deliver faster, more reliable connections."
          className="w-full h-[350px] flex flex-col items-center justify-center border p-6 bg-white shadow-lg"
        />
        <Cards
          icon="fa-cogs"
          title="Reliability"
          description="Lightwave’s equipment is designed with a focus on durability and consistency, ensuring stable performance even in the most demanding environments."
          className="w-full h-[350px] flex flex-col items-center justify-center border p-6 bg-white shadow-lg"
        />
        <Cards
          icon="fa-expand"
          title="Scalability"
          description="Lightwave offers scalable solutions that grow with your business, providing the flexibility to expand your network infrastructure as your needs evolve."
          className="w-full h-[350px] flex flex-col items-center justify-center border p-6 bg-white shadow-lg"
        />
        <Cards
          icon="fa-headset"
          title="Expert Support"
          description="Lightwave provides comprehensive support services, including detailed documentation, expert consultations, and 24/7 technical assistance to keep your network running smoothly."
          className="w-full h-[350px] flex flex-col items-center justify-center border p-6 bg-white shadow-lg"
        />
      </div>
    </div>
  );
}
