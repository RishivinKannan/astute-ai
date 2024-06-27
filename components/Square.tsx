const Square = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div
        className={`w-12 h-12  md:w-20 md:h-20 rounded-2xl bg-gradient-to-l from-indigo-900 to-transparent animate-shake `}
      />
    </div>
  );
};

export default Square;
