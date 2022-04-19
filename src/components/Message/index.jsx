import React,{Component,lazy,Suspense} from 'react'
import PubSub from 'pubsub-js'
import {Route, Routes,Navigate, useRoutes,Outlet,useNavigate,useOutlet} from 'react-router-dom'

import MyNavLink from '../MyNavLink'
import MenuCss from '../Menu/index.module.css'
import {Button} from 'antd'

import routes from '../../routes'
import Demo from '../Demo'
import News from '../News'
import Detail from '../Detail'

 
const sendmsg = 'sendmsg'
export default function Message(){
        //根据路由表生成对应的规则
        // const element = useRoutes(routes)
        
        //如果嵌套路由没有挂载，则result 为 null
	    //如果嵌套路由已经挂载，则展示嵌套的路由对象
        const result = useOutlet()
        console.log('useOutlet',result)

        const navigate = useNavigate()

        function goback(){
            navigate(-1)
        }
        function goforward(){
            navigate(1)
        }
        
        return (
            <div>
                <p>&nbsp;</p>
                <div  className={MenuCss.menu}>
                
                    <MyNavLink to="news" children="新闻"/>
                    <MyNavLink to="demo" children="订阅"/>
        
                </div>
                
                <div className={MenuCss.menu}>
                    <div>
                        {/* 编程式路由 */}
                        <Button type="primary" onClick={goback}>后退</Button>
                        <Button type="primary" onClick={goforward}>前进</Button>
                    </div>
                     -----------------------------------------------
                    {/* 嵌套路由-指定路由组件呈现的位置 */}
                
                     <Outlet/>


                    {/* 一级路由 */}
                    {/* <Routes> */}
                        {/* <Route path="news" element={<News />}/>
                        <Route path="demo" element={<Demo />}/> */}

                        {/* 重定向 react-router-dom@5 */}
                        {/* <Redirect to="/message/news" /> */}
                        {/* 重定向 react-router-dom@6 */}
                        {/* <Route path="*" element={<Navigate to="/message/news" replace />}></Route> */}
                        
                   {/* </Routes> */}
                </div>

            </div>
        )

}
// class Message extends Component{

//     state = {name:'',age:''}
//     //订阅消息
//     static sendmsg = 'sendmsg'
    
//     // 挂载完成-订阅
//     componentDidMount(){
//         //先取消订阅，以防止重复订阅
//         PubSub.unsubscribe(sendmsg)
//         let uid = PubSub.subscribe(sendmsg,this.publishMessage)
//         console.log('uid:',uid)
//     }
//     //发布消息
//     publishMessage = (_,data)=>{
//         console.log('publishMessage',data)
//         this.setState({...data})
//         // fetch
//         // this.sendWeb('test')
//         // fetch async
//         this.webFetch('test')
//     }

//     //fetch
//     sendWeb = (value)=>{
//         fetch('https://api.github.com/search/users?q='+value).then(
//             response=>{
//                 console.log('success')
//                 return response.json()
//             }
//             // ,error=>{
//             //     console.log('eroor',error)
//             //     return new Promise(()=>{})
//             // }
//         ).then(
//             response=>{
//                 console.log('success-data',response)
//             }
//         ).catch(
//             (error)=>{
//                 console.log('eroor',error)
//             }
//         )
//     }

//     //优化 fetch简写
//      webFetch = async (value)=>{
//         try{
//             const response = await fetch('https://api.github.com/search/users?q='+value)
//             const data = await response.json()
//             console.log(data)
//         }catch(error){
//             console.log('请求出错',error)
//         }    
//     }

//     //将要取消挂载之前，销毁订阅
//     componentWillUnmount(){
//         console.log('componentWillUnmount')
//         PubSub.unsubscribe(sendmsg)
//     }
    
//     element = ()=>{
//         return useRoutes(routes)
//     }
//     render(){
//         //根据路由表生成对应的规则
        
//         return (
//             <div>
//                 <p>&nbsp;</p>
//                  <div  className={MenuCss.menu}>
//                     <MyNavLink to="/message/news" children="新闻"/>
//                     <MyNavLink to="/message/demo" children="订阅"/>
//                  </div>
//                 <div className={MenuCss.menu}>
//                      -----------------------------------------------
//                      {/* <News/>
//                      <Demo/> */}

//                      {this.element()}
                     
//                         <Routes>
//                             {/* <Route path="/message/news" element={<News />}/>
//                             <Route path="/message/demo" element={<Demo {...this.state}/>}/> */}

//                             {/* 重定向 react-router-dom@5 */}
//                             {/* <Redirect to="/message/news" /> */}
//                             {/* 重定向 react-router-dom@6 */}
//                             {/* <Route path="*" element={<Navigate to="/message/news" replace />}></Route> */}
                            
//                         </Routes>
//                 </div>

//             </div>
//         )
//     }
// }