// import logo from './logo.svg';
import './App.css';

import React,{Component} from 'react';
import {useRoutes} from 'react-router-dom'

//默认访问index.jsx
import Menu from './components/Menu'
// import Search from './components/Search';
// import Main from './components/Main';
// import Message from './components/Message'
// import Demo from './components/Demo'
// import News from './components/News';

import routes from './routes'

function App(){
  const element = useRoutes(routes)
  
  return (
    <div>
        {/* 主菜单 */}
        <Menu/>
        <p></p>
        {/* 注册路由 */}
        {element}
    </div>
  )
}

class Apps extends Component{
  render(){
    
    return (
          <div>
             {/* <Menu/> */}
             {/* 注册路由 */}

             {/* react 5 */}
             {/* Switch匹配到第一个路由就不会继续匹配了 */}
             {/* Redirect 实现路由重定向。 当匹配不到路由的时候,  会自动重定向当前路由组件。 */}
             {/* <Switch>
                  <Route path="/search" component={Search}/>
                  <Route path="/main" component={Main}/>
                  <Route path="/message" component={Message}/>

                  <Redirect to="/search" />
             </Switch> */}

             {/* react 6 */}
             {/* <Routes> */}
                  {/* <Route path="/search" caseSensitive element={<Search/>}/>
                  <Route path="/main"  element={<Main/>}/>
                  <Route path="/message/*" element={<Message/>}/> */}
                  
                  {/* 重定向 react-router-dom@5 */}
                  {/* <Redirect to="/search" /> */}
                   {/* 重定向 react-router-dom@6 */}
                  {/* <Route path="/" element={<Navigate to="/search" replace />}></Route> */}
              {/* </Routes> */}

              {/* {element} */}
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              {/* <Main/> */}
              {/* <Search /> */}
              {/* <Message/> */}
          </div>
        )
  }
}

// 函数式
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//暴露
export default App;
