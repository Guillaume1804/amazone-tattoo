import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-zinc-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Amazone Tattoo</h1>
      <nav className="flex gap-4">
        <Link to="/">Accueil</Link>
        <Link to="/galerie">Galerie</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
export default Header
