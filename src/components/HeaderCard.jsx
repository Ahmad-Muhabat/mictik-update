export default function HeaderCard({ logo, name, nameInfo, portrait }) {
  return (
    <div
      className="flex flex-col items-center w-full p-8 bg-black lg:flex-row lg:p-28 lg:w-screen"
      style={{
        backgroundColor: "#FFFFFF",
        backgroundImage: "url('https://tlmintl.com/wp-content/uploads/2024/02/light-new.jpg')",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}
    >
      {/* Content goes here */}
      
      <div className="flex flex-col items-center justify-center w-auto text-center lg:text-left lg:items-start lg:w-2/5">
        <div className="flex items-center justify-center lg:justify-start">
          <img className="w-48 my-1 lg:my-5" src={logo} alt="logo" />
        </div>
        <h1 className="mb-2 text-xl font-bold text-white lg:text-3xl lg:mb-8 lg:max-w-[400px]">
          {name}
        </h1>
        <h2 className="text-white lg:text-xl">{nameInfo}</h2>
      </div>

      
    </div>
  );
}
