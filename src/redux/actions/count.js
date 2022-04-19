/**
 * 该文件专门为Count组件生成action对象
 */
// function createIncrementAction(data){
//     return {type:'increment',data:data}
// }

// function createDecrementAction(data){
//     return {type:'decrement',data:data}
// }
import {INCREMENT,DECREMENT} from '../constant'

import store from '../store'

//同步action，就是指action的值为Object类型的一般对象
export const increment = data =>({type:INCREMENT,data})
export const decrement = data =>({type:DECREMENT,data})

//异步action，就是指action的值为函数，异步action中一般都会调用同步action
export const incrementAsync = (data,time)=>{
    return (dispatch)=>{
            return setTimeout(() => {
            // store.dispatch(increment(data))
            dispatch(increment(data))
            console.log('getState',store.getState())            
        }, time);
    }
}