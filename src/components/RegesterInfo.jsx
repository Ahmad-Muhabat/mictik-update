import Form from "./Form"

export default function RegesterInfo({ information, image }) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-20 mx-auto bg-black lg:flex-row"  style={{
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtT40OpfrSTFB4lSRsJQkvxG4vn3ZBAIsuiETH-djOj7lDiaBFNNDKIBIyNtHZQKF5Ll4&usqp=CAU")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 'auto', 
      width: 'auto',  
    }}>
      <div className="w-2/4">
        <img className="w-[300px] mb-4" src={image}/>
        <p className="text-justify text-white">{information}</p>

      </div>
      
      <div className="w-2/4">
      <Form />
        
      </div>
  </div>
    
  )
}