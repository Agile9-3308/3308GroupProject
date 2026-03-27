// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="font-bold">Agile Flow</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/me">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;