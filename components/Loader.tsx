import { TbLoader2 } from "react-icons/tb";

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <TbLoader2 className="text-6xl text-blue-1 animate-spin" />
    </div>
  );
};

export default Loader;
