import {Component} from "react";
import Footercss from './index.module.css'

export default class Footer extends Component{
    // 全选/反选
    handleCheckAll = (event)=>{
        let done = event.target.checked
        this.props.checkAllTodo(done)
    }
    // 清除已完成
    handleClearAllDone = ()=>{
        this.props.clearAllDone()
    }
    render(){
        const {todos} = this.props
        //已完成
        // const doneCount = 0;
        const doneCount = todos.reduce((previousValue,currentValue)=>
            previousValue + (currentValue.done?1:0)
        ,0)
       


        return (
            <div className={Footercss.footer}>
                <div>
                    <label>
                        全选/反选<input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===todos.length&&todos.length!=0}/>
                    </label>
                    <span>已完成 {doneCount} </span> / <span>全部 {todos.length}</span>

                    <span><button onClick={this.handleClearAllDone}>清除已完成任务</button></span>
                </div>
                
                <h5>copy right react</h5>
            </div>
        )
    }
}
