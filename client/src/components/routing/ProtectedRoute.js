// nếu mà người dùng mà chưa xác thực thì quay lại từ đầu
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "react-bootstrap/esm/Spinner";
import NavbarMenu from "../layout/NavbarMenu";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    if (authLoading)
        return (
            <div className="spinner-container">
                <Spinner animation="border" variant="info" />
            </div>
        );
    return (
        <div>
            <Route
                {...rest}
                render={
                    (props) =>
                        isAuthenticated ? (
                            <>
                                <NavbarMenu />
                                {/* check người dùng có isAuthenticated hay không */}
                                <Component {...rest} {...props} />
                            </>
                        ) : (
                            <Redirect to="/login" />
                        )
                    // kiểm tra isAuthenticated nếu mà false thì chuyển về login
                }
            />
        </div>
    );
};

export default ProtectedRoute;
