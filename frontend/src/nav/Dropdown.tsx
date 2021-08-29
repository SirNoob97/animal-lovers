import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Animal from './Animal';
import axios from 'axios';

const url = 'http://localhost:8080/animals';

function Dropdown() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await axios.get(url);
      setAnimals(res.data.content);
    }
    fetchData();
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
