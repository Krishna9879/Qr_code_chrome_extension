document.addEventListener('DOMContentLoaded', () => {
    
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const url = tabs[0].url;
      const qrCodeContainer = document.getElementById('qrcode');
  
    
      new QRCode(qrCodeContainer, {
        text: url,
        width: 128,
        height: 128
      });
    });
  });
  