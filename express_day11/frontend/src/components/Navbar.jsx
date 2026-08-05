import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center">
        <Link to="/home" className="text-lg font-semibold mr-6">Home</Link>
        <Link to="/" className="text-sm text-gray-700 mr-4">Register</Link>
        <Link to="/login" className="text-sm text-gray-700">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar