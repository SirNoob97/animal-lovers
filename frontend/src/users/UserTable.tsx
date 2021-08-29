import React, { useState, useEffect } from 'react';
import DBUser from './DBUser';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import PaginationBar from './Pagination';
import User from './User';
import axios from 'axios';

const UserTable = () => {
  const url = 'http://localhost:8080/users';
  let urlRequest = '';
  const animal: string = useParams();

  const [users, setUsers] = useState<DBUser[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);

  const page = `page=${pageNumber - 1}&size=${usersPerPage}`;
  const animalParam = `?animal=${animal}&${page}`;
  const points = `/points?${page}`;


  if (animal && animal.length > 0) {
    urlRequest = url + animalParam;
  } else {
    urlRequest = url + points;
  }

  const changePageNumber = (num: number) => {
    setPageNumber(num);
  };

  const changeUsersPerPage = (num: number) => {
    setUsersPerPage(num);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(urlRequest);
      setUsers(res.data.content);
      setTotalUsers(res.data.totalElements);
    };

    fetchData();
  }, [urlRequest]);

  if (users.length === 0) {
    return <h1>'loading...'</h1>;
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
      <PaginationBar currentPage={pageNumber} totalUsers={totalUsers} changePageNumber={changePageNumber} changeUsersPerPage={changeUsersPerPage} />
    </div>
  )
}

export default UserTable;
