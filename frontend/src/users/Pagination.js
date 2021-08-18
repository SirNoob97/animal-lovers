import React from 'react';

const Pagination = ({ totalPages, totalElements, incrementPageNumber, incrementUserPerPage }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  return (
    <div>
      {pages.map(num => (
        <button key={num} onClick={() => incrementPageNumber(num)}>
          {num}
        </button>
      ))}
      <button onClick={() => incrementUserPerPage()}>
        Show More
      </button>
    </div>
  )
}

export default Pagination
