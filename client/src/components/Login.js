import {useState} from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="login">
            <h1 className="login-header">For the love of birds</h1>
            {showLogin ? (
            <>
                <LoginForm onLogin={onLogin} />
                <div className="dont-account-box">
                <p className="dont-account">
                    Don't have an account? &nbsp;
                    <button className="signup-button" onClick={() => setShowLogin(false)}>
                        Sign Up
                    </button>
                </p>
                </div>
            </>
          ) : (
            <>
            <SignUpForm onLogin={onLogin}/>
            <div className="have-account-box">
            <p className="have-account">
                Already have an account? &nbsp;
                <button className="login-button" onClick={() => setShowLogin(true)}>
                    Log In
                </button>
            </p>
            </div>
            </>
            )}
        </div>
    );
}

export default Login;