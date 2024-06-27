import Eclipse from "../Eclipse";
import Grid from "../Grid";
import Square from "../Square";

const Blogs = () => {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      <Square className="absolute z-10 top-20 left-12 rotate-45 " />
      <Eclipse className="z-10 -top-64 md:-top-[800px] left-1/2 -translate-x-1/2" />
      <Eclipse className="z-10 -bottom-56 md:-bottom-[650px] -left-1/2 " />
      <Eclipse className=" z-10 -bottom-56 md:-bottom-[650px] -right-1/2 " />
      <Grid height="h-[35rem]" />
      <div className="container absolute inset-0 z-20 mx-auto pt-8  "></div>
    </section>
  );
};

export default Blogs;
