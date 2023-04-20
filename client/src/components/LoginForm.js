import {useState} from "react";

function LoginForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
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
            <label className="login-username" htmlFor="username">Username</label>
            <input
                type="text"
                className="input-username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label className="login-password" htmlFor="password">Password</label>
            <input
                type="password"
                className="input-password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button2" type="submit">
                {isLoading ? "Loading..." : "Login"}
            </button>
            {errors.map((err) => (
                <p className="login-error" key={err}>{err}</p>
            ))}
        </form>
    );
}

export default LoginForm;