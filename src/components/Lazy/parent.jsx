import React,{Component, Fragment,PureComponent} from 'react'
import { Button } from 'antd'

import './index.css'

export default class Parent extends Component{
    state = {carName:'大众宝来'}
    
    changeCar = ()=>{
        // this.setState({carName:'奔驰大G'})
        let obj = this.state
        obj.carName = '奔驰';
        console.log(obj)
        this.setState(obj)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('===========1==============')
        console.log(this.props,this.state)//目前的props 和 state
        console.log('===========2==============')
        console.log(nextProps,nextState) //加下来要变化的目标props，目标state
        console.log('===========3==============')

        if(this.state.carName===nextState.carName){
            return false
        }
        return true
    }

    render(){
        let {carName} = this.state
        console.log('Parent:--------------------')
        return (
            <div className='parent'>
                <h3>My is Parent</h3>
                <h2>My is CarNmae : {carName}</h2>
                <Button type="primary" onClick={this.changeCar} >点我换车</Button>
                <br/>
                <Child carName={carName}/>
            </div>
        )
    }
}

class Child extends PureComponent{
    render(){
        console.log('Child:',this.props)
        let {carName} = this.props
        return (
            <Fragment>
                <h3 className='child'>My is Child</h3>
                <h2>My is CarNmae : {carName}</h2>
            </Fragment>
        )
    }
}