import React,{lazy, Suspense,Fragment } from 'react'
import {NavLink,Outlet,Route,Routes,} from 'react-router-dom'
import Loading from '../Loading'
import MenuCss from '../Menu/index.module.css'

//1.正常引用
// import About from './about'
// import Home from './home'
//2.懒加载引用，懒加载要配合 Suspense 使用
import MyNavLink from '../MyNavLink'
const About = lazy(()=>import('./about'))
const Home  = lazy(()=>import('./home'))
const Parent = lazy(()=>import('./parent'))

export default function Lazy(){
    return (
        <Fragment>
            <p>&nbsp;</p>
            <div className={MenuCss.menu}>
                <MyNavLink to="about" children="About"/>
                <MyNavLink to="home" children="Home"/>
                <MyNavLink to="parent" children="Parent"/>
            </div>
            <p>&nbsp;</p>
            <hr/>
            <div>
                <br/>
                <Suspense fallback={<Loading/>}>
                    <Outlet/>
                </Suspense>

                {/*注册路由 */}
                {/* <Suspense fallback={<Loading/>}>
                    <Routes>
                            <Route path="about" element={<About/>}></Route>
                            <Route path="home" element={<Home/>}></Route>
                    </Routes>
                </Suspense> */}
                
            </div>
        </Fragment>
    )
}