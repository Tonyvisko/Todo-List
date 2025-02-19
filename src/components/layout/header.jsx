import { Link, NavLink } from 'react-router-dom';//dung link de ko load lai trang,dung navlink de lam noi bat header dang truy cap
import './header.css'

const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
        </ul>
    )
}

export default Header;