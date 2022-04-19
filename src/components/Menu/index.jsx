import {Component} from 'react'
import MyNavLink from '../MyNavLink'
import MenuCss from './index.module.css'
import './index.css'

import Loading from '../Loading/'

export default class Menu extends Component{
    render(){
        return (
            <div className={MenuCss.menu}>

                {/* 在React中靠路由连接实现切换组件--编写路由链接 */}
                {/* <Link to="/search">搜索</Link>
                <Link to="/main">Main</Link>
                <Link to="/message">订阅消息</Link> */}
                
                {/* react 5 写法 */}
                {/* <NavLink activeClassName="active" to="/search">搜索</NavLink>
                <NavLink activeClassName="active" to="/main">Main</NavLink>
                <NavLink activeClassName="active"to="/message">订阅消息</NavLink> */}
                
                {/* react 6 不支持 activeClassName 写法 */}
                {/* <NavLink className={({ isActive }) => "defaultcss " + (isActive ? MenuCss.active : "")} to="/search">搜索</NavLink>
                <NavLink className={({ isActive }) => "defaultcss " + (isActive ? MenuCss.active : "")} to="/main">Main</NavLink>
                <NavLink className={({ isActive }) => "defaultcss " + (isActive ? MenuCss.active : "")} to="/message">订阅消息</NavLink> */}
                
                {/* 封装MyNavLink */}
                {/* 标签体：写法一 */}
                <MyNavLink to="/search" children="搜索"/>
                {/* 标签体：写法二 */}
                <MyNavLink to="/main">Main</MyNavLink>
                <MyNavLink to="/message">订阅消息</MyNavLink>
                
                <MyNavLink to="/redux">Redux</MyNavLink>
     
                <MyNavLink to="/extension">Extension</MyNavLink>
               
                
                <MyNavLink to="/lazy">Lazy</MyNavLink>
            </div>
        )
    }
}