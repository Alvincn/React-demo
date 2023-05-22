// 引入 React 核心库
import React from 'react';
// 引入 ReactDOM
import ReactDOM from 'react-dom/client';
// 引入 App
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
// 引入性能检测，没什么用
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
