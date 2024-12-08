import { useState } from "react";
import Form from "./Form";

export default function ProductInfo1({ title, description, image }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full px-12 bg-white sm:px-14 md:px-20 lg:px-28 lg:w-screen">
      {/* Main Wrapper */}
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:py-10">
        {/* Text Section */}
        <div className="order-1 text-center md:order-1 md:text-left lg:w-1/2">
          <h1 className="my-5 text-xl font-extrabold text-black lg:text-3xl text-start">
            {title}
          </h1>
          <p className="mb-5 font-thin text-justify text-gray-500 text-md lg:text-lg">
            {description}
          </p>
          <button
            onClick={handleClick}
            className="px-10 py-3 font-semibold text-black transition border border-black rounded-full hover:bg-black hover:text-white lg:py-4 lg:px-12"
          >
            Quick Enquiry
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center order-2 md:order-2 lg:w-1/2">
          <img
            src={image}
            alt="Product"
            className="object-contain w-full h-auto max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Overlay for Form */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative bg-white p-5 w-[90%] max-w-2xl">
            <button
              className="absolute text-xl font-bold text-black top-2 right-4"
              onClick={handleClose}
            >
              ×
            </button>
            <h1 className="flex items-center justify-center my-8 text-lg font-thin text-gray-950">
              Request Enquiry
            </h1>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
}
