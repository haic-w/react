import { Navigate } from "react-router-dom"

import News from "../components/News"
import Demo from "../components/Demo"
import Search from "../components/Search"
import Message from "../components/Message"
import Main from '../components/Main'
import Detail from '../components/Detail'
import Redux from '../components/Redux'
import Extension from '../components/Extension'
import Lazy from '../components/Lazy'
import About from '../components/Lazy/about'
import Home from '../components/Lazy/home'
import Parent from '../components/Lazy/parent'

export default [
    {
        path:'/search',
        element:<Search/>
    },
    {
        path:'/main',
        element:<Main/>
    },
    {
        path:'/message',
        element:<Message />,
        children:[
            {
                path:'news',
                element:<News />,
                children:[
                    {
                        // path:'detail/:id/:name',//params传参
                        path:'detail',//search传参|state传参，不需要占位
                        element:<Detail/>
                    }
                ]
            },
            {
                path:'demo',
                element:<Demo/>
            }
        ]
    },
    {
        path:'/redux',
        element:<Redux/>
    },
    {
        path:'/extension',
        element:<Extension/>
    },
    {
        path:'/lazy',
        element:<Lazy/>,
        children:[
            {
                path:'about',
                element:<About/>
            },
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'parent',
                element:<Parent/>
            }
        ]
    },
    {
        path:'/',
        element:<Navigate to="/search"/>
    }
]