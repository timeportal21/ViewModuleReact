import React, { useState } from "react";
import "./Role.css";
import axios from "axios";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";

function AddRole() {
    const [roleName, setRoleName] = useState("");
    const [errorRole, setErrorRole] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRole = {
            name: roleName,
        };
        try {
            const res = await axios.post("/api/roles", newRole);
            setRoleName("");
            setErrorRole(null);

            if (res.data.message) {
                toast.success(res.data.message);
            }
        } catch (error) {
            setErrorRole(error.response.data.message);
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
                                    name="roleName"
                                    className="form-control"
                                    onChange={onInputChange}
                                    value={roleName}
                                />
                                {errorRole ? (
                                    <small>
                                        <p className="text-danger">
                                            {errorRole.name}
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
