import React, { useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';
import UrlRequest from './UrlRequest';
import User from './User';

const axios = require('axios');

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const { animal } = useParams();

  let { urlRequest, incrementPageNumb, incrementUsersPerPage } = UrlRequest(animal);

  let totalPages = 0;
  let totalElements = 0;

  const setTotalElements = (num) => {
    totalElements = num;
  };
  const setTotalPages = (num) => {
    totalElements = num;
  };

  React.useEffect(async () => {
    const res = await axios.get(urlRequest);
    setUsers(res.data.content);

    setTotalPages(res.data.totalPages);
    setTotalElements(res.data.totalElements);
    console.log('res:',res)
  }, []);


  console.log('users:', users)

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
      <Pagination totalPages={totalPages} totalElements={totalElements} incrementPageNumber={incrementPageNumb} incrementUserPerPage={incrementUsersPerPage} />
    </div>
  )
}

export default UserTable;