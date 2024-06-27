import Eclipse from "../Eclipse";
import Square from "../Square";

const Features = () => {
  return (
    <section
      id="features"
      className="relative  h-full w-full overflow-hidden bg-indigo-1000"
    >
      <div className="top-0 left-1  absolute lg:top-1/2 -translate-y-1/2 -translate-x-1/2">
        <div
          className={` w-20 h-20 md:w-40 md:h-40 rounded-2xl bg-gradient-to-l from-indigo-900 to-transparent hover:animate-shake `}
        />
      </div>
      <Square className="absolute bottom-1 right-1 md:right-8 -rotate-[135deg] " />
      <Eclipse className="opacity-50 md:w-[500px] md:h-[500px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/4 " />
      <div className="w-5/6 mx-auto py-24 grid grid-cols-2 gap-x-4 gap-y-8 items-center ">
        <div className="w-full space-y-10 col-span-2 lg:col-span-1">
          <h3 className="text-3xl md:text-5xl tracking-wide leading-snug">
            Explore our amazing features
          </h3>
          <p className=" ">
            Empower Your Business Growth: Drive Revenue, Acquire Customers, and
            Enhance Engagement with our Powerful AI assisted SAAS Tools.
          </p>
        </div>
        <div className="w-full col-span-2 lg:col-span-1 grid  md:grid-cols-2 gap-6">
          <div className="w-full h-56 bg-indigo-950 rounded-[3rem] border-4 border-slate-600 "></div>
          <div className="w-full h-56 bg-indigo-950 rounded-[3rem] border-4 border-slate-600 "></div>
          <div className="w-full h-56 bg-indigo-950 rounded-[3rem] border-4 border-slate-600 "></div>
          <div className="w-full h-56 bg-indigo-950 rounded-[3rem] border-4 border-slate-600 "></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
