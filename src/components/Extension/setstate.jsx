import React,{Component} from 'react'

export default class SetState extends Component{
    state = {count:0}

    Sum = ()=>{
        //1.获取原来的count值
        let {count} = this.state
        //2.设置值-对象式-简写，没有返回值
        // this.setState({count:count+1})
        //此处拿不到this.state.count,setState是异步的
        // console.log('state.count:',this.state.count)

        //2.1设置值-对象式
        // this.setState({count:count+1},()=>{
        //     console.log('huidiao',this.state.count)
        // })
        //3.设置值-函数式
        // this.setState((state,props)=>{
        //     console.log('state:',state)
        //     console.log('props:',props)

        //     return {count:state.count+1}
        // })
        //3.1设置值-函数式-简写
        this.setState(state=>({count:state.count+1}))

    }

    render(){
        return (
            <div>
                <h2>SetState</h2>
                <h3>当前求和为：{this.state.count}</h3>
                <button onClick={this.Sum}>点我加1</button>
            </div>
        )
    }
}