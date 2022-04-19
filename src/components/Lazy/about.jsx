import {Fragment,useState,Component, useEffect, createRef, useRef} from 'react'
import ReactDOM from 'react-dom'
import {Button, Input} from 'antd'

//函数式组件
function Abouts(){
    var initNum = 0
    var initName = ''
    let [num,setNum] = useState(initNum)
    let [name,setName] = useState(initName)

    let myRef = useRef()
    //第一个参数：函数体
    //第二个参数：不传[],监测所有更新，每次更新都会调用；
    //           传[],谁也不监测
    //           传[num],监测num
    //相当于componentDidUpdate
    // useEffect(()=>{
    //     console.log('useEffect'+parseInt(num+1))
    // },[num])
    //相当于componentDidMount
    //useEffect(()=>{},[])

    //相当于componentWillUnmount
    useEffect(()=>{
        // let timer = setInterval(()=>{
        //     add()
        // },1000)
        // setTimeout(()=>{
        //     clearInterval(timer)
        // },2000)
        return ()=>{
            //返回的函数，相当于componentWillUnmount
            // clearInterval(timer)
        }
    },[])

    function add(){
        //第一种写法：简写
        // setNum(num+1)
        //第二种写法：
        // setNum((num)=>{return num+1})
        setNum(num=>num+1)
        console.log(num)
    }

    function updName(){
        setName('tom'+num)
        console.log(name)
    }

    function show(){
        console.log(myRef.current.value)
    }

    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <Fragment>
            <h1>My is About</h1>
            <h2>当前求和为：{num}</h2>
            <h2>name：{name}</h2>
            <Button type='primary' onClick={add}>点我+1</Button>
            <Button type='primary' onClick={updName}>更换名称</Button>
            <Button type='primary' onClick={unmount}>卸载组件</Button>
            <br/>
            <br/>
            <input onChange={show} ref={myRef}></input>
        </Fragment>
    )
}

//类式组件
class About extends Component{
    state = {num:0,name:''}

    //创建Ref
    myRef = createRef()

    add = ()=>{
        this.setState({num:this.state.num+1})
        console.log(this.state.num)
    }

    updName = ()=>{
        this.setState({name:'tom'+this.state.num})
    }

    unmount = ()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    show = ()=>{
       console.log(this.myRef.current.value)
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render(){
        return (
            <Fragment>
                <h1>My is About</h1>
               
                <h2>当前求和为：{this.state.num}</h2>
                <h2>name：{this.state.name}</h2>
                <Button type='primary' onClick={this.add}>点我+1</Button>
                <Button type='primary' onClick={this.updName}>更换名称</Button>

                <Button type='primary' onClick={this.unmount}>卸载组件</Button>
                <br/>
                <input ref={this.myRef} onChange={this.show}></input>
            </Fragment>
        )
    }
}

export default Abouts