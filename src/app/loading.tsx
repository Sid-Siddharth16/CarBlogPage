export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] py-10">
      <span className="mb-4 inline-block w-12 h-12 border-4 border-gray-300 border-t-[#FF5959] rounded-full animate-spin"></span>
      <div className="text-center text-lg text-gray-500">
        Loading car blogs...
      </div>
    </div>
  );
} 