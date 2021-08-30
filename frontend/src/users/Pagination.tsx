import React, {useState} from 'react';
import Pagination from 'react-js-pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

type PaginationProps = {
  currentPage: number;
  totalUsers: number;
  changePageNumber: (n: number) => void;
  changeUsersPerPage: (n: number) => void;
}

const PaginationBar: React.FC<PaginationProps> = ({currentPage, totalUsers, changePageNumber, changeUsersPerPage}) => {
  const [ usersPerPage, setUsersPerPage ]= useState(10);
  return (
    <div className='nav justify-content-center'>
      <div className='nav-item'>
        {
          (usersPerPage === 10)
          ? (<button type="button" className="btn btn-outline-primary" onClick={() => { setUsersPerPage(25); changeUsersPerPage(25);}}>Show more</button>)
          : (<button type="button" className="btn btn-outline-primary" onClick={() => {setUsersPerPage(10); changeUsersPerPage(10);}}>Show less</button>)
        }
      </div>

      <div className='nav-item'>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={usersPerPage}
          totalItemsCount={totalUsers}
          pageRangeDisplayed={5}
          onChange={(pageNumber: number) => changePageNumber(pageNumber)}

          itemClass='page-item'
          linkClass='page-link'
        />
      </div>
    </div>
  )
}

export default PaginationBar;
