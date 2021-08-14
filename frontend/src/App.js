import './App.css';
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import JsonData from "../../users.json";

function App() {
  const [users, setUsers] = = useState(JsonData.slice(0, 101));
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
