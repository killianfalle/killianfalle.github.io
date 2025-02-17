import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/fonts';
import { ContextProvider } from './utils/context/context';
import FirebaseService from './helpers/firebase/service';

// Attach FirebaseService to the window object
window.firebaseService = FirebaseService;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
