/**
 * 该文件用于暴露一个store对象，整个应用只有一个store对象
 */

//引入 createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware } from 'redux'

//引入redux-thunk ，用于支持异步action
import thunk from 'redux-thunk'

//引入 redux-devtools-extension,用于支持开发者工具
import { composeWithDevTools } from 'redux-devtools-extension';

//汇总所有的reducer
import reducer from './reducers'

//暴露store
// export default createStore(countReducer) 
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
