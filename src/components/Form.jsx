export default function Form() {
  return (
    <div className="bg-none w-[750px] flex mx-auto px-16 py-14 justify-center items-center flex-col">
      <input 
        className="border p-2 rounded-lg mb-3 w-full border-black placeholder-slate-500 placeholder:font-bold" 
        type="text" 
        placeholder="Name" 
      />
      <div className="flex gap-3 w-full">
        <input 
          className="border p-2 rounded-lg mb-3 w-full border-black placeholder-slate-500 placeholder:font-bold" 
          type="email" 
          placeholder="Email" 
        />
        <input 
          className="border p-2 rounded-lg mb-3 w-full border-black placeholder-slate-500 placeholder:font-bold" 
          type="password" 
          placeholder="Phone" 
        />
      </div>
      <input 
        className="border p-2 rounded-lg mb-3 w-full border-black placeholder-slate-500 placeholder:font-bold" 
        type="text" 
        placeholder="Subject" 
      />
      <textarea 
        className="border p-2 rounded-lg mb-3 w-full border-black placeholder-slate-500 placeholder:font-bold h-[100px]" 
        placeholder="How can we help?"
      ></textarea>
      <button 
        className="bg-rose-500 font-bold uppercase text-white p-4 rounded-lg w-full"
      >
        Submit
      </button>
    </div>
  );
}
