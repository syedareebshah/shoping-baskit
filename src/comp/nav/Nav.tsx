import './style.css'
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <nav>
                <input type="checkbox" id="check" />
                <label className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">LOGO</label>
                <ul>
                    <li>
                        <Link to="/">
                            <a className="active" href="#">Home</a>
                        </Link>
                    </li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li>
                        <Link to="/cart">
                            <a href="#" className="notification">
                                <span>Cart</span>
                                <span className="badge">5</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
export default NavBar;