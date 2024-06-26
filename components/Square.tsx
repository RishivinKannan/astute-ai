const Square = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div
        className={` w-20 h-20 rounded-2xl bg-gradient-to-l from-indigo-900 to-transparent hover:animate-shake `}
      />
    </div>
  );
};

export default Square;
