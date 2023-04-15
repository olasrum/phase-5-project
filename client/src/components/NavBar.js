import {Link} from "react-router-dom";
import logo from "./logo.png"

function NavBar() {
    return (
        <nav>
            <div className="nav-bar">
                <Link to="/"
                      style={{ textDecoration: "none",
                               marginTop: "15px"}}
                >
                    <span className="shop-name">
                    For the love of birds
                    </span>
                    <img className="logo" src={logo} alt="Flying birds logo"></img>
                </Link>
                <div className="cart">
                    <span>
                        <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="sign-out">
                    <span>
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;