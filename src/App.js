import React, { useState } from 'react';
import './App.css';
// import api from './services/api';

import Routes from './routes';

function App() {

  return (
    <>
      <div className="background-layer"></div>
      <div className="container">
        <Routes/>
      </div>
    </>
  );
}

export default App;
