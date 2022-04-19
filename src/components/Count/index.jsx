import {React,useState,setSate,useEffect,Component} from 'react'
import {Button,Select} from 'antd'

// 

export default class Count extends Component{
   
    state = {selectnum:1}
    
    handleChange = (value)=>{
        this.setState({selectnum:value})
        console.log('handleChange',value)
    }

    increment = ()=>{
        console.log('increment')
        this.props.addNum(this.state.selectnum)
        console.log('getState')
        
    }
    decrement = ()=>{
        console.log('decrement')
        this.props.Reduct(this.state.selectnum)
        console.log('getState')
    }
    incrementIfOdd = ()=>{
        console.log('incrementIfOdd')
        if(this.props.num%2!==0) {
            this.props.addNum(this.state.selectnum)
            console.log('getState',this.props.num)
        }
    }
    incrementAsync =()=>{
        this.props.addNumAsync(this.state.selectnum,1000)
        console.log('incrementAsync')
    }

    render(){
        const { Option } = Select;
        return (
            <div>
                <p>&nbsp;</p>
                <h2>和为 {this.props.num}</h2>
                <Select defaultValue="1" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                </Select>
                <Button type="primary" onClick={this.increment}>+</Button>
                <Button type="primary" onClick={this.decrement}>-</Button>
                <Button type="primary" onClick={this.incrementIfOdd}>单数加</Button>
                <Button type="primary" onClick={this.incrementAsync}>异步加</Button>
            </div>
        )
    }
}
