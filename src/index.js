import React from 'react';
import ReactDOM from 'react-dom/client';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
        ${emotionReset}

        body {
          width: 100%;
          font-family: 'Montserrat', sans-serif;
        }
      `}
    />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
