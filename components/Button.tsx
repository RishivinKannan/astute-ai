export const buttonClasses = () => {
  return "text-center text-sm md:text-base button-gradient border-4 border-indigo-900 rounded-full md:px-6 px-2 py-[2px] md:py-1  hover:border-indigo-800";
};

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`${className} text-sm md:text-base button-gradient border-4 border-indigo-900 rounded-full md:px-6 px-2 py-[2px] md:py-1  hover:border-indigo-800`}
    >
      {children}
    </button>
  );
};

export default Button;
