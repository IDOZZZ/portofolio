export default function Button({ children, variant = "primary", ...props }) {
    const base = "px-6 py-2 rounded-full font-medium transition-all duration-300";
  
    const variants = {
      primary: `${base} bg-white text-black hover:scale-105 hover:shadow-lg`,
      outline: `${base} border border-white text-white hover:bg-white hover:text-black hover:shadow-md`,
    };
  
    return (
      <button className={variants[variant]} {...props}>
        {children}
      </button>
    );
  }
  