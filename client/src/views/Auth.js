import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner' // cái mà quay tròn

const Auth = ({ authRoute }) => {
    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)

    let body;

    // dùng bootstrap cho cái vòng quay quay sau khi đã login
    if (authLoading)
        body = (
            <div className="d-flex justify-content-center mt-2">
                <Spinner animation='border' variant='info' />
            </div>
        )
    else if (isAuthenticated)
        return <Redirect to='/dashboard' />
    else
        body = (
            <>
                {authRoute === "login" && <LoginForm />}
                {authRoute === "register" && <RegisterForm />}
            </>
        );


    return (
        <div className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1>Contest</h1>
                    <h4>What do you want to learn?</h4>
                    {body}
                </div>
            </div>
        </div>
    );
};

export default Auth;
