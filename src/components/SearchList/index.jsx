import {Component} from 'react'
import SearchListCss from './index.module.css'

export default class SearchList extends Component{
    render(){
        const {todos,status,message} = this.props
        return (
            <div className={SearchListCss.searchMain}>
                
                {
                    status==0?<div>欢迎使用!</div>:
                    status==1?<div>加载中</div>:
                    status==2?<div>{message}</div>:
                    <div>
                        <ul>
                            {
                                todos.map((todo)=>{
                                    return (
                                        <li className={SearchListCss.li} key={todo.id}>
                                            <a target="_blank" href={todo.html_url}><img src={todo.avatar_url} className={SearchListCss.img} width="100"/></a>
                                            <span className={SearchListCss.name}>{todo.login}</span>
                                        </li>
                                    )
                                })
                            }
                        
                        </ul>
                    </div>
                  }
                         
            </div>
        )
    }
}