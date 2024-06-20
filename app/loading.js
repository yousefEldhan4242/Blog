export default function loading() {
  return (
    <div className="bg-gray-100 h-[100vh] flex flex-col items-center justify-center">
      <h2 className="text-black block mb-5 text-[40px] font-black">
        loading ...
      </h2>
      <div className="animate-spin w-10 h-10 bg-black rounded-lg block"></div>
    </div>
  );
}
