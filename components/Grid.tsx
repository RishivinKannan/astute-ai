const Grid = ({ height = "h-[50rem]" }) => {
  return (
    <div
      className={`${height} w-full bg-black bg-grid-white/[0.04]  relative flex items-center justify-center`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
};

export default Grid;
