import React, { useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

function AddUser() {
    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const [errorUser, setErrorUser] = useState({});

    const { fullName, email, password, confirm_password } = userData;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            fullName,
            email,
            password,
            confirm_password,
        };

        try {
            const res = await axios.post("/api/users", newUser);
            // console.log(res);
        } catch (error) {
            // console.log("error rep data ", error.response.data);
            setErrorUser(error.response.data.error);
        }
    };

    const onInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    return (
        <div className="container">
            <Card>
                <Card.Header>
                    <Card.Title as="h5" className="header__card">
                        Add Department Details
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col">
                                <label className="form-label">Role Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    className="form-control"
                                    onChange={onInputChange}
                                    value={fullName}
                                    required
                                />
                                
                            </div>
                            <div className="form-group col">
                                <label className="form-label">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    onChange={onInputChange}
                                    value={email}
                                    required
                                />
                            </div>
                            <div className="form-group col">
                                <label className="form-label">password</label>
                                <input
                                    type="text"
                                    name="password"
                                    className="form-control"
                                    onChange={onInputChange}
                                    value={password}
                                    required
                                />
                            </div>
                            <div className="form-group col">
                                <label className="form-label">
                                    confirm pwd
                                </label>
                                <input
                                    type="text"
                                    name="confirm_password"
                                    className="form-control"
                                    onChange={onInputChange}
                                    value={confirm_password}
                                    required
                                />
                            </div>
                        </div>
                        <button className="btn btn-success">Save</button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AddUser;
