import React from 'react';
import QRScanner from './components/QRScanner';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hotel QR Code Scanner</h1>
        <QRScanner />
      </header>
    </div>
  );
}

export default App;
