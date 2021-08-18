import { useState } from 'react';

const path = 'http://localhost:8080/users';
const animalParam = '?animal=';
const points = '/points?';

const UrlRequest = (animal) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(10);
  
  let urlRequest = buildURL(animal, pageNumber, usersPerPage);

  const incrementPageNumber = num => {
    setPageNumber(num);
  };

  const incrementUserPerPage = () => {
    setUsersPerPage(25);
  }

  return { urlRequest, incrementPageNumber, incrementUserPerPage }
}

function buildURL(animal, pageNumber, usersPerPage) {
  let urlRequest = path;
  const page = 'page=' + pageNumber;
  const size = '&size=' + usersPerPage;

  if (animal && animal.length > 0) {
    urlRequest += animalParam + animal + '&' + page + size;
  } else {
    urlRequest += points + page + size;
  }
  return urlRequest;
}

export default UrlRequest;