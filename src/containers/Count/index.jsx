//引入Count的UI组件
// import CountUI from '../../components/Count'

import {React,Component} from 'react'
import {Button,Select} from 'antd'


// 引入redux -action ，专门用于创建action对象
import {
        increment,
        decrement,
        incrementAsync
    } from '../../redux/actions/count'

//引入connect用于连接UI组件和redux
import {connect} from 'react-redux'

//a函数返回的对象中的key就作为传递给UI组件props的key，
//value就作为传递给UI组件的props的value-状态
//mapStateToProps 用于传递状态
//mapStateToProps正常写法
// function mapStateToProps(state){
//     return {num:state}
// }

//mapStateToProps简写
const mapStateToProps = state=>({num:state})

//b函数返回的对象中的key就作为传递给UI组件props的key，
//value就作为传递给UI组件的props的value-操作状态的方法
//mapDispatchToProps 用于传递操作状态的方法
// mapDispatchToProps正常写法
// function mapDispatchToProps(dispatch){
//         //写法2
//         return {
//             addNum:number=>dispatch(increment(number)),
//             Reduct:number=>dispatch(decrement(number)),
//             addNumAsync:(number,time) => dispatch(incrementAsync(number,time))
//         }
//         //写法1
//         return {
//                 addNum:(number)=>{
//                 //通知redux执行加法
//                 dispatch({type:'increment',data:number})
//             }
        
//         }
// }

//mapDispatchToProps简写
const mapDispatchToProps = dispatch =>(
    {
        addNum:number=>dispatch(increment(number)),
        Reduct:number=>dispatch(decrement(number)),
        addNumAsync:(number,time) => dispatch(incrementAsync(number,time))
    }
)

//使用connect()()创建并保留一个Count的容器组件
//connect正常写法
// export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

//connect一般写法
// export default connect(
//     state =>({num:state}),
//     dispatch =>(
//         {
//             addNum:number=>dispatch(increment(number)),
//             Reduct:number=>dispatch(decrement(number)),
//             addNumAsync:(number,time) => dispatch(incrementAsync(number,time))
//         }
//     )
// )(CountUI)




//内部引入Count的UI组件
//#region 
class Count extends Component{
   
    state = {selectnum:1}
    
    handleChange = (value)=>{
        this.setState({selectnum:value})
        console.log('handleChange',value)
    }

    increment = ()=>{
        console.log('increment')
        this.props.increment(this.state.selectnum)
        console.log('getState',this.props.person)
        
    }
    decrement = ()=>{
        console.log('decrement')
        this.props.decrement(this.state.selectnum)
        console.log('getState')
    }
    incrementIfOdd = ()=>{
        console.log('incrementIfOdd')
        if(this.props.count%2!==0) {
            this.props.increment(this.state.selectnum)
            console.log('getState',this.props.count)
        }
    }
    incrementAsync =()=>{
        this.props.incrementAsync(this.state.selectnum,1000)
        console.log('incrementAsync')
    }

    render(){
        const { Option } = Select;
        return (
            <div>
                <p>&nbsp;</p>
                <h1>Count 组件</h1>
                <h2>和为 {this.props.count}</h2>
                <Select defaultValue="1" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                </Select>
                <Button type="primary" onClick={this.increment}>+</Button>
                <Button type="primary" onClick={this.decrement}>-</Button>
                <Button type="primary" onClick={this.incrementIfOdd}>单数加</Button>
                <Button type="primary" onClick={this.incrementAsync}>异步加</Button>
                
                <ul>
                    {
                        this.props.person.map((personObj)=>{
                            return <li key={personObj.id}>{personObj.id}-名字{personObj.name}-年龄{personObj.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
//#endregion


//connect 精简写法
export default connect(
    state =>({count:state.count,person:state.person}),//映射state关系
    {
        increment,
        decrement,
        incrementAsync
    }//映射state操作方法
)(Count)