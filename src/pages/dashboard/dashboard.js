import React, { useState } from 'react';
import './dashboard.css';
import api from '../../services/api';

function DashboardPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <h2>CHARLIE</h2>
    </div>
  );
}

export default DashboardPage;
