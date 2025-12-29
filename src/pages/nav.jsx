import { Link } from "react-router-dom";


function Nav() {
  return (
    <div className="flex justify-between items-center p-4 px-12">
      <div>
        <Link to="/" className="flex gap-1">
        <img src="/logo.png" alt="logo" width={25} /> Zeepay
        </Link>
      </div>

      <div className="flex gap-3 text-sm"> 
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Pages</Link>
      </div>

      <div className="flex gap-1.5">
        <Link to="/login" className="bg-white-500 text-blue-500 px-4 py-2 rounded-md">Login</Link>
        <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-md">SignUp</Link>
      </div>

    </div>
  )
}

export default Nav;