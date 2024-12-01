import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  

  const brands = [
    { name: "Lightwave", url: "https://tlmintl.com/brand/lightwave/" },
    { name: "Ubiquiti", url: "https://tlmintl.com/brand/ubiquiti/" },
    { name: "Mikrotik", url: "https://tlmintl.com/brand/mikrotik/" },
    { name: "Ruijie", url: "https://tlmintl.com/brand/ruijie/" },
    { name: "RF Elements", url: "https://tlmintl.com/brand/rf-elements/" },
    { name: "HPE Networking", url: "https://tlmintl.com/brand/hpe-networking-instant-on/" },
    { name: "Asus", url: "https://tlmintl.com/brand/asus/" },
    { name: "Dell", url: "https://tlmintl.com/brand/dell/" },
    { name: "Epson", url: "https://tlmintl.com/brand/epson/" },
    { name: "Canon", url: "https://tlmintl.com/brand/canon/" },
    { name: "Cudy", url: "https://tlmintl.com/brand/cudy/" },
    { name: "Team Group", url: "https://tlmintl.com/brand/team-group/" },
    { name: "Afox", url: "https://tlmintl.com/brand/afox/" },
    { name: "Logitech", url: "https://tlmintl.com/brand/logitech/" },
    { name: "Slim", url: "https://tlmintl.com/brand/slim/" },
  ];

  const companyLinks = [
    { name: "About Us", url: "https://tlmintl.com/about-us/" },
    { name: "Careers", url: "https://tlmintl.com/careers/" },
    { name: "Blogs", url: "https://tlmintl.com/blogs/" },
    { name: "Contact Us", url: "https://tlmintl.com/contact-us/" },
  ];

  const socialMediaLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/tlm-international-fze/",
      icon: <i className="w-8 text-2xl text-white fab fa-linkedin"></i>,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/tlminternationalfze/",
      icon: <i className="w-8 text-2xl text-white fab fa-instagram"></i>,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCA8k0b8ttvwAvO104pu5dvg",
      icon: <i className="w-8 text-2xl text-white fab fa-youtube"></i>,
    },
  ];

  const contactDetails = [
    {
      name: "Address",
      url: "https://maps.app.goo.gl/5Zr6dZwnaJ2UAyRL7",
      details: "TLM International FZE, Jebel Ali Free Zone, PO Box 43139, Dubai, UAE",
      icon: <i className="w-6 h-6 text-white fas fa-map-marker-alt"></i>,
    },
    {
      name: "Phone",
      url: "tel:+97148807299",
      details: "+971-4-8807299",
      icon: <i className="w-6 h-6 text-white fas fa-phone"></i>,
    },
    {
      name: "Email",
      url: "mailto:info@tlmintl.com",
      details: "info@tlmintl.com",
      icon: <i className="w-6 h-6 text-white fas fa-envelope"></i>,
    },
  ];

  return (
    <footer className="flex flex-col items-start justify-center w-full gap-20 p-20 text-center text-gray-400 bg-gray-900 lg:flex-row lg:text-start">
      <div className='flex-col w-2/4'>
      {/* Brands Section */}
      <div className="mb-8">
        <h4 className="mb-4 text-3xl text-white">Brands</h4>
        <div className="flex gap-4 ggrid-cols-1 lg:grid sm:grid-cols-2 md:grid-cols-3">
          {brands.map((brand, index) => (
            <a key={index} href={brand.url} className="hover:text-gray-400">
              {brand.name}
            </a>
          ))}
        </div>
      </div>

      {/* Company Links Section */}
      <div className="w-1/4 mb-8">
        <h4 className="mb-4 text-3xl text-white">Company</h4>
        <div className="flex space-x-10">
          {companyLinks.map((link, index) => (
            <a key={index} href={link.url} className=" hover:text-gray-400">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      </div>
      {/* Social Media Section */}
<div className="w-1/4 mb-8">
  <h4 className="mb-4 text-3xl text-white">Social Media</h4>
  <div className="flex flex-col space-y-4">
    {socialMediaLinks.map((link, index) => (
      <a key={index} href={link.url} className="flex items-center space-x-2 hover:text-gray-400">
        {link.icon}
        <span>{link.name}</span>
      </a>
    ))}
  </div>
</div>


      {/* Contact Details Section */}
      <div>
        <h4 className="mb-4 text-3xl text-white">Head Office</h4>
        <ul className="space-y-4">
          {contactDetails.map((contact, index) => (
            <li key={index} className="flex items-center space-x-4">
              <span>{contact.icon}</span>
              <a href={contact.url} className="hover:text-gray-400">
                {contact.details}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
