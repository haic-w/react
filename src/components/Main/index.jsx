
import {Component} from "react"

import Hello from '../Hello'
import Welcome from '../Welcome'
import Footer from '../Footer'

import {nanoid} from 'nanoid'
import MainCss from './index.module.css'

export default class Main extends Component{
    //状态在哪里，操作状态的方法就在哪里

    state = {todos:[
        {id: nanoid(),name:'手机',done:true},
        {id: nanoid(),name:'电脑',done:false},
        {id: nanoid(),name:'平板',done:true},
        {id: nanoid(),name:'游戏机',done:false}
    ]}
    
    // 添加
    addTodo = (todoObj)=>{//函数体
        console.log('addTodo',todoObj)
        this.setState({todos:[todoObj,...this.state.todos]})
    }
    // 修改
    updateTodo = (id,done)=>{
        const {todos} = this.state
        let newTodos = todos.map(todo=>{
            if(todo.id===id) return {...todo,done}
            else return todo
        })
        this.setState({todos:newTodos})
        console.log('updateTodo:',id,done)
    }
    // 删除
    delTodo = (id)=>{
        const {todos} = this.state
        let newTodos = todos.filter(todo=>{
            if(todo.id!==id) return todo
        })
        this.setState({todos:newTodos}) 
    }
    // 全选/反选
    checkAllTodo = (done)=>{
        const {todos} = this.state
        let newTodos =todos.map((todo)=>{
            return {...todo,done:done}
        })
        this.setState({todos:newTodos}) 
    }
    // 清除所有
    clearAllDone = ()=>{
        const {todos} = this.state
        let newTodos =todos.filter((todo)=>{
            return todo.done === false
        })
        this.setState({todos:newTodos}) 
    }
    
    render(){
        return (
            <div>
                <div className='header'><Hello /></div>
                <div className={MainCss.main}>
                    <Welcome todos={this.state.todos} addTodo={this.addTodo} updateTodo={this.updateTodo} delTodo={this.delTodo}/></div>
                <div className='footer'><Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/></div>
            </div>
        )
    }
}
