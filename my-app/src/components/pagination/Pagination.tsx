import React from 'react';
import ReactPaginate from "react-paginate";
import './Pagination.scss'

type PaginationProps = {
    value: number;
    handlePageClick: (page: number) => void;
    pageCount: number;
}

const Pagination: React.FC<PaginationProps> = ({value, handlePageClick, pageCount}) => {
    return (
        <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => handlePageClick(event.selected)}
            pageRangeDisplayed={10}
            pageCount={pageCount}
            forcePage={value}
        />
    );
};

export default Pagination;