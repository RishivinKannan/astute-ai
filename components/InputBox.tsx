import { cn } from "@/utils/cn";
import Button from "./Button";

const InputBox = () => {
  return (
    <div className="w-5/6 md:w-4/6 mx-auto ">
      <div className="relative bg-inherit w-full  ">
        <input
          type="text"
          placeholder="How may I assist you"
          className={cn(
            "md:px-8 md:py-2 px-4 py-1 bg-inherit rounded-full h-12 md:h-16 w-full ",
            "bg-gradient-to-r from-transparent to-indigo-900/30",
            "border-4 border-neutral-700 outline-none ",
            "text-sm md:text-xl text-white"
          )}
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-4">
          <Button>Get Started</Button>
        </div>
      </div>
      <p className="w-full text-[10px] xl:text-sm p-1 text-center">
        I am a Generative AI search engine for this website. I will assist you
        in navigating throughout the website.
      </p>
    </div>
  );
};

export default InputBox;
