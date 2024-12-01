import { useState } from 'react';

export default function ProductInfo1({ title, description, image }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="container flex items-center justify-center w-auto mx-auto">
      {/* Main Wrapper */}
      <div className="flex flex-col items-center justify-between w-auto px-4 text-center lg:flex-row lg:items-start lg:gap-10 lg:py-10 lg:px-20 lg:text-start">
        
        {/* Text Section */}
        <div className="mb-6 lg:w-1/2 lg:mb-0">
          <h1 className="mb-5 text-3xl font-bold text-black">{title}</h1>
          <p className="mb-5 text-justify">{description}</p>
          <button
            onClick={handleClick}
            className="px-5 py-2 font-semibold text-black border border-black rounded-full"
          >
            Quick Enquiry
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src={image}
            alt="Product"
            className="object-contain w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
}
