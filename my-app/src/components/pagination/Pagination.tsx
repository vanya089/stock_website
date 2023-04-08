import React from 'react';
import ReactPaginate from "react-paginate";
import './Pagination.scss'

type PaginationProps = {
    value: number;
    onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps>= ({value, onChangePage}) => {
    return (
        <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={value - 1}
        />
    );
};

export default Pagination;