import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import SearchBar from './components/layout/AppNavbar';
import Logs from './components/logs/Logs';


function App() {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  })
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;