import {Component,useState} from 'react'
import {Navigate} from 'react-router-dom'
import PubSub from 'pubsub-js'
import {Button} from 'antd'
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

// class Demo extends Component{
    
//     sendMessage = ()=>{
//         console.log('sendMessage')
//         PubSub.publish('sendmsg',{name:'halo',age:28})
//     }
//     render(){
//         return (
//             <div>
//                 <h2>名称：{this.props.name}</h2>
//                 <h2>年龄：{this.props.age}</h2>

//                 <button onClick={this.sendMessage}>发布消息</button>
//             </div>
//         )
//     }
// }

export default function Demo(){
    const [num,setSum] = useState(1)
    return (
        <div>
            <h2>Demo</h2>
            <h3>当前sum值是：{num}</h3>
            <StarOutlined />
            <StarFilled />
            <StarTwoTone twoToneColor="#eb2f96" />
            {num===2?<Navigate to="/" replace></Navigate>:<h3>当前sum值是：{num}</h3>}
            
            <Button type="primary" onClick={()=>setSum(2)}>点我将sum变为2</Button>
        </div>
    )
}