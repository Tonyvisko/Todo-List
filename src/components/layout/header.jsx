import './header.css'

const Header = () => {
    return (
        <ul>
            <li><a class="active" href="/">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/products">Products</a></li>
        </ul>
    )
}

export default Header;