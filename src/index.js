import React from 'react';  
import ReactDOM from 'react-dom';  
import './index.css';  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import i18n from './i18n.js';
import App from './App';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>



//ReactDOM.render(<BreedActionApp />, document.getElementById('root'));
//ReactDOM.render(<ColorActionApp />, document.getElementById('root'));
//ReactDOM.render(<PetActionApp />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



