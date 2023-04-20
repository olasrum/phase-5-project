import { useState } from "react";

function SignUpForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPassworConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="signup-username" htmlFor="username">Username</label>
            <input
                type="text"
                className="input-username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label className="signup-password" htmlFor="password">Password</label>
            <input 
                type="password"
                className="input-password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label className="signup-confirm-password" htmlFor="password">Confirm password</label>
            <input
                type="password"
                className="input-password_confirmation"
                autoComplete="current-password"
                value={passwordConfirmation}
                onChange={(e) => setPassworConfirmation(e.target.value)}
            />
            <button className="signup-button2" type="submit">
                {isLoading ? "Loading..." : "Sign Up"}
            </button>
            {errors.map((err) => (
                <p className="login-error" key={err}>{err}</p>
            ))}
        </form>
    );
}

export default SignUpForm;