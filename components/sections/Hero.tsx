import Eclipse from "../Eclipse";
import Grid from "../Grid";
import InputBox from "../InputBox";
import Square from "../Square";
import { TextGenerateEffect } from "../TextGenerate";

const Hero = () => {
  return (
    <section className="relative h-screen w-full  overflow-hidden">
      <Square className="absolute z-10 top-1/3 left-10 -rotate-45 " />
      <Square className="absolute z-10 top-20 -right-4 -rotate-[135deg] " />
      <Eclipse className="z-10 -top-64 md:-top-[800px] left-1/2 -translate-x-1/2" />
      <Eclipse className="z-10 -bottom-56 md:-bottom-[650px] -left-1/2 " />
      <Eclipse className=" z-10 -bottom-56 md:-bottom-[650px] -right-1/2 " />
      <Grid />
      <div className="container absolute inset-0 px-20 z-20 mx-auto pt-8  ">
        <TextGenerateEffect
          className=" text-white text-center text-4xl tracking-wider mb-8 "
          words="Transforming Business Workflow, Enhancing Business Performance"
        />
        <InputBox />
        <p className="text-[10px] p-1 text-center">
          I am a Generative AI search engine for this website. I will assist you
          in navigating throughout the website.
        </p>
        <div className="w-full md:w-5/6 mx-auto h-[500px] mt-14 bg-indigo-950 rounded-[3rem]" />
      </div>
    </section>
  );
};

export default Hero;
