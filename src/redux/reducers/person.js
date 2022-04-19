//常量配置文件
import {ADD_PERSON} from '../constant'
//初始化数据
const initState = []

export default function personReducer(preState=initState,action){
    console.log('personReducer')

    console.log('preState:',preState,'data:',action)
    
    // 从action对象中获取：type、data
    const {type,data} = action
    
    // 根据type决定如何加工数据
    switch(type){
        case ADD_PERSON:
            return [...preState,data]
        default://一定要有返回值，否则报错，可以返回null,默认一定要返回，否则数据会丢
            return preState===undefined?initState:preState
    }
    /**
     * 报错信息
     * redux.js:441 Uncaught Error: The slice reducer for key "person" returned undefined during initialization. 
     * If the state passed to the reducer is undefined, 
     * you must explicitly return the initial state. 
     * The initial state may not be undefined. If you don't want to set a value for this reducer, 
     * you can use null instead of undefined.
     */
}