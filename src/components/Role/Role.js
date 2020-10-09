import React, { useEffect, useState } from "react";
import "./Role.css";
import api from "../../api";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

function Role() {
    const [role, setRole] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await api.get(`/roles`);
            setRole(res.data);
        };
        fetchData();
    }, []);
    console.log(role);
    const handleDelete = (id, event) => {
        event.preventDefault();
        console.log(id);
    };

    return (
        <div className="role">
            <Card>
                <Card.Header className="header__card">
                    <span className="header__title">Role</span>
                    <span>
                        <Link to="/add-role" className="btn btn-primary btn-sm">
                            Add New
                        </Link>
                    </span>
                </Card.Header>
                <Card.Body>
                    <MaterialTable
                        title=""
                        options={{
                            actionsColumnIndex: -1,
                            exportButton: true,
                            pageSizeOptions: [5, 20],
                            search: true,
                        }}
                        columns={[
                            { title: "Role Id", field: "_id" },
                            { title: "Name", field: "name" },
                            {
                                title: "Action",
                                field: "action",
                                export: false,
                                render: (rowData) => (
                                    <div>
                                        {/* <Link
                                            to={`/patient/${rowData.patientID}/edit`}
                                            className="btn btn-info btn-sm"
                                        >
                                            <i className="fa fa-edit"></i>
                                        </Link>

                                        <Link
                                            to={`/patient/${rowData.patientID}/show`}
                                            className="btn btn-secondary btn-sm"
                                        >
                                            <i className="fa fa-eye"></i>
                                        </Link> */}

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={(event) =>
                                                handleDelete(rowData._id, event)
                                            }
                                        >
                                            <i className="material-icons">
                                                delete
                                            </i>
                                        </button>
                                    </div>
                                ),
                            },
                        ]}
                        data={role}
                    />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Role;
