import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import api from '../../services/api';

export default function DashboardPage({ history }) {
  const [availableSpots, setAvailableSpots] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('__ssID')) {
      history.push('/'); 
    }

    let mockSpots = [
      { empresa: 'Santander', techs: ['Angular', 'Node.JS', 'React', 'Ionic'], foto: '../../assets/office.jpg', preco: 50.00 },
      { empresa: 'Santander', techs: ['Angular', 'Node.JS', 'React', 'Ionic'], foto: '../../assets/office.jpg', preco: 50.00 },
      { empresa: 'Santander', techs: ['Angular', 'Node.JS', 'React', 'Ionic'], foto: '../../assets/office.jpg', preco: 50.00 },
      { empresa: 'Santander', techs: ['Angular', 'Node.JS', 'React', 'Ionic'], foto: '../../assets/office.jpg', preco: 50.00 },
      { empresa: 'Santander', techs: ['Angular', 'Node.JS', 'React', 'Ionic'], foto: '../../assets/office.jpg', preco: 50.00 },
      { empresa: 'Santander', techs: ['Angular', 'Node.JS', 'React', 'Ionic'], foto: '../../assets/office.jpg', preco: 50.00 },
      { empresa: 'Santander', techs: ['Angular', 'Node.JS', 'React', 'Ionic'], foto: '../../assets/office.jpg', preco: 50.00 },
      { empresa: 'Santander', techs: ['Angular', 'Node.JS', 'React', 'Ionic'], foto: '../../assets/office.jpg', preco: 50.00 },
      { empresa: 'Santander', techs: ['Angular', 'Node.JS', 'React', 'Ionic'], foto: '../../assets/office.jpg', preco: 50.00 },
      { empresa: 'Santander', techs: ['Angular', 'Node.JS', 'React', 'Ionic'], foto: '../../assets/office.jpg', preco: 50.00 },
      { empresa: 'Santander', techs: ['Angular', 'Node.JS', 'React', 'Ionic'], foto: '../../assets/office.jpg', preco: 50.00 },
      { empresa: 'Santander', techs: ['Angular', 'Node.JS', 'React', 'Ionic'], foto: '../../assets/office.jpg', preco: 50.00 }
    ];

    setAvailableSpots(mockSpots);
  }, []);

  return (
    <div className="content">
      <ul className="spot-list">
        { availableSpots.length > 0 && availableSpots.map((spot) => {
          return (
            <li key={spot._id} className="spotCard">
              <header style={{ backgroundImage: `url('https://www.landmarkspace.co.uk/wp-content/uploads/2019/05/Landmark-Private-Office.jpg')` }}></header>
              <strong>
                { spot.empresa }
              </strong>
              <span>{ spot.preco ? 'R$' + spot.preco + '/dia': 'GRATUITO' }</span>
            </li>
          )}) 
        }
      </ul>
      <Link to="/new">
        <button className="registerSpotButton">Cadastrar Spot</button>
      </Link>
    </div>
  );
};
