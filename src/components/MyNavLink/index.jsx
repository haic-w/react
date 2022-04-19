import React,{Component,Suspense} from 'react'
import {NavLink} from 'react-router-dom'
import MenuCss from '../Menu/index.module.css'

export default class MyNavLink extends Component{
    isactive = ({isActive})=>{
        return " "+(isActive?MenuCss.active:'')
    }
    render(){
        return (
            // 三目运算符
            // <NavLink className={({ isActive }) => " " + (isActive ? MenuCss.active : "")} {...this.props} />
            // 函数写法
            // 懒加载，必须用Suspense 包裹，并默认一个人fallback，并且fallback不能使用懒加载 
           
            <NavLink className={this.isactive} end {...this.props} />

        )
    }
}
