import '@fortawesome/fontawesome-free/css/all.min.css';
import Cards from "./Cards";

export default function DescriptionCard({ title, description }) {
  return (
    <div className="w-full px-12 py-6 sm:px-14 md:px-16 lg:px-20 bg-neutral-100 lg:w-screen">
      {/* Title and Description Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-lg font-extrabold text-black sm:text-xl lg:text-3xl">
          {title}
        </h1>
        <p className="mt-4 text-sm font-thin text-gray-500 sm:text-base lg:text-lg lg:max-w-[750px]">
          {description}
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 xl:grid-cols-4">
        <Cards
          icon="fa-lightbulb"
          title="Innovation"
          description="Lightwave pioneers cutting-edge technology solutions, driving innovation in fiber optics and networking to deliver faster, more reliable connections."
          className="flex flex-col items-center justify-center w-full h-[300px] p-4 border bg-white shadow-lg"
        />
        <Cards
          icon="fa-cogs"
          title="Reliability"
          description="Lightwave’s equipment is designed with a focus on durability and consistency, ensuring stable performance even in the most demanding environments."
          className="flex flex-col items-center justify-center w-full h-[300px] p-4 border bg-white shadow-lg"
        />
        <Cards
          icon="fa-expand"
          title="Scalability"
          description="Lightwave offers scalable solutions that grow with your business, providing the flexibility to expand your network infrastructure as your needs evolve."
          className="flex flex-col items-center justify-center w-full h-[300px] p-4 border bg-white shadow-lg"
        />
        <Cards
          icon="fa-headset"
          title="Expert Support"
          description="Lightwave provides comprehensive support services, including detailed documentation, expert consultations, and 24/7 technical assistance to keep your network running smoothly."
          className="flex flex-col items-center justify-center w-full h-[300px] p-4 border bg-white shadow-lg"
        />
      </div>
    </div>
  );
}
