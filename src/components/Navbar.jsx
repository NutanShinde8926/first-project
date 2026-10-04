import { Link } from "react-router-dom"
function Navbar() {
    return (
        <nav>
            <h1>Task Manager</h1>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
            <Link to="/task">Task</Link>
        </nav>
    )
}

export default Navbar