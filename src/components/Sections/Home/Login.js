import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {auth} from './firebase-config';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State variable for error message

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/");
                console.log(user);
            })
            .catch((error) => {
                // Set custom error message
                setError("Wrong username or password");
                console.log(error);
            });
    };

    const onGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((userCredential) => {
                // Signed in with Google
                const user = userCredential.user;
                navigate("/");
                console.log(user);
            })
            .catch((error) => {
                // Set custom error message
                setError("Wrong username or password");
                console.log(error);
            });
    };

    return (
        <>
            <main >
                <section className='login-form'>
                    <div>
                        <h2> Idea Voting Platform </h2>
                        <form className='login-form'>
                            <div className='controls'>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className='controls'>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {error && <p className="error-message">{error}</p>} {/* Display error message if error exists */}

                            <div>
                                <button
                                    onClick={onLogin}
                                >
                                    Login
                                </button>
                            </div>

                            <div>
                                <button
                                    onClick={onGoogleLogin}
                                    className="google-login-button"
                                >
                                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" />
                                    Login with Google
                                </button>
                            </div>
                        </form>

                        <p className="text-sm text-black text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login;
