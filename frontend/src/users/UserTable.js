import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import PaginationBar from './Pagination';
import User from './User';

const axios = require('axios');

const UserTable = () => {
  const url = 'http://localhost:8080/users';
  let urlRequest = '';
  const { animal } = useParams();

  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const page = `page=${pageNumber}&size=${usersPerPage}`;
  const animalParam = `?animal=${animal}&${page}`;
  const points = `/points?${page}`;


  if (animal && animal.length > 0) {
    urlRequest = url + animalParam;
  } else {
    urlRequest = url + points;
  }

  const incrementPageNumber = (num) => {
    setPageNumber(num);
  };

  const incrementUsersPerPage = () => {
    setUsersPerPage(25);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(urlRequest);
      setUsers(res.data.content);
      setTotalPages(res.data.totalPages);
    };

    fetchData();
  }, [urlRequest]);

  if (users.length === 0) {
    return 'loading...';
  }

  return (
    <div>
      <Table responsive striped bordered >
        <thead>
          <tr>
            <th>Fist Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Points</th>
            <th>Delete</th>
          </tr>
        </thead>
        <User users={users} />
      </Table>
      <PaginationBar currentPage={pageNumber} totalPages={totalPages} incrementPageNumber={incrementPageNumber} incrementUserPerPage={incrementUsersPerPage} />
    </div>
  )
}

export default UserTable;