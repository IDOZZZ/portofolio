export default function Header() {
    return (
      <nav className="w-full py-4 px-6 flex justify-end space-x-6 text-sm text-gray-300">
        <a href="#home" className="hover:text-white transition">Home</a>
        <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
        <a href="#about" className="hover:text-white transition">About Me</a>
        <a href="#resume" className="hover:text-white transition">Resume</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>
    );
  }
  