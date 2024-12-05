import Form from "./Form"

export default function RegesterInfo({ information, image }) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-10 py-4 mx-auto bg-black lg:px-20 lg:flex-row"  style={{
      backgroundImage: 'url("https://tlmintl.com/wp-content/uploads/2024/03/product-category-bg-circles_1440x590.svg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 'auto', 
      width: 'auto',  
    }}>
      <div className="lg:w-2/4">
        <img className="lg:w-[300px] mb-4 w-[200px]" src={image}/>
        <p className="text-justify text-white">{information}</p>

      </div>
      
      <div className="w-full lg:w-2/4">
      <Form />
        
      </div>
  </div>
    
  )
}