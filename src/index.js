// 引入react核心库
import React from 'react';
// 引入react-dom库
// import ReactDOM from 'react-dom';//旧
import ReactDOM from 'react-dom/client';//新
import './index.css';
// 引入App组件
import App from './App';
// 记录页面性能
import reportWebVitals from './reportWebVitals';

// 渲染App组件到页面 -旧
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 渲染App组件到页面 -新
const element = <React.StrictMode><App /></React.StrictMode>;
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
