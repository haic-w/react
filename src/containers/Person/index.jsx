// UI 组件引入
import React,{Component, useRef} from "react"
import {Button,Input} from 'antd'
import {nanoid} from 'nanoid'
import PersonCss from './index.module.css'


// 容器组件引入
// step1.引入connect用于连接UI组件和redux
import {connect} from 'react-redux'


// step2.引入redux -action ，专门用于创建action对象
import {
    addPerson,
} from '../../redux/actions/person'

// step3.UI组件
class Person extends Component{

    state = {name:'',age:'',person:[]}

    handleNameChange = (event)=>{
        this.setState({name:event.target.value})
    }
    handleAgeChange = (event)=>{
        this.setState({age:event.target.value})
    }

    addPerson = ()=>{
        let name = this.state.name
        let age = this.state.age
        let personObj = {id:nanoid(),name:name,age:age}
        console.log(personObj)
        //调用react-redux容器组件方法，该方法绑定在props对象上你
        this.props.addPerson(personObj)
        //获取react-redux state
        console.log('getState',this.props.person)
    }
    render(){
        return (
            <div className={PersonCss.person}>
                <p>&nbsp;</p>
                <h1>Person 组件</h1>
                <h2>和为{this.props.count}</h2>
                <div>姓名：<Input placeholder="请输入名字" type="text" onChange={this.handleNameChange} /></div>
                <div>年龄：<Input placeholder="请输入年龄" type="text" onChange={this.handleAgeChange} /></div>
                <div><Button type="primary" onClick={this.addPerson} >添加</Button></div>

                <ul>
                    {
                        this.props.person.length?
                            this.props.person.map((personObj)=>{
                                return <li key={personObj.id}>{personObj.id}-名字{personObj.name}-年龄{personObj.age}</li>
                            })
                        :''
                       
                    }
                </ul>
            </div>
        )
    }
}

// step4.connect 精简写法
// 参数1：mapStateToProps，参数2：mapDispatchToProps
export default connect(
    state =>({person:state.person,count:state.count}),//映射状态
    {
        addPerson//映射操作状态的方法
    }
)(Person)