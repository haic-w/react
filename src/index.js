// 引入react核心库
import React from 'react';
// 引入react-dom库
// import ReactDOM from 'react-dom';//旧
import ReactDOM from 'react-dom/client';//新

import { BrowserRouter } from 'react-router-dom';
// 引入redux store
import store from './redux/store.js'
// 借助 react-redux 的Provider 给所有需要的容器组件传递store
import { Provider } from 'react-redux';
// 引入antd样式
import 'antd/dist/antd.css';

import './index.css';
// 引入App组件
import App from './App';
// 记录页面性能
import reportWebVitals from './reportWebVitals';


// 渲染App组件到页面 -旧v5
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 渲染App组件到页面 -新v6
//BrowserRouter 路由
//Provider 包裹APP：目的是让APP所有的后代容器都能接收到store

const element = <BrowserRouter>
                <React.StrictMode>
                  <Provider store={store}>
                    <App />
                  </Provider>
                </React.StrictMode>
              </BrowserRouter>;
const root = ReactDOM.createRoot(document.getElementById('root'));
//store 监听render
//监听redux中状态的改变，如果redux的状态发生了改变，那么重新渲染App组件
// store.subscribe(()=>{
  root.render(element);
// })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
