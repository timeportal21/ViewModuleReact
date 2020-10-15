import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Role from "./components/Role/Role";
import User from "./components/User/User";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AddRole from "./components/Role/AddRole";
import NavigationBar from "./components/layouts/NavigationBar/NavigationBar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                closeOnClick
                pauseOnHover
            />
            <div className="App">
                <NavigationBar />
                <div className="app__container">
                    <Route path="/role" exact component={Role} />
                    <Route path="/add-role" exact component={AddRole} />
                    <Route path="/user" exact component={User} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                </div>
            </div>
        </>
    );
}

export default App;
