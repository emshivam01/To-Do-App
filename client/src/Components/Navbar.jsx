export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-[#16161a] rounded-br-md rounded-bl-md">
      <a href="google.com" className="cursor-pointer text-[#fffffe] text-2xl font-semibold">
        Todo App
      </a>
      <div className="flex gap-4">
        <button className=" rounded-lg px-5 py-1 text-white font-medium bg-[#7f5af0] border-none outline-none">
          Sign Out
        </button>
      </div>
    </div>
  );
};
