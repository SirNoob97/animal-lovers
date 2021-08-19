import React from 'react';
import Pagination from 'react-bootstrap/Pagination'

const PaginationBar = ({ currentPage, totalPages, incrementPageNumber, incrementUserPerPage }) => {
  const initialPage = 1;
  const firstPage = currentPage + 1;
  const secondPage = firstPage + 1;
  const thirdPage = secondPage + 1;
  return (
    <div>
      <Pagination>
        <Pagination.First onClick={() => incrementPageNumber(initialPage)} />
        <Pagination.Prev onClick={() => incrementPageNumber(currentPage - 1)} />
        <Pagination.Item onClick={() => incrementPageNumber(initialPage)}>{currentPage > 1 ? initialPage : ''}</Pagination.Item>
        <Pagination.Ellipsis />

        <>
          {
            (firstPage === initialPage) ?
              <Pagination.Item active>{firstPage}</Pagination.Item>
              : <Pagination.Item onClick={() => incrementPageNumber(firstPage - 2)}>{firstPage - 2}</Pagination.Item>
          }
          {
            (firstPage > initialPage) ?
              <Pagination.Item active>{secondPage}</Pagination.Item>
              : <Pagination.Item onClick={() => incrementPageNumber(secondPage)}>{secondPage}</Pagination.Item>
          }
          {
            (thirdPage > totalPages) ?
              <Pagination.Item disabled>{thirdPage}</Pagination.Item>
              : <Pagination.Item onClick={() => incrementPageNumber(thirdPage)}>{thirdPage}</Pagination.Item>
          }
        </>
        <Pagination.Ellipsis />
        <Pagination.Item>
          {((currentPage + 10) <= totalPages) ?
            (currentPage + 10)
            : totalPages
          }</Pagination.Item>
        <Pagination.Next onClick={() => incrementPageNumber(currentPage + 1)} />
        <Pagination.Last onClick={() => incrementPageNumber(totalPages)} />
        <Pagination.Item onClick={() => incrementUserPerPage()}>Show More</Pagination.Item>
      </Pagination>
    </div >
  )
}

export default PaginationBar;
