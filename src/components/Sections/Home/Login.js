import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {auth} from './firebase-config';
import { googleAuth, signinuser } from '../../../Api/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State variable for error message
    const [user, setUser] = useState(null)
    const onLogin =async (e) => {
        e.preventDefault();
      await signinuser(email, password).then((value)=>{
        if(value.data.user){
            navigate("/")
            window.location.reload()
        }else{
            alert(value.error.message)
        }
       })
console.log(email, password)    };

  
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
                                    onClick={()=>{
                                        googleAuth().then((val)=>{
                                            console.log(val)
                                        }).catch((err)=>{
                                            console.log(err.data)
                                        })
                                    }}
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
