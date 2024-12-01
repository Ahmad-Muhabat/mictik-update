import HeaderCard from "./components/HeaderCard";
import ProductInfo from "./components/ProductInfo";
import ProductInfo1 from "./components/ProductInfo-1";
import DescriptionCard from "./components/DescriptionCard";
import Accordion from "./components/Accordion";
import RegesterInfo from "./components/RegesterInfo";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";


export default function App() {
  const logoUrl= "https://tlmintl.com/wp-content/uploads/2024/02/Lightwave-Logo.png";
  const backLogoUrl = "https://tlmintl.com/wp-content/uploads/2024/03/aruba-instant-on-products.png";
  
  const imageUrl1 = "https://tlmintl.com/wp-content/uploads/2024/02/AC-Lightwavee.png";
  const imageUrl2 = "https://tlmintl.com/wp-content/uploads/2024/02/Electronics-01.png";
  
 
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        
        <HeaderCard 
          logo={logoUrl}
          name="Illuminating Innovation, Powering Reliability"
          nameInfo="Lightwave Distributors in Africa"
          portrait={backLogoUrl}
        />
        <ProductInfo
        title="Air Conditioners"
        description="Lightwave extends a warm invitation to resellers seeking cutting-edge air conditioning solutions. Our range of products embodies a perfect blend of technology, energy efficiency, and user-centric design. Partnering with Lightwave means offering your customers smart and sustainable cooling solutions that not only enhance comfort but also contribute to a greener environment. From intelligent climate control features to seamless integration with smart home systems, our air conditioners redefine the standards of modern cooling."       
          image={imageUrl1} />
      </div>
      
      <div>
        <ProductInfo1
        title="LED & Smart TV's"
        description="Lightwave is proud to offer a diverse range of LED and Smart TVs that cater to the evolving demands of today’s consumers. Our products boast stunning visuals, innovative features, and unparalleled reliability, ensuring your customers experience entertainment like never before. Whether you’re looking to enhance your product portfolio or elevate your customer offerings, Lightwave has you covered. Partner with us, and let’s illuminate the future of home entertainment together. Join the Lightwave family, where quality meets innovation, and resellers thrive."       
          image={imageUrl2} />
        <DescriptionCard 
          title="What sets Lightwave Apart"
          description="Lightwave excels by delivering high-performance fiber optic solutions, designed to enhance data transmission and ensure reliable, high-speed connectivity for modern networks."
         
         />
         
         <div className="flex justify-center mb-8 font-bold text-7xl">FAQs</div>
         <div className="grid grid-cols-2">
         <Accordion less="What types of fiber optic solutions does Lightwave offer?"
          more="Lightwave offers a variety of fiber optic cables, connectors, and network switches designed for high-speed data transfer, ensuring reliable and scalable networking solutions for businesses."
         />
         <Accordion less="Are Lightwave networking solutions compatible with other brands?"
          more="Yes, Lightwave’s cables and network equipment are designed to be compatible with many other major networking brands, ensuring easy integration into existing systems."
         />
         <Accordion less="What industries benefit most from Lightwave fiber optics?"
          more="Industries such as telecommunications, data centers, and healthcare benefit from Lightwave fiber optics due to their need for high-speed, reliable, and secure data transmission."
         />
         <Accordion less="How do Lightwave products enhance network reliability?"
          more="Lightwave products use advanced fiber optic technology to reduce signal loss and interference, resulting in more stable and faster network connections, especially in high-demand environments."
         />
         <Accordion less="Where can I buy authentic Lightwave products?"
          more="You can purchase genuine Lightwave networking equipment from authorized distributors and trusted online retailers to ensure product authenticity and warranty support."
         />
         <Accordion less="What is the typical lifespan of Lightwave fiber optic cables?"
          more="Lightwave fiber optic cables are built for long-lasting performance, typically lasting over 25 years with proper installation and maintenance, ensuring reliable network infrastructure for years to come."
         />
         </div>
         <RegesterInfo image={logoUrl} 
         information="From LED and Smart TVs offering stunning visuals and innovative features to cutting-edge air conditioning solutions embodying technology and sustainability, Lightwave caters to evolving consumer demands. Resellers can elevate their offerings with advanced cash counting machines, compatible print toners, Cat6 cables, online/offline UPS systems, stabilizers, and extension sockets. Partnering with Lightwave means accessing reliable, innovative products backed by a commitment to excellence, empowering businesses to thrive in the modern technological landscape. Choose Lightwave and illuminate the future of home entertainment, cooling solutions, financial efficiency, and power management together." />
         <Footer />
         <a
          className="relative"
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
         
      </div>
      
    </div>
  )
}