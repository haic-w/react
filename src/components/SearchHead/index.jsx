import {Component} from 'react'

import SearchList from '../SearchList'
import SearchHeadCss from './index.module.css'
import axios from 'axios'

export default class SearchHead extends Component{
    search = ()=>{
        //获取用户输入
        const {keyword:{value}} = this
        this.setStatus(0)//状态-欢迎语
        if(value=='') return console.log('请输入搜索内容')

        // console.log(this.refs.keyword.value)
        // //结构赋值
        // let obj = {a:{b:{c:value}}}
        // let {a:{b:{c:data}}} = obj
        // console.log('data',data)
        
        //搜索
        this.searchUser(value)
       
    }

    setStatus = (num)=>{
        this.props.setStatus(num)
    }

    setMessage = (message)=>{
        this.props.setMessage(message)
    }

    setUser = (userList)=>{
        this.props.setUser(userList)
    }
    
    searchUser = (value)=>{
        if(value=='') return console.log('请输入搜索内容')
        this.setStatus(1)//状态-加载中...
        // window.localStorage.removeItem(value)
        var userList = window.localStorage.getItem(value)
        if(userList!=''&&userList!=undefined&&userList!=null){
            console.log('localStorage')
            this.setStatus(3)//状态-正常
            userList = JSON.parse(userList)
            //设置状态数据
            this.setUser(userList)
        }else{
            console.log('axiosGet')
            axios.get('https://api.github.com/search/users?q='+value).then(
                response => {
                    userList = response.data.items;
                    console.log('success',userList)
                    window.localStorage.setItem(value,JSON.stringify(userList))
                    this.setStatus(3)//状态-正常
                    //设置状态数据
                    this.setUser(userList)
                },
                error =>{
                    this.setStatus(2)//状态-错误
                    this.setMessage(error.message)
                    console.log('error',error.message)
                }

            )
        }

        
        
    }

    render(){
        return (
            <div>
                <p>Search Github Users</p>
                {/* <input ref="keyword" className={SearchHeadCss.input} type="text" placeholder="enter the name you search" /> */}
                <input ref={c=>this.keyword = c} className={SearchHeadCss.input} type="text" placeholder="enter the name you search" />
                
                <button onClick={this.search}>axios-Search</button>
               
            </div>
        )
    }
}