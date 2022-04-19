import {combineReducers } from 'redux'
//引入为Count 组件服务的reducer
import count from './count'
//引入为Person 组件服务的reducer
import person from './person'

//汇总所有的reducer，state.num|state.person
export default combineReducers({
    count,
    person
})
