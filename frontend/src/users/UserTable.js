import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import User from './User';
import Pagination from './Pagination';

const axios = require('axios');
const url = 'http://localhost:8080/users';
const animalParam = '?animal=';
const points = '/points?';

const page = 'page=';
const size = '&size=';

const UserTable = () => {
  const { animal } = useParams();
  let urlRequest = checkPath(animal);
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  let usersPerPage = 100;

  urlRequest += page + pageNumber + size + usersPerPage;
  usersPerPage = 10;

  React.useEffect(async () => {
    const res = await axios.get(urlRequest);
    setUsers(res.data.content);

    setTotalPages(res.data.totalPages);
  }, []);

  const handleClick = num => {
    setPageNumber(num);
  };

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
        <User users={users} page={pageNumber} size={usersPerPage} />
      </Table>
      <Pagination totalPages={totalPages} handleClick={handleClick} />
    </div>
  )
}

function checkPath(animal) {
  let urlRequest = url;

  if (animal && animal.length > 0) {
    urlRequest += animalParam + animal + '&';
  } else {
    urlRequest += points;
  }
  return urlRequest;
}

export default UserTable