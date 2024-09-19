// src/App.js
import React from 'react';
import Survey from './Survey';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Amerikan Seçimlerinde Hangi Tarafa Yakınsın?</h1>
      <Survey />
      <footer className="footer">
        <button
          className="custom-button"
          onClick={() =>
            window.open('https://galataanket.anketekatil.com/auth/register', '_blank')
          }
        >
          Galata Anket'ten yeni anketler için kayıt ol.
        </button>
      </footer>
    </div>
  );
}

export default App;
