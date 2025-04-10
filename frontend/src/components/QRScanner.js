import React, { useState } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";

const QRScanner = () => {
  const [scannedCode, setScannedCode] = useState(null);

  const handleScanSuccess = (decodedText, decodedResult) => {
    setScannedCode(decodedText);
    console.log(decodedText); // Handle the decoded data here
    // You can add a function here to update the database
  };

  const handleScanError = (error) => {
    console.error(error);
  };

  const startScanner = () => {
    const html5QrCode = new Html5QrcodeScanner(
      "qr-scanner", 
      { fps: 10, qrbox: 400 },  // Increased qrbox size to 400
      true
    );
    html5QrCode.render(handleScanSuccess, handleScanError);
  };

  return (
    <div className="scanner-container">
      <div id="qr-scanner" className="qr-scanner"></div>
      <button onClick={startScanner} className="scan-button">Start Scanning</button>
      {scannedCode && <div className="result">Scanned Code: {scannedCode}</div>}
    </div>
  );
};

export default QRScanner;
