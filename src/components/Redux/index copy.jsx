import {React,useState,setSate,useEffect} from 'react'
import {Button,Select} from 'antd'

// 引入redux - store，用于获取store 中保持的数据
import store from '../../redux/store.js'
// 引入redux -action ，专门用于创建action对象
import {createIncrementAction,createDecrementAction,incrementAsyncAction} from '../../redux/count_action.js'

export default function Redux(){
    let [num,setNum]    = useState(0)
    let [dnum,setDnum]  = useState(1)

    const { Option } = Select;

    console.log('getState',store.getState())

    useEffect(() => {
        
        console.log('useEffect')
        //监测redux中状态变化，只要状态变化，就调用render
        store.subscribe(()=>{
            console.log('render 调用了')
            setNum(store.getState())
        })
    })

    function handleChange(value){
        setDnum(parseInt(value))
        console.log('handleChange',value)
    }

    function increment(){
        console.log('increment')
        // setNum((num += dnum*1))
        
        store.dispatch(createIncrementAction(dnum))

        console.log('getState',store.getState())
        
    }
    function decrement(){
        console.log('decrement')
        // setNum((num -= dnum*1))
        
        store.dispatch(createDecrementAction(dnum))
        console.log('getState',store.getState())
    }
    function incrementIfOdd(){
        console.log('incrementIfOdd')
        num = store.getState()
        if(num%2!==0)  {
            // setNum((num += dnum*1))

        
            store.dispatch(createIncrementAction(dnum))
            console.log('getState',store.getState())
        }
    }
    function incrementAsync(){
        console.log('incrementAsync')
        store.dispatch(incrementAsyncAction(dnum,1000))
        
    }
    return (
        <div>
            <p>&nbsp;</p>
            <h2>和为 {num}</h2>
            <Select defaultValue="1" style={{ width: 120 }} onChange={handleChange}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            </Select>
            <Button type="primary" onClick={increment}>+</Button>
            <Button type="primary" onClick={decrement}>-</Button>
            <Button type="primary" onClick={incrementIfOdd}>单数加</Button>
            <Button type="primary" onClick={incrementAsync}>异步加</Button>
        </div>
    )
}