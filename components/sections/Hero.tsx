import Eclipse from "../Eclipse";
import Grid from "../Grid";
import InputBox from "../InputBox";
import Square from "../Square";
import { TextGenerateEffect } from "../TextGenerate";

const Hero = () => {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      <Square className="absolute z-10 top-1/4 lg:top-1/3 md:left-4 -rotate-45 " />
      <Square className="absolute z-10 top-20 -right-4 -rotate-[135deg] " />
      <Eclipse className="z-10 -top-64 md:-top-[800px] left-1/2 -translate-x-1/2" />
      <Eclipse className="z-10 -bottom-56 md:-bottom-[650px] -left-1/2 " />
      <Eclipse className=" z-10 -bottom-56 md:-bottom-[650px] -right-1/2 " />
      <Grid />
      <div className="container absolute inset-0 z-20 mx-auto pt-8  ">
        <TextGenerateEffect
          className="  text-white text-center text-lg sm:text-2xl md:text-3xl lg:text-5xl tracking-wider mb-8"
          words="Transforming Business Workflow, /n Enhancing Business Performance"
        />
        <InputBox />
      </div>
      <div
        className="absolute z-20 -bottom-14 left-1/2 -translate-x-1/2
       w-5/6 md:w-4/6 mx-auto h-4/6  bg-indigo-950 rounded-[3rem]"
      />
    </section>
  );
};

export default Hero;
