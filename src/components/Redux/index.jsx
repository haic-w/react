import {Component} from 'react'
//引入Count的容器组件
import Count from '../../containers/Count'

//引入Person的容器组件
import Person from '../../containers/Person'

// 单模块传递store
// import store from '../../redux/store'
export default function Redux(){
    
    return (
        <div>
            {/* 单模块传递store */}
            {/* <Count store={store} /> */}
            {/* 入口文件传递store */}
         
                <Count />
                <hr/>
                <Person />

        </div>
    )
}