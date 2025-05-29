import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm text-white px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between shadow-md">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-0">
        Amazone Tattoo
      </h1>

      <nav className="flex gap-4 sm:gap-6 text-xs sm:text-sm md:text-base">
        <Link to="/" className="hover:underline">
          Accueil
        </Link>
        <Link to="/galerie" className="hover:underline">
          Galerie
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
