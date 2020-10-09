import React, { useState } from "react";
import "./Role.css";
import { Card } from "react-bootstrap";
import axios from "axios";

function AddRole() {
    const [roleName, setRoleName] = useState("");

    const [errorRole, setErrorRole] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRole = {
            name: roleName,
        };
        try {
            const res = await axios.post("/api/users", newRole);
            // console.log(res);
        } catch (error) {
            setErrorRole(error.response.data.error);
            // console.log("error rep data ", error.response.data);
        }
    };

    const onInputChange = (e) => {
        setRoleName(e.target.value);
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
                                    value={roleName}
                                    required
                                />
                                {errorRole.fullName ? (
                                    <small>
                                        <p className="text-danger">
                                            {errorRole.fullName}
                                        </p>
                                    </small>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <button className="btn btn-success">Save</button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AddRole;
