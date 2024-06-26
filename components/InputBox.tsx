import { cn } from "@/utils/cn";
import Button from "./Button";

const InputBox = () => {
  return (
    <div className="relative bg-inherit w-full md:w-4/6 mx-auto ">
      <input
        type="text"
        placeholder="How may I assist you"
        className={cn(
          "px-8 py-2 bg-inherit rounded-full h-16 w-full ",
          "bg-gradient-to-r from-transparent to-indigo-900/30",
          "border-4 border-neutral-700 outline-none ",
          "text-xl text-white"
        )}
      />
      <div className="absolute top-3 right-4">
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default InputBox;
