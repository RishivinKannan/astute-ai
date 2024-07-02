import BlogCard from "../BlogCard";
import Button from "../Button";
import Eclipse from "../Eclipse";
import Grid from "../Grid";
import Square from "../Square";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
type TBlogs = {
  author: string;
  content: string;
  date_created: string;
  id: number;
  thumbnail: string;
  title: string;
}[];
const Blogs = ({ blogs }: { blogs: TBlogs }) => {
  return (
    <section id="blogs" className="relative w-full overflow-hidden">
      <Square className="absolute z-10 top-16 left-6 rotate-45 " />
      <Eclipse className="z-10 -top-64 md:-top-[800px] left-1/2 -translate-x-1/2" />
      <Eclipse className="z-10 -bottom-56 md:-bottom-[650px] -left-1/2 " />
      <Eclipse className=" z-10 -bottom-56 md:-bottom-[650px] -right-1/2 " />
      <Grid height="h-[48rem]" />
      <div className="container  absolute inset-0 z-20  pt-20  ">
        <h2 className="text-center text-3xl lg:text-5xl underline mb-20">
          Blogs
        </h2>
        <div className="w-5/6 mx-auto ">
          <Carousel className="w-full">
            <CarouselContent className="pb-8">
              {blogs.map((blog) => (
                <CarouselItem
                  key={blog.id}
                  className="md:basis-1/2 lg:basis-1/3 "
                >
                  <BlogCard blog={blog} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext
              variant={"ghost"}
              className="bg-gradient-to-b from-indigo-900 to-indigo-800 "
            />
            <CarouselPrevious
              variant={"ghost"}
              className="bg-gradient-to-b from-indigo-900 to-indigo-800 "
            />
          </Carousel>
        </div>
        <div className=" mx-auto flex justify-center mt-12 ">
          <Button className="w-56 font-semibold mx-auto text-base ">
            More Blogs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
