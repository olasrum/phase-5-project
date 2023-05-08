import {Link} from "react-router-dom";
import logo from "./logo.png"

function NavBar({size, setUser}) {

    function handleLogoutClick() {
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <nav>
            <div className="nav-bar">
                <Link to="/"
                      style={{ textDecoration: "none",
                               marginTop: "15px"}}
                >
                    <div className="shop-name-logo">
                    <span className="shop-name">
                    For the love of birds
                    </span>
                    <img className="logo" src={logo} alt="Flying birds logo"></img>
                    </div>
                </Link>
                <div className="cart">
                <Link to="/cart">
                    <span>
                        <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                    </span>
                </Link>
                    <span>{size}</span>
                </div>
                <div className="sign-out">
                <Link to="/" onClick={handleLogoutClick}>
                    <span>
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </span>
                </Link>     
                </div>
            </div>
        </nav>
    );
}

export default NavBar;