import HeaderCard from "./components/HeaderCard";
import ProductInfo from "./components/ProductInfo";
import ProductInfo1 from "./components/ProductInfo-1";
import DescriptionCard from "./components/DescriptionCard";
import RegesterInfo from "./components/RegesterInfo";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { Link } from "./components/Link";


export default function App() {
  const logoUrl= "https://tlmintl.com/wp-content/uploads/2024/02/Lightwave-Logo.png";
  const backLogoUrl = "https://tlmintl.com/wp-content/uploads/2024/03/aruba-instant-on-products.png";
  
  const imageUrl1 = "https://tlmintl.com/wp-content/uploads/2024/02/AC-Lightwavee.png";
  const imageUrl2 = "https://tlmintl.com/wp-content/uploads/2024/02/Electronics-01.png";
  
 
  
  return (
    <div className="container mx-auto max-w-auto">

      <HeaderCard 
        logo={logoUrl}
        name="Illuminating Innovation, Powering Reliability"
        nameInfo="Lightwave Distributors in Africa"
        portrait={backLogoUrl}
      />
      
      <ProductInfo
        title="Air Conditioners"
        description="Lightwave extends a warm invitation to resellers seeking cutting-edge air conditioning solutions. Our range of products embodies a perfect blend of technology, energy efficiency, and user-centric design. Partnering with Lightwave means offering your customers smart and sustainable cooling solutions that not only enhance comfort but also contribute to a greener environment. From intelligent climate control features to seamless integration with smart home systems, our air conditioners redefine the standards of modern cooling."       
        image={imageUrl1} 
      />
    
      <ProductInfo1
          title="LED & Smart TV's"
          description="Lightwave is proud to offer a diverse range of LED and Smart TVs that cater to the evolving demands of today’s consumers. Our products boast stunning visuals, innovative features, and unparalleled reliability, ensuring your customers experience entertainment like never before. Whether you’re looking to enhance your product portfolio or elevate your customer offerings, Lightwave has you covered. Partner with us, and let’s illuminate the future of home entertainment together. Join the Lightwave family, where quality meets innovation, and resellers thrive."       
          image={imageUrl2} 
      />
      
      <DescriptionCard 
          title="What sets Lightwave Apart"
          description="Lightwave excels by delivering high-performance fiber optic solutions, designed to enhance data transmission and ensure reliable, high-speed connectivity for modern networks."
      />
      
      <div className="flex items-center justify-center w-full mb-8 text-3xl font-bold text-center mt-28 lg:text-6xl sm:mt-5 lg:w-screen">
        FAQs
      </div>

      <Accordion />
      
      <RegesterInfo image={logoUrl} 
          information="From LED and Smart TVs offering stunning visuals and innovative features to cutting-edge air conditioning solutions embodying technology and sustainability, Lightwave caters to evolving consumer demands. Resellers can elevate their offerings with advanced cash counting machines, compatible print toners, Cat6 cables, online/offline UPS systems, stabilizers, and extension sockets. Partnering with Lightwave means accessing reliable, innovative products backed by a commitment to excellence, empowering businesses to thrive in the modern technological landscape. Choose Lightwave and illuminate the future of home entertainment, cooling solutions, financial efficiency, and power management together."
     /> 
      
      <Footer/>
      <Link/>
      <a
          className="relative hidden lg:block"
          data-action="open"
          data-phone="971581023459"
          data-message="Hi, I'm looking for more information on Lightwave: Leading Tech Solutions Across UAE & Middle East https://tlmintl.com/brand/lightwave"
          role="button"
          tabIndex="0"
          target="_blank"
          rel="noopener noreferrer" 
      >
        <div className = "fixed flex items-center gap-2 px-4 py-3 text-[13px] text-white bg-green-500 rounded-full bottom-5 right-3 hover:scale-110 font-thin">
        
          <FaWhatsapp className="text-lg" />
        
          <div>How can I help you?</div>
        </div>
      </a> 
      
      <a>
        <div className="fixed flex-col bottom-52 left-5">
          <div className = "flex flex-col items-center text-white">
            <button className="p-2 mb-3 bg-blue-600 hover:scale-110">
            <IoMdCall className="text-3xl rounded-sm "/>
            </button>
            <button className="p-2 mb-3 bg-green-400 hover:scale-110">
            <FaWhatsapp className="text-3xl rounded-sm " />
            </button>
            <button className="p-2 mb-3 bg-red-500">
            <FaEnvelope className="text-3xl rounded-sm "/>
            </button>
          </div>
        </div>
      </a> 

    </div>
  )
}