import './style.css'


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
                        <li><a className="active" href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
                </nav>

             </div>
            )
}
export default NavBar;