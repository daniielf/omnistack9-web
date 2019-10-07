import React, { useState, useEffect, useMemo } from 'react';
import './new.css';
import api from '../../services/api';

export default function NewPage({history}) {
  const [companyName, setCompanyName] = useState('');
  const [techsArray, setTechsArray] = useState('');
  const [dailyPrice, setDailyPrice] = useState(null);
  const [file, setFile] = useState(null);

  const preview = useMemo(() => {
      return file ? URL.createObjectURL(file) : null;
    }, [file])

  useEffect(() => {
    if (!localStorage.getItem('__ssID')) {
      history.push('/'); 
    }
  }, [])

  async function registerNewSpot(event) {
    event.preventDefault();
    if (!validate()) return;

    var dataForm = new FormData();
    dataForm.append('foto', file);
    dataForm.append('empresa', companyName);
    dataForm.append('preco', dailyPrice);
    dataForm.append('techs', techsArray.split(',').map((elem) => elem.trim()));
    
    let resp = await api.post('spots/create', dataForm, { headers: { user_id: localStorage.getItem('__ssID') }});
  }

  function validate() {
    if (companyName == '' || techsArray == '' || dailyPrice == null) {
      alert('Todos os campos devem ser preenchidos');
      return false;
    }
    return true;
  }

  function setValue(input) {
    switch(input.target.id) {
      case 'company': setCompanyName(input.target.value); break;
      case 'techs': setTechsArray(input.target.value); break;
      case 'price': setDailyPrice(Number(input.target.value)); break;
      default: break;
    }
  }

  return (
    <form className="formContainer" onSubmit={registerNewSpot}>
      <h2>Cadastrar novo Spot</h2><br></br>
      <label htmlFor="company">Nome da Empresa:</label>
      <input id="company"
             className="formInput"
             onChange={(event) => { setValue(event); }}
             type="text" placeholder="MyCompany" ></input>

      <label htmlFor="techs">Tecnologias:</label>
      <input id="techs"
             className="formInput"
             onChange={(event) => { setValue(event); }}
             placeholder="JavaScript, Node.js, . .."></input>

      <label htmlFor="price">Valor diária:</label>
      <input id="price"
             className="formInput"
             onChange={(event) => { setValue(event); }}
             type="number" placeholder="R$0,00" ></input>

      <label id="fileinput" className={preview ? 'has-thumbnail' : '' } style={{ backgroundImage: `url(${preview})` }}>
        <input type="file" onChange={(event) => { setFile(event.target.files[0]) }} ></input>
        <img alt="Foto do Spot" src="" />
      </label>

      <button onClick={(event) => registerNewSpot(event) } className="registerButton">Cadastrar</button>
    </form>
  );
};