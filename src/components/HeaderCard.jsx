export default function HeaderCard({ logo, name, nameInfo, portrait }) {
  return (
    <div className="container flex items-center justify-center w-auto gap-5 py-2 bg-black px-15 lg:px-28 ">
      <div className="flex-col items-center justify-center w-2/5 my-20 text-center lg:text-start" >
        <div className="flex items-center justify-center lg:justify-start"><img className="w-48 my-1 text-center lg:my-5" src={logo} alt="logo" /></div>
        <h1 className="mb-2 text-xl font-bold text-white lg:text-3xl lg:mb-8 lg:max-w-[400px]">{name}</h1>
        <h2 className="text-white lg:text-xl">{nameInfo}</h2>
      </div>
      
      <div className="w-3/5">
        <img src={portrait} alt="company" />
      </div>
    </div>
  );
}
