import {Component, useState} from 'react'
import { nanoid } from 'nanoid'
import {Route, Routes, withRouter, Link, Outlet,useNavigate} from 'react-router-dom'
import {Button} from 'antd'
import MenuCss from '../Menu/index.module.css'
import NewsCss from './index.module.css'
import Detail from '../Detail'

function News(){
    const [newsList]  = useState([
                            {id:nanoid(),name:'新闻1'},
                            {id:nanoid(),name:'新闻2'},
                            {id:nanoid(),name:'新闻3'},
                            {id:nanoid(),name:'新闻4'},
                            {id:nanoid(),name:'新闻5'}
                        ])
   
    const navigate = useNavigate()

    function replaceShow(id,name){
        // replace 跳转+携带state参数 react-router-dom@6
        navigate('detail',{
            replace:true,
            state:{
                id:id,
                name:name
            }
        })
        console.log('replaceShow')
    }

    function pushShow(id,name){
            // push 跳转+携带params参数 react-router-dom@6
            navigate('detail',{
                replace:false,
                state:{
                    id:id,
                    name:name
                }
            })
            console.log('pushShow')
    }

     //返回
    function functiongoback(){
        navigate(-1)
    }
    // 前进
    function goforward(){
        navigate(1)
    }
    //前进或后退几步 -后退，+前进
    function go(num){
        navigate(num)
    }

    return (
        <div className={NewsCss.news}>
            
            <ul>
                {
                    newsList.map((newsObj)=>{
                        return (
                            <li  className={NewsCss.newslist} key={newsObj.id}>
                                <Link to='detail' state={{id:newsObj.id,name:newsObj.name}}> {newsObj.id}——{newsObj.name}</Link>
                                {/* 编程式路由 */}
                                <Button type="primary" onClick={()=>replaceShow(newsObj.id,newsObj.name)}>replace</Button>
                                <Button type="primary" onClick={()=>pushShow(newsObj.id,newsObj.name)}>push</Button>
                                
                            </li>    
                        )
                    })
                }
            </ul>
            <div className={MenuCss.detail}>
                -----------------------------------------------------
                {/* 指定路由展示位置 */}
                <Outlet/>
            </div>
            
        </div>
    )

}
class Newss extends Component{
   
    state = {newsList:[
        {id:nanoid(),name:'新闻1'},
        {id:nanoid(),name:'新闻2'},
        {id:nanoid(),name:'新闻3'},
        {id:nanoid(),name:'新闻4'},
        {id:nanoid(),name:'新闻5'}
    ]}

    //replace 跳转
    replaceShow = (id,name)=>{
        // return (event)=>{
            // console.log(this.props.history)
            // replace 跳转+携带params参数 react-router-dom@5
            // this.props.history.replace(`/message/news/detail/${id}/${name}`)
            // replace 跳转+携带search参数
            // this.props.history.replace(`/message/news/detail/?id=${id}&nae=${name}`)
            // replace 跳转+携带state参数
            // this.props.history.replace('/message/news/detail/',{id,name})

            
        // }
    }

    //push 跳转
    pushShow = (id,name)=>{
        return ()=>{
            // console.log(this.props.history)  
            // push 跳转+携带params参数 react-router-dom@5
            // this.props.history.push(`/message/news/detail/${id}/${name}`)
            // push 跳转+携带search参数
            // this.props.history.push(`/message/news/detail/?id=${id}&nae=${name}`)
            // push 跳转+携带state参数
            // this.props.history.push('/message/news/detail/',{id,name})
        }
    }
    //返回
    goback = ()=>{
        this.props.history.goBack()
    }
    // 前进
    goforward = ()=>{
        this.props.history.goForward()
    }
    //前进或后退几步 -后退，+前进
    go = (num)=>{
        this.props.history.go(num)
    }
    // 注意：路由组件才有 props.history

    render(){
        console.log('News',this.props)
        const {newsList}  = this.state
        return (
            <div className={NewsCss.news}>
                
                <ul>
                    {
                        newsList.map((newsObj)=>{
                            return (
                                <li  className={NewsCss.newslist} key={newsObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/* react-router-dom 5 */}
                                    {/* <Link replace to={`detail/${newsObj.id}/${newsObj.name}`}> {newsObj.id}——{newsObj.name}</Link> */}
                                    {/* react-router-dom 6 */}
                                    {/* <Link replace to={`/message/news/detail/${newsObj.id}/${newsObj.name}`}> {newsObj.id}——{newsObj.name}</Link> */}

                                    {/* 向路由组件传递search参数 */}
                                    {/* react-router-dom 5 */}
                                    {/* <Link to={`/message/news/detail/?id=${newsObj.id}&name=${newsObj.name}`}> {newsObj.id}——{newsObj.name}</Link> */}
                                    {/* react-router-dom 6 */}
                                    {/* <Link to={`detail/?id=${newsObj.id}&name=${newsObj.name}`}> {newsObj.id}——{newsObj.name}</Link> */}
                                   

                                    {/* 向路由组件传递state参数 */}
                                    {/* react-router-dom 5 */}
                                    {/* <Link to={{path:'/message/news/detail',state:{id:newsObj.id,name:newsObj.name}}}> {newsObj.id}——{newsObj.name}</Link> */}
                                    {/* react-router-dom 6 */}
                                    {/* <Link to='detail' state={{id:newsObj.id,name:newsObj.name}}> {newsObj.id}——{newsObj.name}</Link> */}
                                    
                                    {/* 编程式路由 */}
                                    <button onClick={()=>{this.replaceShow(newsObj.id,newsObj.name)}}>replace</button>
                                    <button onClick={this.pushShow(newsObj.id,newsObj.name)}>push</button>
                                </li>    
                            )
                        })
                    }
                </ul>

                
                <div className={MenuCss.detail}>
                    -----------------------------------------------------
                   
                    {/* 指定路由展示位置 */}
                    <Outlet/>

                    {/* 声明接收params参数 */}
                    {/* <Routes>
                        <Route path="/message/news/detail/:id/:name" element={<Detail/>}/>
                    </Routes> */}
                    {/* 声明接收search参数无需声明接收，正常注册路由即可 */}
                    {/* 声明接收state参数无需声明接收，正常注册路由即可 */}
                    {/* <Routes>
                        <Route path="/message/news/detail/" element={<Detail/>}/>
                    </Routes> */}

                </div>
                
            </div>
        )
    }
}

//react-router-dom@5
//withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API
//withRouter 的返回值是一个新组件
// export default withRouter(News)

//react-router-dom@6
//去掉了withRouter

export default News