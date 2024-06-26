const Eclipse = ({ className }: { className?: string }) => {
  return (
    <div
      className={` absolute radial-gradient w-96 h-96 md:w-[1000px] md:h-[1000px] rounded-full  ${className}`}
    ></div>
  );
};

export default Eclipse;
