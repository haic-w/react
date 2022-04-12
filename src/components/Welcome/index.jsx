import {Component} from "react";
//直接引入样式
// import './index.css';

//样式模块化
import WelcomeCss from './index.module.css'

import List from '../List'
import { nanoid } from "nanoid";

import PropTypes from 'prop-types'
import axios from 'axios'

export default class Welcome extends Component{
    state = {keyword:''}
    //对接收的props 进行类型、必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired,
        updateTodo:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired,
        delTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (event)=>{
        let keyword = event.target.value
        if(event.keyCode===13&&keyword!=''){
            console.log(keyword)
            this.setState({keyword:keyword})
            //调用主组件的方法，传入参数
            let todoObj = {id:nanoid(),name:keyword}
            this.props.addTodo(todoObj)

            //调用后台数据
            this.getList()
        }
        
    }

    //ajax 请求数据
    getList = ()=>{
        axios.get('http://localhost:3000/api/api.html').then(
            response=>{
                console.log('success',response.data)
            },
            error=>{
                console.log('error',error.message)
            }
        )
    }


    render(){
        const {todos,updateTodo,delTodo} = this.props
        
        return (
            <div className={WelcomeCss.welcome}>
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入查询内容，按回车键确认"/>
                <br/>
                <ul>
                    {
                        todos.map((todo)=>{
                           return <List todo={todo} keyword={this.state.keyword} updateTodo={updateTodo} delTodo={delTodo} key={todo.id} />
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}

