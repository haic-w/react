import {Component} from 'react'
import ListCss from './index.module.css'
import PropTypes from 'prop-types'

export default class List extends Component{
    state = {mouse:false}

    static propTypes = {
        todo:PropTypes.func.isRequired,
        updateTodo:PropTypes.func.isRequired

    }
    handleMouse = (flag)=>{
       return ()=>{
            console.log(flag)
            this.setState({mouse:flag})
       }
        
    }

    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
            console.log('handleCheck:',event.target.checked)
        }
    }

    handleDel = (id)=>{
        return ()=>{
            if(window.confirm('确认要删除吗')){
                this.props.delTodo(id)
            }
        }
    }

    handleDelete = (id)=>{
        if(window.confirm('确认要删除吗')){
            this.props.delTodo(id)
        }
    }
    render(){
        const {todo,updateTodo} = this.props
        return (
            <li className={ListCss.li} style={{backgroundColor:this.state.mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label><input type="checkbox" checked={todo.done} onChange={this.handleCheck(todo.id)} /> {todo.id} - {todo.name}</label>
                <button onClick={this.handleDel(todo.id)} style={{display:this.state.mouse?'block':'none'}} className={ListCss.danger}>删除1</button>
                <button onClick={()=>{this.handleDelete(todo.id)}} style={{display:this.state.mouse?'block':'none'}} className={ListCss.danger}>删除2</button>
            </li>
        )
    }
}