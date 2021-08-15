import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import UserTable from './UserTable';

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  return (
    <div>
      {pages.map(num => (
        <button key={num} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}
    </div>
  )
}

export default Pagination
