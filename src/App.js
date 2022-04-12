import logo from './logo.svg';
import './App.css';

import React,{Component} from 'react';
//默认访问index.jsx
// import Main from './components/Main';
import Search from './components/Search';
class App extends Component{
  render(){
    return (
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            {/* <Main/> */}
            <Search />
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
