import React, { useState, useEffect } from 'react';
import './login.css';
import api from '../../services/api';

export default function LoginPage({ history }) {
  // const [loading, setLoading] = useState(false);
  const [emailInput, setInputValue] = useState('');
  useEffect(() => {
    localStorage.clear();
  }, [])
  function saveSessionId(sessionId) {
    localStorage.setItem('__ssID', sessionId);
  }

   async function auth(defaultEvent) {
    // if (loading) {
    //   return;
    // }
    // setLoading(true);

    defaultEvent.preventDefault();
    let resp;

    // try {
    //   resp = await api.post('users/create', { 
    //     email: emailInput  
    //   });
     saveSessionId(emailInput);
    // } catch(err) {
    //   console.log('Auth:','ERROR', err);
    // }  finally {
    //   setLoading(false);
    //   if (!resp) return;
    //  }

    history.push('/home');
  }

  return (
    <div className="login-form">
      <p> Crie seus <strong>Spots</strong> e encontre novos <strong>talentos</strong> </p>
      <form onSubmit={(event) => { auth(event) }}>  
        <input 
          type="email" 
          alt="email" 
          placeholder="Email de acesso..." 
          onChange={(event) => { setInputValue(event.target.value)} }></input>
      </form>
      <button className="login-button" onClick={(event) => { auth(event) }}> Acessar </button>
    </div>
  );
};
