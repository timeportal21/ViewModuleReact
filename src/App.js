import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/layouts/NavigationBar/NavigationBar";
import AddRole from "./components/Role/AddRole";
import Role from "./components/Role/Role";
import User from "./components/User/User";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <div className="app__container">
                <Route path="/role" exact component={Role} />
                <Route path="/add-role" exact component={AddRole} />
                <Route path="/user" exact component={User} />
            </div>
        </div>
    );
}

export default App;
