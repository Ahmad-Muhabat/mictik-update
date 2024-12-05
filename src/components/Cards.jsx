export default function Cards({ title, description, icon }) {
  return (
    <div className="w-full p-4 transition-all duration-700 transform border border-red-500 rounded-lg group hover:border-blue-500 hover:-translate-y-3">
      <div className="flex flex-col items-center justify-center px-2 py-3 text-center text-black">
        
        <i className={`fas ${icon} text-4xl  text-red-400 group-hover:text-blue-500`}></i>
        <h2 className="my-5 text-2xl">{title}</h2>
        <p className="text-lg font-thin text-gray-500">{description}</p>
      </div>
    </div>
  );
}

