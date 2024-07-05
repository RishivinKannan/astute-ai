import Square from "@/components/Square";
import Blogs from "@/components/sections/Blogs";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";

async function getBlogs() {
  const res = await fetch(
    "https://vishnupk05.pythonanywhere.com/api/fetch_6_posts",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getBlogs();
  return (
    <main className=" w-full pt-16 bg-black ">
      <Hero />
      <Features />
      <Blogs blogs={data} />
    </main>
  );
}
