export default function ProductInfo({ title, description, image }) {
  return (
    <div className="container flex items-center justify-center w-auto gap-5 px-20 py-2 bg-gray-100">

      <div>
        <img src={image} alt="images" />
      </div>

      <div className="w-3/4">
        <h1 className="mb-5 text-3xl font-bold ">{title}</h1>
        <p className="mb-5">{description}</p>
        <button className="px-5 py-2 font-semibold text-black border-black rounded-full">Quick Enquiry</button>
      </div>
    </div>
    
  )
}