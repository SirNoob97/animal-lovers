import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Animal from './Animal';
import axios from 'axios';
import Envs from '../util/Envs';

const url = Envs.BACKEND_URL + Envs.ANIMALS_ENDPOINT;

const Dropdown: React.FC = () => {
  console.log(url);
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
      <div>
        {animals.map((animal) => (
          <li key={animal.id}>
            <NavDropdown.Item href={`/users/${animal.name}`}>
              {animal.name}
            </NavDropdown.Item>
          </li>
        ))}
      </div>
    </NavDropdown>
  );
};

export default Dropdown;
