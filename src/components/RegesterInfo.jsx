import Form from "./Form";

export default function RegesterInfo({ information, image }) {
  return (
    <div
      className="flex flex-col items-center justify-center w-full gap-10 px-12 py-4 bg-black lg:px-20 lg:flex-row lg:w-screen"
      style={{
        backgroundImage:
          'url("https://tlmintl.com/wp-content/uploads/2024/03/product-category-bg-circles_1440x590.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-start justify-center w-full lg:w-2/4">
        <img className="lg:w-[300px] mb-4 w-[200px]" src={image} alt="Product" />
        <p className="text-justify text-white">{information}</p>
      </div>

      <div className="w-full lg:w-2/4">
        <Form />
      </div>
    </div>
  );
}
