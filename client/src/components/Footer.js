import {Link} from "react-router-dom"

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <div>
                    <a className="attribute" href="https://www.flaticon.com/free-icons/bird" title="bird icons">Bird icons created by Freepik - Flaticon</a>
                </div>
                <div className="about">
                    <Link to="/about"
                      style={{ textDecoration: "none",
                      color: "black" }}
                    >
                        About
                    </Link>
                </div>
                <div className="contact">
                    <Link to="/contact"
                      style={{ textDecoration: "none",
                      color: "black",
                      backgroundColor: "pink" }}
                    >
                         Contact
                    </Link>   
                </div>   
            </div>
        </div>
         
    
    )
}

export default Footer;