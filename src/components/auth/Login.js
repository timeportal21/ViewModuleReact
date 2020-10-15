import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
    const { email, password } = loginData;
    return (
        <div className="register__form">
            <div className="auth__box">
                <div className="info__header">
                    <h1 className="large text-center">Login In</h1>
                    <p className="lead text-center">Access Your Account</p>
                </div>
                <div className="form__box">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                name="email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Login
                        </button>
                    </form>
                </div>
                <p className="my-1">
                    Dont't have an account?
                    <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
