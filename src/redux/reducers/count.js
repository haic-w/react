/**
 * 1.该文件是用于创建一个为Count组件服务的reducer，
 * reducer本质就是一个函数
 * 2.reducer 函数会接收到2个参数，分别为：previousState(之前状态),action(动作对象)
 */
import {INCREMENT,DECREMENT} from '../constant'

export default function countReducer(preState,action){
    console.log('countReducer')
    
    console.log('preState:',preState,'data:',action)
    // 从action对象中获取：type、data
    const {type,data} = action
    // 根据type决定如何加工数据

    switch(type){
        case INCREMENT://加
            return parseInt(preState+data*1)
            // break
        case DECREMENT://减
            return parseInt(preState-data*1)
            // break
        default:
            return preState===undefined?0:preState
            // break
    }

}