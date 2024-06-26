const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="button-gradient border-4 border-indigo-900 rounded-full px-6 py-1 hover:border-indigo-800">
      {children}
    </button>
  );
};

export default Button;
