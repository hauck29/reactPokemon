import React from 'react';
import './Pagination.css';

export default function Pagination({ gotoNextPage, gotoPreviousPage }) {
  return (
    <div>
        {gotoPreviousPage && <button onClick={gotoPreviousPage}>Previous</button>}
        {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
