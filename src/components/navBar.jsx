import "../css/navbar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav">
            <ul className="menu_list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                <li><Link to="/restaurant">Restaurant</Link></li>
            </ul>

            <h4 className="nameHotel">Orvessa Suites</h4>

            <button className="ctBtn">
                <span>Contact us</span>
            </button>
        </div>
    );
};
export default NavBar;