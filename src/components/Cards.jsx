export default function Cards({ title, description, icon }) {
  return (
    <div className="w-full p-5 transition-all duration-300 transform border border-red-500 rounded-lg group hover:border-blue-500 hover:-translate-y-5">
      <div className="flex flex-col items-center justify-center p-8 text-center text-black">
        
        <i className={`fas ${icon} text-4xl mb-5 text-red-500 group-hover:text-blue-500`}></i>
        <h2 className="my-5 text-2xl">{title}</h2>
        <p className="text-lg text-gray-500">{description}</p>
      </div>
    </div>
  );
}

