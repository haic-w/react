import { PureComponent } from "react";
import './index'

export default class RenderProps extends PureComponent{

    state = {hasError:''}
    //生产环境不能用，build 打包之后才可以
    //当子组件出现报错时，会触发getDerivedStateFromError 调用，并携带错误信息
    static getDerivedStateFromError(error){
        console.log(error)
        return {hasError:error}
    }
    //渲染组件出错时
    componentDidCatch(){
        console.log('渲染组件出错时')
        //统计错误次数，发给后台
    }

    render(){
        return (
            <div className="parent">
                <h1>My is RenderProps</h1>
                {/* 方式一 children Props*/}
                {/* <A><B/></A> */}
                {/* 方式二 render Props*/}

                {this.state.hasError?<h2>稍后再试...</h2>:<A render={(name)=><B name={name}/>} />}

            </div>
        )
    }
}


class A extends PureComponent{
    state = {name:'tom'}
    // Error Boundary
    // state = {name:{}}
    render(){
        const {name} = this.state
        return (
            <div className="child">
                <h1>A组件</h1>
                {/* 方式一 */}
                {/* {this.props.children} */}
                {/* 方式二 */}
                {this.props.render(name)}
            </div>
        )
    }
}


class B extends PureComponent{
    render(){
        console.log('this.render.B')
        return (
            <div className="grand">
                <h1>B组件</h1>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}