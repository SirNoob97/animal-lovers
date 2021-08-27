import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from './Dropdown';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark mx-auto bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">Animal Lovers</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link fs-4 active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="/create-user">Add Users</Link>
              </li>
              <Dropdown/>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
