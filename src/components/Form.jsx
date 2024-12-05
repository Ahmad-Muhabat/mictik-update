export default function Form() {
  return (
    <div className="flex flex-col items-center justify-center w-auto px-12 py-12 mx-auto bg-none">
      <input 
        className="w-full p-2 mb-3 placeholder-gray-500 border border-black rounded placeholder:font-semibold" 
        type="text" 
        placeholder="Name" 
      />
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <input 
          className="w-full p-2 placeholder-gray-500 border border-black rounded placeholder:font-semibold lg:mb-3" 
          type="email" 
          placeholder="Email" 
        />
        <input 
          className="w-full p-2 mb-3 placeholder-gray-500 border border-black rounded placeholder:font-semibold" 
          type="password" 
          placeholder="Phone" 
        />
      </div>
      <input 
        className="w-full p-2 mb-3 placeholder-gray-500 border border-black rounded placeholder:font-semibold" 
        type="text" 
        placeholder="Subject" 
      />
      <textarea 
        className="border p-2 rounded mb-3 w-full border-black placeholder-gray-5 placeholder:font-semibold h-[100px00]" 
        placeholder="How can we help?"
      ></textarea>
      <button 
        className="w-full p-4 font-semibold text-white uppercase rounded bg-rose-500"
      >
        Submit
      </button>
    </div>
  );
}
