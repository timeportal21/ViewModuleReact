import React, { useState } from "react";
import Pagination from "react-js-pagination";

function PaginationTable({ totalData, itemsPerPage, currentPage }) {
    const [activePage, setActivePage] = useState(currentPage);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
    };

    function user(address, name) {
        console.log(address);
    }

    user("rabin")
    return (
        <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={totalData}
            pageRangeDisplayed={5}
            onChange={(pageNumber) => handlePageChange(pageNumber)}
        />
    );
}

export default PaginationTable;
