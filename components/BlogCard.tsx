import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import Button from "./Button";

interface BlogProps {
  blog: {
    author: string;
    content: string;
    date_created: string;
    id: number;
    thumbnail: string;
    title: string;
  };
}

const BlogCard: FC<BlogProps> = ({ blog }) => {
  return (
    <div
      className={cn(
        "relative  md:w-72 h-96  mx-auto rounded-3xl p-4 space-y-4 ",
        "bg-gradient-to-b from-indigo-950 via-indigo-900 to-transparent"
      )}
    >
      <Image
        src={blog.thumbnail.includes("http") ? blog.thumbnail : ""}
        alt="thumnail"
        className="w-full h-1/2 object-fill rounded-3xl"
        width={100}
        height={60}
      />
      <h4 className="text-2xl md:text-xl text-center font-semibold">
        {blog.title}
      </h4>
      <Button className="text-base py-1 px-6 font-semibold absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 ">
        Read More
      </Button>
    </div>
  );
};

export default BlogCard;
