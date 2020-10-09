import React, { useState } from "react";
import "./ShareTable.css";
import { Table } from "react-bootstrap";
import Pagination from "react-js-pagination";
// import PaginationTable from "./PaginationTable";

function SharedTable({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(10);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber);
    };

    const tableHeader = data[0] && Object.keys(data[0]);

    const totalItem = data && data.length;

    return (
        <>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        {tableHeader &&
                            tableHeader.map((thead, i) => (
                                <th key={i}>{thead}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            {tableHeader.map((column, i) => (
                                <td key={i}>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemPerPage}
                totalItemsCount={totalItem}
                pageRangeDisplayed={5}
                onChange={(pageNumber) => handlePageChange(pageNumber)}
                itemClass="page-item"
                linkClass="page-link"
            />
        </>
    );
}

export default SharedTable;
