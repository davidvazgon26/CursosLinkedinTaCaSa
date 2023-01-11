import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBgtPJWmsfw6OD3kgc4ZeyhPWFPNwpgYKM",
  authDomain: "my-react-blog-8463c.firebaseapp.com",
  projectId: "my-react-blog-8463c",
  storageBucket: "my-react-blog-8463c.appspot.com",
  messagingSenderId: "388699867511",
  appId: "1:388699867511:web:c882509b2908d5dbe6b972"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
