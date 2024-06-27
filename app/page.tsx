import Square from "@/components/Square";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className=" w-full pt-16 bg-black ">
      <Hero />
      <Features />
    </main>
  );
}
