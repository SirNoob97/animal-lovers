import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

const axios = require('axios');
const url = 'http://localhost:8080/animals';

function Dropdown() {
  const [animals, setAnimals] = useState([]);

  React.useEffect(() => {
    axios.get(url)
      .then(res => {
        setAnimals(res.data.content);
      });
  }, []);

  return (
    <NavDropdown className="fs-4" title="Animals" id="basic-nav-dropdown">
      <div>{
        animals.map(animal => (
          <li key={animal.id}>
            <NavDropdown.Item href={`/users/${animal.name}`}>{animal.name}</NavDropdown.Item>
          </li>
        ))}
      </div>
    </NavDropdown>
  )
}

export default Dropdown
