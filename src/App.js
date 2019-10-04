import React, { useState } from 'react';
import './App.css';
import api from './services/api';
function App() {
  const [loading, setLoading] = useState(false);
  const [emailInput, setInputValue] = useState('');

  function startLoading() {
    setLoading(true);
  }

   async function auth(defaultEvent) {
    defaultEvent.preventDefault();
    let resp;
    try {
      resp = await api.post('users/create', { 
        email: emailInput  
      });
    } catch(err) {
      console.log('Auth:','ERROR', err);
    }  finally {
      if (!resp) return;
     }
    // console.log('AUTH', resp);
  }

  return (
    <div className="App">
      <div className="background-layer">
        <div className="login-form">
          <p> Crie seus <strong>Spots</strong> e encontre novos <strong>talentos</strong> </p>
          <form onSubmit={(event) => { auth(event) }}>  
            <input 
                type="email" 
                alt="email" 
                placeholder="Email de acesso..." 
                onChange={(event) => { setInputValue(event.target.value)} }></input>
          </form>
          <button onClick={(event) => { auth(event) }}> Acessar </button>
        </div>
      </div>
    </div>
  );
}

export default App;
