import {Component} from 'react'

import SearchHead from '../SearchHead'
import SearchList from '../SearchList'
import SearchCss from './index.module.css'

export default class Search extends Component{
    state = {todos:[],status:0,message:''}
   
    setUser = (data)=>{
        console.log('setUser',data)
        this.setState({todos:data})
    }

    setStatus = (status)=>{
        console.log('setStatus',status)
        this.setState({status:status})
    }

    setMessage = (message)=>{
        console.log('setMessage',message)
        this.setState({message:message})
    }
    
    render(){
        return (
            <div className={SearchCss.main}>
                <SearchHead setMessage={this.setMessage} setUser={this.setUser} setStatus={this.setStatus} />
                <SearchList message={this.state.message}  status={this.state.status} todos={this.state.todos}/>
                <div className={SearchCss.copyright}>copy right react</div>
            </div>
        )
    }
}