### React
[React](https://react.docschina.org/)

#### React简介
##### 是什么？
用于构建用户界面的JavaScript 库。
是一个将数据渲染为HTML视图的开源JavaScript库。
1.发送请求获取数据
2.处理数据(过滤、整理格式等)
3.操作DOM呈现页面
##### 谁开发的？
由Facebook 开发，且开源
##### 为什么要学？
document.getElementById('app')
document.querySelector('#app')
document.getElementsTagName('span')
1.原生JavaScript 操作DOM繁琐、效率低(DOM-API操作UI)
2.使用JavaScript直接操作DOM，浏览器会进行大量的重绘重排。
3.原生JavaScript没有组件化编码方案，代理复用率低。

##### 框架特点
1.采用组件化模式、声明式编码，提高开发效率及组件复用率。
2.在React Native中可以使用React 语法进行移动端开发。
3.使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互。

##### 需要掌握的知识
1.判断this的指向
2.class 类
3.ES6语法规范
4.npm包管理器
5.原型、原型链
6.数组常用方法
7.模块化

#### 1.React 入门
1.官方网站
	[英文](https://reactjs.org/)
	[中文](https://react.docschina.org/)
2.介绍描述
	用于动态构建用户界面的Javas库
	由Facebook开源
3.React特点
	声明式编码
	组件化编码
	React Native编写原生应用
	高效(优秀的Diffing算法)
4.React 高效的的原因
	使用虚拟(virtual)DOM 不总是直接操作页面真实DOM
	DOM Diffing算法，最小化页面重绘
##### React 基本使用
相关js库
	1).react.js 	 ——React 核心库
	2).babel.min.js ——解析JSX语法代码转为JS代码的库 
	3).react-dom.js ——提供操作DOM的react 扩展库

##### 关于虚拟DOM
1.本质是Object 类型的对象(一般对象)
2.虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多属性。
3.虚拟DOM最终会被React转化为真实DOM，呈现在页面。

##### React JSX
1.全程：JavaScript XML
2.react定义的一种类似于XML的JS扩展语法：JS+XML
3.本质是 React.createElement(component,props,...children) 方法语法糖
4.作用：用来建行创建虚拟DOM
	1).写法：var ele = <h1>Hello JSX!</h1>
	2).注意1：它不是字符串，也不是HTML/XML标签
	3).注意2：它最终产生的就是一个JS对象
5.标签名任意：HTML标签或其它标签

###### 语法规则
1.定义虚拟DOM时，不要写引号
2.标签中混入JS表达式是要用{}
3.样式类名：className
4.内联样式：style={{color:'red','fontSize':2+'rem'}}
5.必须只有一个根标签
6.标签必须闭合
7.标签首字母
	1).若小写字母开头，则将该标签转为html中同名元素，若html无对应的同名元素，则报错。
	2).若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。

##### 注意区分

######  js表达式 
1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
	下面这些都是表达式：
	1).a
	2).a+b
	3).demo(1)
	4).arr.map
	5)function test(){}
######  js语句(代码)
1.语句(代码)
	下面这些都是语句(代码)：
	1).if(){}
	2).for(){}
	3).switch(){case:xx}

```react
//jsx 循环
{
    data.map( (value,index)=>{
    	return <li key={index}>{value}</li>
    })
}
```
##### 模块与组件
###### 模块
1.理解：向外提供特定功能的js程序，一般就是一个js文件
2.为什么要拆成模块：随着业务逻辑增加，代码越来越多且复制。
3.作用：服用js，简化js的编写，提供js运行率

###### 组件
1.理解：用来实现局部功能的代码和资源的集合(html/css/js/image 等待)
2.为什么：一个界面的功能更复杂
3.作用：服用编码，简化项目编码，提高运行效率

###### 模块化
当应用的js 都以模块来编写的，这个应用就是一个模块化的应用

###### 组件化
当应用是以多组件的方式实现，这个应用就是一个组件化的应用

#### 2.面向组件编程
##### 函数式组件
```react
 // 1.创建函数式组件
function Demo(){
     console.log(this)//此处的this是undefined，因为babel编译后开启了严格模式
     return (
     	<h2>函数式组件</h2>
     )
}
// 2.渲染虚拟DOM到页面
ReactDOM.render(<Demo/>,document.getElementById("app"))
/**
 * 执行了ReactDOM.render(<Demo/>....之后发生了什么？)
 * 1.React 解析组件标签，找到了Demo组件。
 * 2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面。
*/
```
##### 类式组件
1.类中的构造器不是必须写的，要对实例进行初始化的操作，如添加指定属性时才写。
2.如果A类继承了B类，且A类中写了构造器，nameA类构造器中的super是必须要调用的。
3.类中所定义的方法，都是放在了类的原型对象上，供实例使用
```react
// 1.创建类式组件
class MyClass extends React.Component{
     render(){
         return (
         	<h2>类式组件</h2>
         )
     }
}
// 2.渲染虚拟DOM到页面
ReactDOM.render(<MyClass/>,document.getElementById("app"))
/**
 * 执行了ReactDOM.render(<MyClass/>....之后发生了什么？)
 * 1.React 解析组件标签，找到了MyClass组件。
 * 2.发现组件是使用类定义的，随后new出来该类的实例，并通过实例调用到原型上的render方法。 
 * 3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面。
 * 
*/

```
##### 类中方法this指向
```react
		//创建组件
        class Weather extends React.Component{
            //构造器调用1次
            constructor(props){
                super(props)
                this.state = {ishot:false,a:'b'}
                //解决changeWeather中this指向的问题
                this.changeWeather = this.changeWeather.bind(this)
            }
            changeWeather(){
                'use strict'//开启严格模式
                //  changeWeather 放在哪里？—————Weather的原型对象上，供实例使用
                // 通过Weather实例调用changeWeather时，changeWeather中的this就是Weather实例
                // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
                // 类中的方法默认开启了局部的严格模式，所以changeWeather中的this是undefined
                
                //注意：状态state不可直接更改，要借助一个内置API去更改
                //更新
                this.setState({ishot:!this.state.ishot})
                this.setState({b:!this.state.ishot})

                // this.state.ishot = !this.state.ishot  
                return console.log('changeWeather中的this',this)
            }
            //render 调用1+N次
            render() {
                console.log('render中的this',this)
                return (
                    <div>
                        <h2 id="hot">今天天气{this.state.ishot?'炎热':'凉爽'}</h2>    
                        <h2 id="hot1">今天天气{this.state.ishot?'炎热':'凉爽'}</h2> 
                        <h2 onClick={this.changeWeather}>今天天气{this.state.ishot?'炎热':'凉爽'}</h2>       
                    </div>
                )   
            }
            
        }

        // 2.渲染虚拟DOM到页面
        ReactDOM.render(<Weather/>,document.getElementById('app'))

        //原生点击事件
        document.getElementById('hot').addEventListener('click',()=>{
            console.log('click listener')
        })
        document.getElementById('hot1').onclick=()=>{
            console.log('onclick')
        }
        
```
##### 展开运算符...
```javascript
	let arr1 = [1,3,5,7,9]
	let arr2 = [2,4,6,8,10]
	//展开一个数组
	console.log(...arr1)
	//连接一个数组
	let arr3 = [...arr1,...arr2]
	//在函数中使用
	function sum(...numbers){
		return numbers.reduce((preValue,currentValue)=>{
			return preValue+currentValue
		})
	}
	console.log(sum(1,2,3))
	//构造字面量对象时使用展开语法
	let person = {name:'tom',age:18}
	let person2 = {...person} //克隆一个对象
	person.name = 'jack'
	console.log(person)
	console.log(person2)
	
	//合并
	let person3 = {...person,name:'haha',address:'beij'}
	console.log(person3)
```

##### 三大核心组件

######  state
**对State的理解**
理解：核心组件之一：
1.state 是组件对象最重要的属性，值是对象(可以包含多个key-value的组合)
2.组件被称为“状态机”，通过更新组件的state来更新对应的页面显示(重新渲染组件)

**强烈注意：**
1.组件中render方法中的this为组件实例对象
2.组件自定义的方法中this为undefined，如何结局
	强制绑定this：通过函数对象的bind()  
	this.changeWeather = this.changeWeather.bind(this)
	箭头函数  changeCar = ()=>{}
3.状态数据，不能直接修改或更新  this.setState({ishot:!this.state.ishot}) 


```react
 		//1.创建类式组件
        class Car extends React.Component{
            //初始化state
            state = {name:'car',price:'12w',wheel:4}
            constructor(props){
                super(props)//写构造函数，一定要写super，否则报错
            }

            //自定义方法——要用赋值语句的形式+箭头函数
            changeCar = ()=>{
                this.wheel= 8
                console.log('changeCar',this)
            }

            render(){
                // console.log('render',this)
                return (
                    <h2 onClick={this.changeCar}>
                        {this.state.name}-{this.state.price}-{this.state.wheel}
                    </h2>
                )
            }
        }

        //渲染组件到页面
        ReactDOM.render(<Car/>,document.getElementById('app'))
```

###### props
理解：核心组件之二：
1.每个组件对象都会有props(properties)属性
2.组件标签的所有属性都保存在props中

作用：
1.通过标签属性从外组件外向内传递变化的数据
2.注意：组件内部不需要修改props数据

编码操作：
1.内部读取某个属性：this.props.name
2.对props中的属性值进行类型限制和必要性限制
```react
//第一种方式(React v15.5开始弃用)
Person.propTypes = {
	name:React.PropTypes.string.isRequired,
	age:React.PropTypes.number
}
//第二种方式:使用prop-types 库进行限制(需要进入prop-types库)
<script src="./js/prop-types.js"></script>
//对标签属性进行类型、必要性限制
static propTypes = {
    name:PropTypes.string.isRequired,
    sex:PropTypes.string,
    age:PropTypes.number
}
//默认属性值
static defaultProps = {
    sex:'未知',
    age:19
}

//扩展属性：将对象的所有制通过props传递
<Person {...Person}/>
```
类式组件简写
```react
	
        let state = {name:'tom',age:12,sex:'男'}
        // 1.创建类式组件
        class Person extends React.Component{
        	//组件类的构造函数
            constructor(props){
                //构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
                super(props)

            }
            //对标签属性进行类型、必要性限制
            static propTypes = {
                name:PropTypes.string.isRequired,
                sex:PropTypes.string,
                age:PropTypes.number
            }
            //默认属性值
            static defaultProps = {
                sex:'未知',
                age:19
            }
            render(){
                return (
                    <div className="list">
                        <ul>
                            <li>姓名：{this.props.name}</li> 
                            <li>年龄：{this.props.age}</li>
                            <li>性别：{this.props.sex}</li>   
                        </ul>
                    </div>
                )
            }
        }
        // 2.渲染组件到页面
        ReactDOM.render(<Person {...state}/>,document.getElementById('app'))
```
###### refs
理解：核心组件之三：
组件内的标签可以定义ref属性来标识自己
编码：
1.字符串形式的ref
2.回调形式的ref
3.crateRef() ——推荐

```react
        // 1.创建类式组件
        class Demo extends React.Component{

            // constructor(props){
            //     super(props)
            //     console.log(props)
            // }

            /**
             *  React.createRef
             *  调用后可以返回一个容器，该容器可以存储被ref锁标识的节点
             */

            myRef = React.createRef()
            myRef2 = React.createRef()
           
            showData = ()=>{
                console.log('showData')
                console.log(this)
                console.log('1.字符串类型ref:',this.refs.input1.value)
                console.log('2.字符串类型ref:',this.refs.input2.value)
                //input3，input4 把表单直接放在了this身上
                console.log('3.:',this.input3.value)
                console.log('4.回调类型简写:',this.input4.value)
                //input1，input2，input5 把表单放在了this.refs身上
                console.log('5.回调类型简写:',this.refs.input5.value)
                //input1，input2，input5 把表单放在了this.refs身上
                console.log('6.类绑定:',this.refs.input6.value)

                console.log('7.创建ref:',this.myRef.current.value)

                console.log('8.创建ref2:',this.myRef2.current.value)
            }
            saveInput = (a)=>{
                this.refs.input6 = a
                console.log('类绑定方式',this)
            }
            render(){
                return (
                    <div className="main">
                        {/**字符串类型的ref**/}
                        <input ref="input1" type="text" placeholder="点击按钮提示数据"/>
                        <input ref="input2" onBlur={this.showData} type="text" placeholder="失去焦点提示数据" />
                        {/**回调类型ref**/}
                        <input ref={(a)=>{this.input3 = a}} type="text" placeholder="点击按钮提示数据"/>
                        {/**回调类型ref——简写**/}
                        <input ref={a => this.input4 = a} type="text" placeholder="点击按钮提示数据"/>
                        <input ref={a => this.refs.input5 = a} type="text" placeholder="点击按钮提示数据"/>
                        {/**a 传入的参数，赋值给this.refs 上**/}
                        {/*类绑定方式*/}
                        <input ref={this.saveInput} type="text" placeholder="点击按钮提示数据"/>
                        {/*创建容器*/}
                        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>
                        {/*创建容器2*/}
                        <input ref={this.myRef2} type="text" placeholder="点击按钮提示数据"/>
                        
                        <button ref="button"  onClick={this.showData}>点我提示左侧的数据</button>

                    </div>
                )
                
            }

            //字符串ref写法，后代版本废弃掉
            
            //ref 回调次数，先清空再赋值，会调用2次
        }

        // 对标签属性进行类型、必要性限制
        Demo.propTypes={}
        // 指定默认标签属性值
        Demo.defaultProps = {}

        // 2.渲染组件到页面
        ReactDOM.render(<Demo {...state}/>,document.getElementById('app'))

```
##### 事件处理
1.通过onXxx 属性指定事件处理函数(注意大小写)
	1).React 使用的是自定义(合成)事件，而不是使用的原生DOM事件
	2).React 中的事件时通过事件委托方式处理的(委托给组件最外层的元素)
2.通过 event.target 得到发生事件的DOM元素对象

##### 收集表单数据
1.非受控组件——现用现取
2.受控组件
```react
		// 1.创建类式组件
        class Login extends React.Component{
            
            state = {username:'',password:''}
            // 对标签属性进行类型、必要性限制
            static propTypes={}
            // 指定默认标签属性值
            static defaultProps = {}
            saveUserName = (event)=>{
                this.setState({username:event.target.value})
                // 直接赋值是错误的，不能实时监听
                // this.state.username = event.target.value
                console.log('state:',this.state)
            }
            savePassWord = (event)=>{
                this.setState({password:event.target.value})
                // 直接赋值是错误的，不能实时监听
                // this.state.password = event.target.value
                console.log('state:',this.state)
            }

            handleSubmit = (event)=>{
                event.preventDefault()//阻止表单提交
                console.log('username:',this.username.value)
                console.log('password:',this.password.value)
                console.log('state:',this.state)
            }
            render(){
                return (
                    <div className="">
                        <form method="post" onSubmit={this.handleSubmit}>
                            {/**勿过度使用ref**/}
                            {/**非受控组件**/}
                            非受控组件：
                            <input ref={(currentNode)=>{this.username = currentNode }} type="text" name="username" placeholder="用户名" />
                            <input ref={currentNode=>this.password = currentNode} type="password" name="password" placeholder="密码"/>
                            <br/>
                            {/**受控组件**/}
                            受控组件:
                            <input onChange={this.saveUserName} name="username" placeholder="用户名" />
                            <input  onChange={this.savePassWord} type="password" name="password" placeholder="密码"/>
                            <br/>
                            <button>登录</button>   
                        </form>
                        
                    </div>
                )
            }
        }
       
        // 2.渲染组件到页面
        ReactDOM.render(<Login/>,document.getElementById('app'))
```
##### 高阶函数
1.如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数
	1.若A函数，接收的参数是一个函数，nameA就可以称之为高阶函授。
	2.若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。
	常用的高阶函数有：promise、setTimeout、arr.map()...
2.函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式
```react
  // 1.创建类式组件
        class Login extends React.Component{
            
            state = {username:'',password:''}
            // 对标签属性进行类型、必要性限制
            static propTypes={}
            // 指定默认标签属性值
            static defaultProps = {}
            /**
             * 函数的柯里化：
             * 通过函数调用继续返回函数的方式，
             * 实现多次接收参数最后统一处理的函数编码形式
             */
           saveData = (dataType)=>{
                console.log(dataType)
                return (event)=>{
                    this.setState({[dataType]:event.target.value})
                }
            }
            //去柯里化
            saveFormData = (dataType,event)=>{
                console.log('@',dataType,event.target)
                this.setState({[dataType]:event.target.value})
            }
            handleSubmit = (event)=>{
                event.preventDefault()//阻止表单提交
                console.log('username:',this.username.value)
                console.log('password:',this.password.value)
                console.log('state:',this.state)
            }
            render(){
                return (
                    <div className="">
                        <form method="post" onSubmit={this.handleSubmit}>

                             {/**函数柯里化:**/}
                             <br/>
                             柯里化:
                            <input onChange={this.saveData('username')} name="username" placeholder="用户名" />
                            <input  onChange={this.saveData('password')} type="password" name="password" placeholder="密码"/>
                            <br/>
                            去柯里化:
                            <input onChange={(event)=>{this.saveFormData('username',event)}} name="username" placeholder="用户名" />
                            <input  onChange={(event)=>{this.saveFormData('password',event)}} type="password" name="password" placeholder="密码"/>
                            <br/>
                            <button>登录</button>   
                        </form>
                        
                    </div>
                )
            }
        }
       
        // 2.渲染组件到页面
        ReactDOM.render(<Login/>,document.getElementById('app'))
```
##### 组件生命周期
**理解：**
1.组件对象从创建到死亡它会经理特定阶段。
2.React组件对象包含一系列钩子函数(生命周期回调函数)，在特定的时刻调用。
3.我们在定义组件时，在特点的生命周期回调函数中做特定的工作。

**生命周期的三个阶段：**（旧）
初始化阶段：由ReactDOM.render()触发---除此渲染
1.constructor()
2.componentWillMount()
3.render()
4.componentDidMount()

更新阶段：有组件内部this.setState()或父组件重新render触发
1.componentWillReceiveProps——//接收新的props，第一次不触发，以后接收props才算
2.shouldComponentUpdate——setState()
3.componentWillUpdate——forceUpdate()
4.render
5.componentDidUpdate


卸载组件：由ReactDOM.unmountComponentAtNode()触发
1.componentWillUnmount (){}

```react
////////////////初始化////////////////////////////////////////////////
//1.构造函数
constructor(){}
//2.生命周期-将要挂载
componentWillMount(){}
//3.生命周期-初始化渲染、状态更新之后
render(){}
//4.生命周期-组件挂载完毕
componentDidMount (){}
////////////////更新//////////////////////////////////////////////////
//1.由this.setState 或父组件render触发，
componentWillReceiveProps()
//2.控制组件更新的“阀门”
shouldComponentUpdate(){}
//3.生命周期-将要更新
componentWillUpdate(){}
//4.生命周期-渲染
render(){}
//5.生命周期-更新完毕
componentDidUpdate(){}

////////////////卸载//////////////////////////////////////////////////
//触发卸载组件
ReactDOM.unmountComponentAtNode(document.getElementById('app'))
//生命周期-组件将要卸载
componentWillUnmount (){}

////////////////挂载组件///////////////////////////////////////////////
ReactDOM.render(<Life/>,document.getElementById('app'))

例子：

        class A extends React.Component{
            state = {carName:'奥迪'}

            updateCar = ()=>{
                this.setState({carName:'奔驰'})
            }
            render(){
                return (
                    <div>
                        <h2>A</h2>
                        <B carname={this.state.carName}/>
                        <button onClick={this.updateCar}>update</button>
                    </div>
                )
            }
        }

        class B extends React.Component{
        
            // 写构造函数，必须要写super
            constructor(props){
                super(props)
                console.log('------------------------')
            }
            //更新props，第一次不触发该生命周期，之后修改props触发该生命周期
            //组件将要接收新的props
            componentWillReceiveProps(){
                console.log('------------------------')
                console.log('1.B-componentWillReceiveProps')
                console.log('B-this.props:',this.props)
            }
            //控制组件更新的“阀门”是否要更新
            shouldComponentUpdate(){
                console.log('2.B-shouldComponentUpdate')
                return true
            }
            //组件将要更新
            componentWillUpdate(){
                console.log('3.B-componentWillUpdate')
            }
            //4 .render(){}
            //组件更新完毕
            componentDidUpdate(){
                console.log('5.B-componentDidUpdate')
                console.log('------------------------')
            }

            //将要挂载
            componentWillMount(){
                console.log('1.B-componentWillMount')
            }
            //2 .render(){}
            //挂载完毕
            componentDidMount(){
                console.log('3.B-componentDidMount')
                console.log('------------------------')
            }

            render(){
                console.log('B-render')
                return (
                    
                    <div>
                        <h2>B</h2>
                        <h3>{this.props.carname}</h3>
                    </div>
                )
            }
        }

        ReactDOM.render(<A />,document.getElementById('app'))
```

注意：18.x 新版生命周期
UNSAFE_componentWillReceiveProps
UNSAFE_componentWillUpdate
UNSAFE_componentWillUpdate

**生命周期的三个阶段：**（新）

1.初始化阶段：由ReactDOM.render()触发——初次渲染
	1).constructor()
	2).getDerivedStateFromProps()
		getDerivedStateFromProps会在调用render方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新state，如果返回null则不更新任何内容。
		此方法适用于罕见案例，即state的值在任何时候都取决于props，
	3).render()
	4).componentDidMount()
2.更新阶段：由组件内部 this.setState()或父组件重新render触发
	1).getDerivedStateFromProps
	2).shouldComponentUpdate()
	3).render()
	4).getSnapshotBeforeUpdate
	5).componentDidUpdate()
3.卸载组件：由ReactDOM.unmountComponentAtNode()触发
	1).componentWillUnmount()
** 重要生命周期**
1.render：初始化渲染或更新渲染调用
2.componentDidMount：开启监听，发送ajax请求
3.componentWillUnmount：做一些守卫工作，如：清理定时器

**即将废弃的钩子**
1.componentWillMount
2.componentWillReceiveProps
3.componentWillUpdate

现在使用会出现警告，下一个办不办需要加上 UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用
```react
           state = {
                        list:[],
                        time:''
                    }
           
            start = ()=>{
                console.log('start')
                clearInterval(this.state.time)
                let time = setInterval(()=>{
                    const {list} = this.state

                    const news = 'news'+(list.length+1)
                    //更新数据
                    this.setState({list:[news,...list]})
                    console.log(this.state.list)
                },1000)
                this.setState({time:time})
            }
            stop = ()=>{
                console.log('stop')
                clearInterval(this.state.time)
            }
            // 挂载完成
            componentDidMount(){
                console.log('componentDidMount')
                this.start()
            }
            
            //即state的值任何时候都取决于props，name可以使用
            static getDerivedStateFromProps(props,state){
                console.log('getDerivedStateFromProps',props,state)
                //如果返回state的对象，返回的state值，不能更新
                //如果返回null 则不更新任何内容
                return {carName:'大众'}//||null
            }
			
            //更新之前传数据给 componentDidUpdate
            getSnapshotBeforeUpdate(){
                console.log(this.refs.list.scrollHeight)
                return this.refs.list.scrollHeight
            }

            //更新完
            componentDidUpdate(prevProps,prevState,height){
               console.log('----------')
               console.log(prevProps)
               console.log(prevState)
               console.log(height)
               console.log('----------')

               this.refs.list.scrollTop += this.refs.list.scrollHeight -height
               console.log(this.refs.list.scrollTop)
            }

            render(){
                return (
                    <div>
                        <ul  className="list" ref="list">
                           {
                               this.state.list.map((n,index)=>{
                                   return <li key={index}>{n}</li>
                               })
                           }
                        </ul>
                        <button onClick={this.start}>start</button>
                        <button onClick={this.stop}>stop</button>
                    </div>
                )
            }
        }

        ReactDOM.render(<List/>,document.getElementById('app'))

```

##### 虚拟DOM与DOM Diff算法
###### key的作用
1.虚拟DOM中key的作用
	1).简单的说：key是虚拟DOM对象的标识，在更新显示时起着极其重要的作用。
	2).详细的说：当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】，随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较
		比较规则
			a.旧虚拟DOM中找到了与新虚拟DOM相同的key
				若虚拟DOM中内容没变，直接使用之前的真实DOM
				若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM
			b.旧虚拟DOM中未找到与新虚拟DOM相同的key
				根据数据创建新的真实DOM，随后渲染到页面
2.用index作为key 可能会引发的问题
	1).若对数据进行：逆序添加、逆序删除等破坏顺序操作：
		会产生没有必要的真实DOM更新===>界面效果没问题，但效率低
	2).如果结构中还包含输入类的DOM：
		会产生错误DOM更新===>界面有问题
	3).注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
		仅用于渲染列表用于展示，使用index作为key是没有问题的。

3.开发中如何选择key?
	1).最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值。
	2).如果确定只是简单的展示数据，用index也是可以的。





#### 3.Rect 应用
##### 脚手架
1.用来帮助程序员快速创建一个基于xx库的模板项目
	包含了所有需要的配置(语法检查、jsx编译、devServer...)
	下载好了所有相关的依赖
	可以直接运行一个简单效果
2.react提供了一个用于创建react项目的脚手架库：create-react-app
3.项目的整体技术架构为：react+webpack+es6+eslint
4.使用脚手架开发的项目特点：模块化，组件化，工程化

##### 创建&启动
```react
#全局安装
$ npm install crate-react-app
#切换到目录
$ create-react-app hello-react
#进入项目文件夹
$ cd ./hello-react
#启动项目
$ npm start
$ npm run start

# 显示webpack 配置文件
$ npm run eject

```
##### 文件介绍
```react
public——静态资源文件
	index.html 		主页面
	mainifest.json	应用加壳配置文件
	robots.txt 		爬虫协议文件
src
	App.js			APP组件
	App.css 		APP组件样式
	App.test.js 	给APP组件做测试
	index.css 		样式
	App.css 		APP组件样式
	reportWebVitals.js 	页面性能分析文件(需要web-vitals库的支持)
	setupTests.js 	组件单元测试的文件(需要jest-dom库的支持)

```

##### 模块化
```react
import React,{Component} from "react";
//直接引入样式
// import './index.css';

//样式模块化
import WelcomeCss from './index.module.css'

export default class Welcome extends Component{
    render(){
        return (
            <div className={WelcomeCss.welcome}>
                <h2>Welcome</h2>
            </div>
        )
    }
}

```
##### TodoList
#安装唯一id插件
npm install nanoid
#安装prop-types，对接收的props 进行类型、必要性的限制
npm install prop-types

1.拆分组件、实现静态组件，注意：className、style的写法
2.动态初始化列表，如何确定将数据放在哪个组件的state中？
	1).某个组件使用：放在自身的state中
	2).某些组件使用：放在它们共同的父组件state中(状态提升)
3.关于父子之间通信：
	1).父组件给子组件传递数据：通过props传递
	2).子组件给父组件传递数据：通过props传递，要求父组件提前给子传递一个函数
4.注意defaultCheck 和 checked的区别，类似的还有：defaultValue 和 value
5.状态在哪里，操作状态的方法就在哪里

```react
export default class Main extends Component{
    //状态在哪里，操作状态的方法就在哪里

    state = {todos:[
        {id: nanoid(),name:'手机',done:true},
        {id: nanoid(),name:'电脑',done:false},
        {id: nanoid(),name:'平板',done:true},
        {id: nanoid(),name:'游戏机',done:false}
    ]}
    
    // 添加
    addTodo = (todoObj)=>{//函数体
        console.log('addTodo',todoObj)
        this.setState({todos:[todoObj,...this.state.todos]})
    }
    // 修改
    updateTodo = (id,done)=>{
        const {todos} = this.state
        let newTodos = todos.map(todo=>{
            if(todo.id===id) return {...todo,done}
            else return todo
        })
        this.setState({todos:newTodos})
        console.log('updateTodo:',id,done)
    }
    // 删除
    delTodo = (id)=>{
        const {todos} = this.state
        let newTodos = todos.filter(todo=>{
            if(todo.id!==id) return todo
        })
        this.setState({todos:newTodos}) 
    }
    // 全选/反选
    checkAllTodo = (done)=>{
        const {todos} = this.state
        let newTodos =todos.map((todo)=>{
            return {...todo,done:done}
        })
        this.setState({todos:newTodos}) 
    }
    // 清除所有
    clearAllDone = ()=>{
        const {todos} = this.state
        let newTodos =todos.filter((todo)=>{
            return todo.done === false
        })
        this.setState({todos:newTodos}) 
    }
    
    render(){
        return (
            <div>
                <div className='header'><Hello /></div>
                <div className={MainCss.main}>
                    <Welcome todos={this.state.todos} addTodo={this.addTodo} updateTodo={this.updateTodo} delTodo={this.delTodo}/></div>
                <div className='footer'><Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/></div>
            </div>
        )
    }
}
import PropTypes from 'prop-types'

export default class Welcome extends Component{
    state = {keyword:''}
    //对接收的props 进行类型、必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired,
        updateTodo:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired,
        delTodo:PropTypes.func.isRequired
    }

  
}

```



##### 组件化流程

功能界面的组件化流程

1.拆分组件：拆分界面，抽取组件
2.实现静态组件：使用组件实现静态页面效果
3.实现动态组件
	1).动态显示初始化数据
		数据类型
		数据名称
		保持在哪个组件
	2).交互(从绑定事件监听开始)


#### 4.React ajax
**理解**
1.React本身只关注于界面，并不包含发送ajax请求的代码
2.前端应用需要通过ajax请求与后台进行交互(Json数据)
3.react医用中需要集成第三方库 或自己封装
**常用的ajax请求库**
1.JQuery：比较重，如果需要另外引入，不建议使用
2.axios：轻量级，建议使用
	1).封装XmlHttpRequest对象的ajax
	2).promise风格
	3).可以用着浏览器端和node服务器端
##### 配置代理
**方法一**
在package.json中追加配置
```react
"proxy":"http://localhost:5000"
```
1.优点：配置简单，前端请求资源时可以不加任何前缀
2.缺点：不能配置多个代理。
3.工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000(有限匹配前端资源)
**方法二**
1.创建代理配置文件
	在src下创建文件：src/setupProxy.js
2.编写setupProxy.js 配置具体代理规则
```react
# 安装代理中间件  
# 文档地址：https://www.npmjs.com/package/http-proxy-middleware
$ npm instal http-proxy-middleware

#src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app){
    app.use(
        createProxyMiddleware('/api',{//api是需要转发的请求(所有带有/api前缀的请求都会转发给5000)
            target:'http://vue.test',//配置转发目标地址(能返回数据的服务器地址)
            changeOrigin:true,//控制服务器接收到的请求头中host字段的值
            /*
                changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
                changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
                changeOrigin默认值为false，但我们一般将changeOrigin值设为true
            */
            pathRewrite:{'^/api':''}//去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        })
    )
}
```
1.优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2.去电：配置繁琐，前端请求资源时必须加前缀。

##### axios
```
#安装axios 插件
npm install axios

#配置代理，解决跨域 package.json 
"proxy":"http://vue.test"

# 重启脚手架

请求例子：
getList = ()=>{
        axios.get('http://localhost:3000/api.html').then(
            response=>{
                console.log('success',response.data)
            },
            error=>{
                console.log('error',error.message)
            }
        )
    }
```
##### 搜索案例
1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
2.ES6小知识：结构赋值+重命名
```
let obj = {a:{b:{c:1}}}
let {a} = obj //传统结构赋值
let {a:{b}} = obj//联系结构赋值
let {a:{b:{c:data}}} = obj//联系结构赋值+重命名
console.log(data)
```
3.消息定义与发布机制
	1.先定义，再发布(理解：有一种隔空兑换的感觉)
	2.适用于任意组件间通信
	3.要在组件的componentWillUnmount中取消订阅
4.fetch发送请求(关注分离的设计思想)

###### 消息订阅与发布
1.安装 ：npm install pubsub-js
2.使用：sendmsg——消息名称
	1).import PubSub from 'pubsub-js'//引入
	2).let uid = PubSub.subscribe(sendmsg,function(){})//订阅
	3).PubSub.publish(sendmsg,data)//发布
```react
import {Component} from 'react'
import PubSub from 'pubsub-js'
import Demo from '../Demo'
const sendmsg = 'sendmsg'
export default class Message extends Component{
	//状态
    state = {name:'',age:''}
    //订阅消息
    static sendmsg = 'sendmsg'
    
    // 挂载完成-订阅
    componentDidMount(){
        //先取消订阅，以防止重复订阅
        PubSub.unsubscribe(sendmsg)
        let uid = PubSub.subscribe(sendmsg,this.publishMessage)
        console.log('uid:',uid)
    }
    //发布消息
    publishMessage = (_,data)=>{
        console.log('publishMessage',data)
        this.setState({...data})
    }

    //将要取消挂载之前，销毁订阅
    componentWillUnmount(){
        console.log('componentWillUnmount')
        PubSub.unsubscribe(sendmsg)
    }
    
    render(){
        return (
            <div>
                 <h2>名称：{this.state.name}</h2>
                 <h2>年龄：{this.state.age}</h2>
                <h2><Demo/></h2>
                
            </div>
        )
    }
}

import {Component} from 'react'
import PubSub from 'pubsub-js'

import Message from '../Message'

export default class Demo extends Component{
    sendMessage = ()=>{
        console.log('sendMessage')
        PubSub.publish(Message.sendmsg,{name:'halo',age:28})
    }
    render(){
        return (
            <div>
               <button onClick={this.sendMessage}>发布消息</button>
            </div>
        )
    }
}

```
###### fetch 发送请求
const xhr = new XMLHttpRequest()

Jquery、axios 前端都封装了xhr

文档：
	1.https://github.github.io/fetch/
	2.https://segmentfault.com/a/1190000003810652
特点：
	1.fetch:原生函数，不再使用XMLHttpRequest对象提交ajax请求
	2.老板浏览器可能不支持
相关API：
```fetch
#GET请求
sendWeb = (value)=>{
        fetch('https://api.github.com/search/users?q='+value).then(
            response=>{
                console.log('success')
                return response.json()
            }
            // ,error=>{
            //     console.log('eroor',error)
            //     return new Promise(()=>{})
            // }
        ).then(
            response=>{
                console.log('success-data',response)
            }
        ).catch(
            (error)=>{
                console.log('eroor',error)
            }
        )
    }
    //优化
     webFetch = async (value)=>{
        try{
            const response = await fetch('https://api.github.com/search/users?q='+value)
            const data = await response.json()
            console.log(data)
        }catch(error){
            console.log('请求出错',error)
        }    
    }
```

#### 5.React-Router
##### 相关理解
1.相关理解
	1).单页Web应用(single page web application,SPA)
	2).整个引用只有一个完整的页面。
	3).点击页面中的链接不会刷新页面，只会做页面的局部更新。
	4).数据都需要通过ajax请求获取，并在前端异步展现。
2.路由理解
	什么是路由
		1).一个路由就是一个映射关系(key:value)
		2).key为路径 value 可能是function 或 component
	路由分类
		1).后端路由：
			1.理解：value 是function，用来处理客户端提交的请求。
			2.注册路由：router.get(path,function(req,res))
			3.工作过程：当node接收到一个请求时，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回向响应数据
		2).前端路由：
			1.浏览器端路由,value是component，用于展示页面内容。
			2.注册路由:<Route path="/test" component={Test}>
			3.工作过程:当浏览器的path变为/test时，当前路由组件就会变为Test组件
3.react-router的理解
	1).react的一个插件库
	2).专门用来实现一个SPA应用
	3).基于react的项目基本都会用到此库

```javascript
<script src="https://cdn.bootcss.com/history/4.7.2/history.js"></script>
<script type="text/javascript">	
            //方法一，直接使用H5推出的history身上的API
            let history = History.createBrowserHistory()
            //方法二，hash值(锚点)
            
            //传入浏览器记录
            function push(path){
                history.push(path)
                console.log('push:',path)
                return false
            }
            //替换浏览记录
            function replace(path){
                let ret = history.replace(path)
                console.log('replace:',ret)
            }
            //回退
            function back(){
                let ret = history.goBack()
                console.log('back:',ret)
            }
            //前进
            function forward(){
                history.goForward()
            }

            history.listen((location)=>{
                console.log('listen:',location)
            })
</script>            
```
##### React-router-dom API
**安装软件**
```react
#安装5版本
npm install react-router-dom@5
#安装6版本
npm install react-router-dom@6
#安装最新版本
npm install react-router-dom@next
```
**注意：**
1.BrowserRouter组件最好放在最顶层所有组件之外，这样能确保内部组件使用Link做路由跳转时不出错
2.一般组件放在 src/components 里
3.路由组件放在 src/pages里

**Link 组件**

```react
{/* 在React中靠路由连接实现切换组件--编写路由链接 */}
<Link to="/search">搜索</Link>
<Link to="/main">Main</Link>
<Link to="/message">订阅消息</Link>
```
**NavLink 组件**
1.NavLink组件和Link组件的功能是一致的，区别在于可以判断其to属性是否是当前匹配到的路由
2.NavLink组件的style或className可以接收一个函数，函数接收一个isActive参数，可根据该参数调整样式
3.NavLink组件，默认的活动标签是：active，给active写样式，一定要写 !important,否则不起作用
```react
<style>
.active {
    background-color:red !important;
    color: bisque !important;
}
</style>
{/* react-router-dom@5 写法 */}
<NavLink activeClassName="active" to="/search">搜索</NavLink>
{/* react-router-dom@6 不支持 activeClassName 写法 */}
<NavLink className={({ isActive }) => "defaultcss " + (isActive ? MenuCss.active : "")} to="/search">搜索</NavLink>
```
**封装NAVLink**
1.NavLink可以额实现路由链接的高亮，react5版本通过activeClassName指定样式名
2.标签体内容是一个特殊的标签属性
3.通过this.props.children可以获取组件标签体内容

```react
{/* 封装MyNavLink */}
{/* 标签体：写法一 */}
<MyNavLink to="/search" children="搜索"/>
{/* 标签体：写法二 */}
<MyNavLink to="/main">Main</MyNavLink>
<MyNavLink to="/message">订阅消息</MyNavLink>

///////////////////////MyNavLink.jsx///////////////////////
import {Component} from 'react'
import {NavLink} from 'react-router-dom'
import MenuCss from '../Menu/index.module.css'

export default class MyNavLink extends Component{
    render(){
        console.log(this)
        //const {children} = this.props
        return (
            <NavLink className={({ isActive }) => " " + (isActive ? MenuCss.active : "")} {...this.props} />
        )
    }
}
```

**解决样式丢失**
1.引入样式时不写 ./ 写 / 
2.引入样式时不写 ./ 写 %PUBLIC_URL% 
3.使用HashRouter

**嵌套路由**
1.注册子路由时要写上父路由的path值
2.路由的匹配时按照注册路由的顺序进行的

**向路由组件传递参数**
**params**
1.路由链接(携带参数)： <Link to={`/message/news/detail/${newsObj.id}`}> xxx</Link>
2.注册路由(声明接收)：<Route path="/message/news/detail/:id/:name" element={<Detail/>}/>
3.接收参数：const {params} = this.props.match

**search**
1.路由链接(携带参数)： <Link to={`/message/news/detail/?id=${newsObj.id}`}>xxx</Link>
2.注册路由(无需证明，正常注册即可)：<Route path="/message/news/detail/" element={<Detail/>}/>
3.接收参数：const {search} = this.props.location
备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
```react
#安装querystring
$ npm install querystring
//导入
import qs from 'querystring'
const {search} = this.props.location
const {id,name} = qs.parse(search.slice(1))
```
**state**
1.路由链接(携带参数)： <Link to={{path:'/message/news/detail',state:{id:newsObj.id}}}> xxx</Link>
2.注册路由(无需证明，正常注册即可)：<Route path="/message/news/detail/" element={<Detail/>}/>
3.接收参数： const {state} = this.props.location
备注：刷新也可保留住参数，存在历史记录history里，只要不清空历史记录就可用

**路由跳转**
**push**
**replace**
<Link replace ></Link> 或 <NavLink replace={true}></NavLink>

**编程式路由**
```react
 	//replace 跳转
    replaceShow = (id,name)=>{
        // return (event)=>{
            console.log(this.props.history)
            // replace 跳转+携带params参数
            // this.props.history.replace(`/message/news/detail/${id}/${name}`)
            // replace 跳转+携带search参数
            // this.props.history.replace(`/message/news/detail/?id=${id}&nae=${name}`)
            // replace 跳转+携带state参数
            // this.props.history.replace('/message/news/detail/',{id,name})
        // }
    }

    //push 跳转
    pushShow = (id,name)=>{
        return ()=>{
            console.log(this.props.history)  
            // push 跳转+携带params参数
            // this.props.history.push(`/message/news/detail/${id}/${name}`)
            // push 跳转+携带search参数
            // this.props.history.push(`/message/news/detail/?id=${id}&nae=${name}`)
            // push 跳转+携带state参数
            // this.props.history.push('/message/news/detail/',{id,name})  
        }
    }
    //返回
    goback = ()=>{
        this.props.history.goBack()
    }
    // 前进
    goforward = ()=>{
        this.props.history.goForward()
    }
    //前进或后退几步 -后退，+前进
    go = (num)=>{
        this.props.history.go(num)
    }
    // 注意：路由组件才有 props.history
```

**BrowserRouter 与 HashRouter的区别**
1.底层原理不一样：
	1).BrowserRouter 使用的是H5的history API，不兼容IE9及以下版本。
	2).HashRouter 使用的是URL的哈希值。
2.path表现形式不一样
	1).BrowserRouter 的路径中没有#,例如:localhost:3000/demo。
	2).HashRouter 的路径包含#，例如:localhost:3000/#/demo 。
3.刷新后对路由state参数的影响
	1).BrowserRouter 没有任何影响，因为state保持在history对象中。
	2).HashRouter 刷新后会导致路由state参数的丢失！！！
4.备注：HashRouter 可以用于解决一些路径错误相关的问题

###### React Router Dom 5

**路由的基本使用**
1.明确好界面中的导航区、展示区 
2.导航区的a标签改为Link 标签 <Link to="/xxx">Demo</Link>
3.展示区写Rote标签进行路径的匹配 <Route path="/xxx" component={Demo} /> 
4.<App />的最外侧包裹了一个 <BrowserRouter /> 或 <HashRouter /> 。

**Switch 组件**
1.通常情况下，path 和 component 是一一对应的关系
2.Switch匹配到第一个路由就不会继续匹配了 ，可以提高路由匹配效率(单一匹配)
3.react-router-dom@6 已经移除了Switch方法，用Routes 代替
```
<Switch>{
    <Route path="/search" component={Search}/>
    <Route path="/search" component={SearchName}/>
</Switch>
```

**路由的模糊匹配与严格匹配**
1.默认使用的是模糊匹配：输入的路径必须包含要匹配的路径，且顺序要一致
2.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
3.开启严格匹配：react-router-dom@6 中 exact 无效，不支持
```react
    <Route exact={true} path="/about" component={About}/>
    {/* or 简写*/}
    <Route exact  path="/about" component={About}/>
```

**Redirect 使用**
1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect 指定的路由
2..react-router-dom@6 已经移除了Redirect方法，用Navigate 代替
```
<Switch>{
    <Route path="/search" component={Search}/>
    <Route path="/search" component={SearchName}/>
    
    {/* 重定向 react-router-dom@5 */}
    <Redirect to="/search" /> 
    {/* 重定向 react-router-dom@6 */}
    <Route path="*" element={<Navigate to="/search" replace />}></Route> 
</Switch>
```

**路由的写法**
```react
//step1.在index.js 中包
import { BrowserRouter } from 'react-router-dom';
<BrowserRouter>
	<React.StrictMode>
		<App />
	</React.StrictMode>
</BrowserRouter>;

//step2.在React中靠路由连接实现切换组件--编写路由链接 
import {Link} from 'react-router-dom'
<Link to="/search">搜索</Link>
<Link to="/demo">Demo</Link>
<Link to="/message">订阅消息</Link>

{/* react-router-dom@5 写法 */}
<NavLink activeClassName="active" to="/search">搜索</NavLink>
<NavLink activeClassName="active" to="/main">Main</NavLink>
<NavLink activeClassName="active"to="/message">订阅消息</NavLink>

//step3.注册路由 right-main
import {Route, Routes} from 'react-router-dom'
//导入组件
import Search from '../Search'
import Demo from '../Demo'
import Message from '../Message'

{/* react-router-dom@5 写法*/}
<Switch>{/*Switch匹配到第一个路由就不会继续匹配了 */}
    <Route path="/search" component={Search}/>
    <Route path="/main" component={Main}/>
    <Route path="/message" component={Message}/>
</Switch>
```

###### React Router Dom 6

[官网](https://reactrouter.com/)

**概述**
1.React Router 以三个不同的包发布到npm上，它们分别为：
	1).react-router:路由的核心库，提供了很多的：组件、钩子。
	2).react-router-dom:包含react-router所有内容，并添加一些专门用于DOM的组件，例如<BrowserRouter>等
	3).react-router-native:包含react-router所有内容，并添加一些专门用于ReactNative 的API，例如<NativeRouter>等
2.React Router5.x版本相比，改变了什么？
	1).内置组件的变化：移除<Switch/>,新增<Router/>等
	2).语法的变化：component={About} 变为 element={<About/>}等
	3).新增多个hook:useParams、useNavigate、useMatch等。
	4).官方明确推荐函数式组件了！


```react
//step1.在index.js 中包
import { BrowserRouter } from 'react-router-dom';
<BrowserRouter>
	<React.StrictMode>
		<App />
	</React.StrictMode>
</BrowserRouter>;

//step2.在React中靠路由连接实现切换组件--编写路由链接 
import {Link} from 'react-router-dom'
<Link to="/search">搜索</Link>
<Link to="/demo">Demo</Link>
<Link to="/message">订阅消息</Link>

{/* react-router-dom@6 不支持 activeClassName 写法 */}
<NavLink className={({ isActive }) => "defaultcss " + (isActive ? MenuCss.active : "")} to="/search">搜索</NavLink>
<NavLink className={({ isActive }) => "defaultcss " + (isActive ? MenuCss.active : "")} to="/main">Main</NavLink>
<NavLink className={({ isActive }) => "defaultcss " + (isActive ? MenuCss.active : "")} to="/message">订阅消息</NavLink>

//step3.注册路由 right-main
import {Route, Routes} from 'react-router-dom'
//导入组件
import Search from '../Search'
import Demo from '../Demo'
import Message from '../Message'

//注意：5和6的最大区别：
    //1.componet 改为 element 
    //2.{Search} 改为 {<Search/>}
    //3.Switch 改为了 Routes
	//4.Redirect 改为了Navigate

<Routes>
    <Route path="/search" element={<Search/>}/>
    <Route path="/demo" element={<Demo/>}/>
    <Route path="/message" element={<Message/>}/>
    {/* 重定向 react-router-dom@6 */}
    <Route path="*" element={<Navigate to="/search" replace />}></Route>
</Routes>
```

**Component**
1.<BrowserRouter/>
	1).说明：<BrowserRouter>用于包裹整个应用
	2).示例代码
```react
// 引入react核心库
import React from 'react';
// 引入react-dom库
// import ReactDOM from 'react-dom';//旧
import ReactDOM from 'react-dom/client';//新
import { BrowserRouter } from 'react-router-dom';
// 渲染App组件到页面 -旧v5
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 渲染App组件到页面 -新v6
const element = <BrowserRouter><React.StrictMode><App /></React.StrictMode></BrowserRouter>;
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(element);
```
2.<HashRouter/>
	1).作用与<BrowserRouter>一样，但是<HashRouter>修改的是地址栏的hash值
	2).备注6.x版本中<HashRouter>、<BrowserRouter>的用法与5.x相同
3.<Routers/>与<Route/>
	1).v6版本中移除了先前的<Switch>,引入了新的替代者：<Routes>.
	2).<Routes>和<Route>要配合使用，且必须要用 <Routes>包裹<Route>.
	3).<Route>相当于一个if语句，如果其路径与当前URL匹配，则呈现其对应的组件.
	4).<Route caseSensitive>属性用于指定：匹配时是否区分大小写(默认为false).
	5).当URL发生变化时，<Routes>都会查看其所有子<Route>元素以找到最佳匹配并呈现组件。
	6).<Route>也可以嵌套使用，且可配合useRoutes() 配置路由表,但需要通过<Outlet>组件来渲染其子路由
	7).示例代码
```react
<Routes>
	path属性用于定义路径，element属性用于定义当前路径所对应的组件
	<Route path="/message/news" element={<News />}/>
 	<Route path="/message/demo" element={<Demo {...this.state}/>}/>
 	
 	用于定义嵌套路由，home是一级路由，对应的路径是/home
 	<Route path="home" element={<Home/>}>
 		test1和test2是二级路由，对应的路径是/home/test1 或 /home/test2
 		<Route path="test1" element={<Test1 />}/>
 		<Route paht="test2" element={<Test2 />}/>
 	</Route>
 	
 	Route 也可以不写element属性，这时就是用来展示嵌套的路由，所对应的路径就是 /user/xxx
 	<Route path="users">
 		<Route path="xxx" element={<Demo />}/>
 	</Route>
 	
</Routes>
```

4.<Link />
	1).作用：修改URL，且不发送网络请求(路由链接)
	2).注意：外侧需要用<BrowserRouter>或<HashRouter>包裹
	3).示例代码
```react
import {Link} from 'react-router-dom'
function Demo(){
	return (
		<div>
			<Link to="/path"></Link>
		</div>
	)
}
```
5.<NavLink />
	1.作用：与<Link>组件类似，且可实现导航的“高亮”效果
	2.示例代码：
```react
//注意：NavLink默认类名是active，下面是指自定义的class
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component{
    isactive = ({isActive})=>{
        return "defaultcss "+(isActive?MenuCss.active:'')
    }
    render(){
        return (
            // 三目运算符
            // <NavLink className={({ isActive }) => " " + (isActive ? MenuCss.active : "")} {...this.props} />
            // 函数写法
            <NavLink className={this.isactive} end {...this.props} />
        )
    }
}

//默认情况下，主组件的子组件匹配成功，主组件的导航也会高亮
//当NavLink 上添加了end属性后，若主组件匹配成功，则主组件的导航没有高亮效果


```
6.<Navigate />
	1).作用：只要<Navigate>组件被渲染，就会修改路径，切换视图
	2).replace 属性用于控制跳转模式(push 或replace，默认是push)
	3)示例代码
```
import {Navigate} from 'react-router-dom'
{/*跳转*/}
<Navigate to="/message/news" replace />
{/*重定向*/}
<Route path="*" element={<Navigate to="/message/news" replace />}></Route>
```
7.<Outlet />
	1).当<Route>产生嵌套时，渲染其对应的后续子路由
	2).示例代码
```react
//根据路由表生成对应的路由规则 routes 路由表
import { Navigate } from "react-router-dom"

//引入组件
import News from "../components/News"
import Demo from "../components/Demo"
import Search from "../components/Search"
import Message from "../components/Message"
import Main from '../components/Main'
import Detail from '../components/Detail'

export default [
    {
        path:'/search',
        element:<Search/>
    },
    {
        path:'/main',
        element:<Main/>
    },
    {
        path:'/message',
        element:<Message />,
        children:[
            {
                path:'news',
                element:<News />,
                children:[
                    {
                        // path:'detail/:id/:name',//params传参
                        path:'detail',//search传参|state传参，不需要占位
                        element:<Detail/>
                    }
                ]
            },
            {
                path:'demo',
                element:<Demo/>
            }
        ]
    },
    {
        path:'/',
        element:<Navigate to="/search"/>
    }
]

//调用
import {Outlet} from 'react-router-dom'
export default function Message(){
	return (
		<div>
			{/* 嵌套路由-指定路由组件呈现的位置 */}
            <Outlet/>
		</div>
	)
}

```

**Hooks**
1.useRoutes()
	1).根据路由表，动态创建<Routes>和<Route>.
	2).示例代码
```react
//routes 是路由表
import routes from './routes'

export default function App(){
//根据路由表生成对应的路由规则
  const element = useRoutes(routes)
  
  return (
    <div>
        {/* 注册路由 */}
        {element}
    </div>
  )
}

```
2.useNavigate()
	1).作用：返回一个函数用来实现编程式导航
	2)示例代码：
```
import {Component} from 'react'
import {useNavigate} from 'react-router-dom'

export default function News(){
	const navigate = useNavigate()

    function replaceShow(id,name){
        // replace 跳转+携带state参数 react-router-dom@6
        navigate('detail',{
            replace:true,
            state:{
                id:id,
                name:name
            }
        })
        console.log('replaceShow')
    }

    function pushShow(id,name){
            // push 跳转+携带params参数 react-router-dom@6
            navigate('detail',{
                replace:false,
                state:{
                    id:id,
                    name:name
                }
            })
            console.log('pushShow')
    }

     //返回
    function functiongoback(){
        navigate(-1)
    }
    // 前进
    function goforward(){
        navigate(1)
    }
    //前进或后退几步 -后退，+前进
    function go(num){
        navigate(num)
    }
	
	
	return (
		<div>
			{/* 编程式路由 */}
	<button onClick={()=>replaceShow(newsObj.id,newsObj.name)}>replace</button>
     <button onClick={()=>pushShow(newsObj.id,newsObj.name)}>push</button>
		</div>
	)
}
```
3.useParams()
	1).作用：返回当前匹配路由的params参数，类似于5.x中的match.params
	2):示例代码
```
import { useParams } from 'react-router-dom'

{/* 向路由组件传递params参数 */}
{/* react-router-dom 5 */}
{/* <Link replace to={`/message/news/detail/${newsObj.id}/${newsObj.name}`}> {newsObj.id}——{newsObj.name}</Link> */}
{/* react-router-dom 6 */}
{/* <Link replace to={`detail/${newsObj.id}/${newsObj.name}`}> {newsObj.id}——{newsObj.name}</Link> */}


// 接收params参数
// const {params} = useParams()


```
4.useSearchParams()
	1).作用：用于读取和修改当前位置的URL中的查询字符串。
	2).返回一个包含两个值的数组，内容分别为：当前的search参数，更新search的参数。
```react
import { useSearchParams } from 'react-router-dom'
{/* 向路由组件传递search参数 */}
{/* react-router-dom 5 */}
{/* <Link to={`/message/news/detail/?id=${newsObj.id}&name=${newsObj.name}`}> {newsObj.id}——{newsObj.name}</Link> */}
{/* react-router-dom 6 */}
{/* <Link to={`detail/?id=${newsObj.id}&name=${newsObj.name}`}> {newsObj.id}——{newsObj.name}</Link> */}

 // 接收search参数
 // const [search,setSearch] = useSearchParams()
 // const params = {id:search.get('id'),name:search.get('name')}
 // console.log('useLocation',useLocation())
 
{/* <button onClick={()=>{setSearch('id=1&name=123')}}>更新search参数</button> */}
```
5.useLocation()
	1).作用：获取当前location信息，对标5.x中的路由组件的location属性。
```
import { useLocation } from 'react-router-dom'

{/* 向路由组件传递state参数 */}
{/* react-router-dom 5 */}
{/* <Link to={{path:'/message/news/detail',state:{id:newsObj.id,name:newsObj.name}}}> {newsObj.id}——{newsObj.name}</Link> */}
{/* react-router-dom 6 */}
{/* <Link to='detail' state={{id:newsObj.id,name:newsObj.name}}> {newsObj.id}——{newsObj.name}</Link> */}

// 接收state参数
const {state} = useLocation()
const params = state
console.log('params',params)
```
6.useMatch()
	1).作用：返回当前匹配信息，对标5.x中的路由组件的match属性
```react
	import { useMatch } from 'react-router-dom'
	const match = useMatch('/message/news/detail/:id/:name')
// console.log('useMatch',match) //输出match对象
{
	params:{},
	pathname:"",
	pathnameBase:'',
	pattern:{
		path:'',
		caseSensitive:false,
		end:false
	}
}
```
7.useInRouteContext()
	作用：如果组件在<Router>的上下文呈现，则useInRouteContext 钩子返回true，否则返回false
8.useNavigationType()
	1).作用：返回当前的导航类型(用户是如何来到当前页面的)
	2).返回值：POP、PUSH、REPLACE
	3).备注：POP是指在浏览器中直接打开了这个路由组件（刷新页面）
9.useOutlet()
	1).作用：用来呈现当前组件中要渲染的嵌套路由
	2).示例代码
```
	const result = unsOutlet()
	console.log(result)
	//如果嵌套路由没有挂载，则result 为 null
	//如果嵌套路由已经挂载，则展示嵌套的路由对象
```
10.useResolvedPath()
	1).作用：给定一个URL值，解析其中的path、search、hash值

#### 6.React-UI组件
##### 1.material-ui
	官网：http://www.material-ui.com/#/
	github：https://github.com/callemall/material-ui

##### 2.ant-design
	官网：https://ant.design/index-cn
	github：https://github.com/ant-design/ant-design
```
#安装
npm install antd
```

#### 7.redux
##### 学习文档
1.英文文档：https://redux.js.org/
2.中文文档：https:/www.redux.org.cn/
3.Github： https://github.com/reactjs/redux

##### redux是什么
1.redux 是一个专门用于做状态管理的JS库(不是react插件库)
2.它可以用在react,anglur,vue等项目中，但基本与react配合使用。
3.作用：集中管理react应用中多个组件共享的状态

##### 什么情况下需要使用redux
1.某个组件的状态，需要让其它组件可以随时拿到(共享)
2.一个组件需要改变另一个组件的状态(通信)
3.总体规则：能不用就不用，如果不用比较吃力才考虑使用

##### redux 工作流程

...

**redux三个核心概念**
1.action
	1).动作的对象
	2).包含2个属性
		type：标识属性，值为字符串，唯一，必要属性
		data：数据属性，值类型任意，可选属性
	3).例：{type:'ADD_STUDENT',data:{name:'tom',age:18}}
2.reducer
	1).用于初始化状态、加工状态
	2).加工时，根据旧的state和action，产生新的state的纯函数
3.store
	1).将sate、action、reducer联系在一起的对象
	2).如何得到此对象？
		2.1). import {createStore} from 'redux'
		2.2). import reducer from './reducers'
		2.3). const store = craeteStore(reducer)
	3).此对象的功能?
		3.1).getState():得到state
		3.2).dispatch():分发action，，触发reducer调用，产生新的state
		3.3).subscribe(listener):注册监听，当产生了细腻的state时，自动调用





#### 对react-redux的理解
1.所有的UI组件都应该包裹一个容器组件，他们是父子关系。
2.容器组件是真正和redux 打交道的，里面可以随意的使用redux的api。
3.UI组件中不能使用任何redux的api
4.容器组件会传递给UI组件：(1)。redux中所保持的状态。(2).用于操作状态的方法。
5.备注：容器给UI传递：状态、操作状态的方法，均通过props传递

##### 求和案例-redux精简版
1.src 下建立：
	redux
		-store.js
		-count_reducer.js
2.store.js
	1.引入redux中的createStore函数，创建一个store
	2.createStore调用时要传入一个为其服务的reducer
	3.暴露store对象
```redux

```
3.count_reducer.js
	1.reducer 的本质是一个函数，接收：preState、action，返回加工后的状态
	2.reducer 有两个作用：初始化状态，加工状态
	3.reducer 被第一次调用时，是store 自动触发的，传递的preState是undefined
4.在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
	备注：redux 只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

##### 求和案例-redux完整版
1.新增文件：count_action.js 用于创建action对象
2.constantt： 放置常量 type值


##### 求和案例-redux异步action版本
1.明确：延迟的动作组件不想交给自身，想交给action
2.何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务范湖。
3.具体编码
	1).npm install redux-thunk，并配置在store中
	2).创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
	3).异步任务有结果后，分发一个同步的action 去真正操作数据。
4.备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action

##### 求和案例-react-redux基本使用
1.明确两个概念
	1).UI组件：不能使用任何redux的API，只负责页面的呈现、交互等
	2).容器组件：负责和redux通信，将结果交给UI组件
2.如何创建一个容器组件——靠react-redux 的connect函数
	connect(mapStateToProps,mapDispatchToProps)(UI组件)
	-mapStateToProps:映射状态，返回值是一个对象
	-mapDispatchToProps:映射操作状态的方法，返回值是一个对象
3.备注：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
4.备注：mapDispatchToProps 也可以是一个对象

##### 求和案例-react-redux优化
1.容器组件和UI组件混成一个文件
2.无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}/>即可。
3.使用了react-redux后也不用再自己监测redux中状态的改变了，容器组件可以自动完成这个工作。
4.mapDispatchToProps 也可以简单的写成一个对象
5.一个组件要和redux“连接”要经过那几步？
	1).定义好UI组件——不暴露
	2).引入connect生成一个容器组件，并暴露，写法如下：
		connect(state=>({key}:value),//映射状态
		{key:xxxAction}//映射操作状态
		)(UI组件)
	3).在UI组件中通过：this.props.key读取和操作状态


##### 求和案例-react-redux 数据共享版
1.定义一个Person组件，和Count组件通过redux共享数据。
2.为Person组件编写：reducer、action，配置constant常量
3.重点：Person的reducer 和 Count的Reducer要是用combineReducers进行合并，合并后的总状态是一个对象！
4.交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”

##### 求和案例-react-redux最终版
1.所有变量名字要规范，尽量触发对象的简写形式。
2.reducers文件夹中，编写index.js 专门用于汇总并暴露所有的reducer

#### 8.扩展
##### setState
setState 更新状态的2种写法
1.setState(stateChange,[callback])——对象式的setState
	1).stateChange为状态改变对象(该对象可以体现出状态的更改)
	2).callback是可选的回调函数，它在状态更新完毕、界面也更新后(render调用后)才被调用
2.setState(updater,[callback])——函数式的setState
	1).updater为返回stateChange对象的函数。
	2).updater可以接受到state和props
	3).callback是可选的回调函数，它在状态更新、界面也更新后(render调用后)才被调用
3.总结：
	1).对象式的setState是函数式setState的简写方式(语法糖)
	2).使用原则：
		2.1).如果新状态不依赖于原状态===>使用对象式
		2.2).如果新状态依赖于原状态===>使用函数式
		2.3).如果需要setState()执行后获取最新的状态数据，要在第二个callback函数中读取。
```react
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
```
##### lazyLoad
路由组件的lazyLoad
```react
//1.通过react的lazy函数配合import()函数动态加载路由组件===>路由组件代码会被分开打包
//正常引入
// import About from './about'
// import Home from './home'
//路由组件懒加载引入
const About = lazy(()=>import('./about'))
const Home  = lazy(()=>import('./home'))

//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义的loading界面
{/*注册路由 */}
<Suspense fallback={<Loading/>}>
    <Routes>
        <Route path="about" element={<About/>}></Route>
        <Route path="home" element={<Home/>}></Route>
    </Routes>
</Suspense>
//or
<Suspense fallback={<Loading/>}>
	<Outlet/>
</Suspense>
```

##### Hooks
1.React Hook/Hooks 是什么
	1).Hook是React 16.8.0版本新增加的新特性、新语法
	2).可以让你在函数组件中使用state 以及其它的React特性
2.三个常用的HOOk
	1).State Hook：React.useState()
	2).Effect Hook：React。useEffect()
	3).Ref Hook：React.useRef()
3.State Hook
	1).State Hook让函数组件也可以有state状态，并进行状态数据的读写操作
	2).语法：const[xxx,setXxx] = React.useState(initValue)
	3).useState()说明
		参数：第一此处时候指定的值在内部作缓存
		返回值：包含2个元素的数组，第一个为内部当前状态值，第2个为更新状态值的函数
	4).setXxx()的2中写法
		setXxx(newValue)：参数作为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
		setXxx(vlaue=>newValue)：参数作为函数，接收原来的状态值，返回新的状态值，内部用其覆盖原来的状态值
```react
 	var initNum = 0
    var initName = ''
    let [num,setNum] = useState(initNum)
    let [name,setName] = useState(initName)
    function add(){
        //第一种写法：简写
        // setNum(num+1)
        
        //第二种写法：
        // setNum((num)=>{return num+1})
        //第二种写法：简写
        setNum(num=>num+1)
    }
```
4.Effect Hook
	1).Effect Hook 可以让你在函数中执行副作用操作(用于模拟类组件中的生命周期钩子)
	2).React中的副作用操作：
		发ajax请求数据获取
		设置订阅/启动定时器
		手动更改真实DOM
	3).语法和说明：
```react
useEffect(()=>{
	//在此处可以执行任何带副作用操作
    return ()=>{//在组件卸载前执行
        //在此做一些收尾工作，比如清除定时器/取消订阅等
    }
},[stateValue])//如果指定的是[],回调函数只会在第一次render()后执行
```
	4.可以把 useEffect Hook 看做如下三个函数的组合
		1).componentDidMount()
		2).componentDidUpdate()
		3).componentWillUnmount()
	5.示例代码
```react
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
        let timer = setInterval(()=>{
            add()
        },1000)
        return ()=>{
            //返回的函数，相当于componentWillUnmount
            clearInterval(timer)
        }
    },[])
```
5.Ref Hook
	1).Ref Hook 可以在函数组件中存储/查找组件内的标签或任意其它数据
	2).语法：const refContainer = useRef()
	3).作用：保存标签对象，功能与React.createRef()一样
```react
import {createRef, useRef} from 'react'
//函数式组件，使用Hook
	let myRef = useRef()
	 function show(){
        console.log(myRef.current.value)
    }
	 <input onChange={show} ref={myRef}></input>
//类式组件，创建
	//创建Ref
    myRef = createRef()
     show = ()=>{
       console.log(this.myRef.current.value)
    }
    <input ref={this.myRef} onChange={this.show}></input>
```
##### Fragment
使用：
```react
//有唯一的key属性
<Fragment key={1}> </Fragment>

//不能定义key
<></>
```
作用： 可以不用必须有一个真实DOM根标签了

##### Context
1.理解：一种组件间通信方式，常用于 【祖组件】 与 【后代组件】 间通信
2.使用：
```
1).创建Context容器对象：
	const XxxContext = React.createContext()
2)渲染子组件时，外面包裹xxxContext.Provider,通过value属性给后代组件传递数据：
	<XxxContext.Provider value={数组}>
		子组件
	</XxxContext.Provider>
3).后代组件读取数据：
	第一种方式：仅适用于类组件
		//声明接收context
		static contextType = XxxContext
		//读取context中的value数据
		this.context
	第二种方式：
		<XxxContext.Consumer>
		{
			value => {//value 就是context中的value值
				
			}
		}
		</XxxContext.Consumer>
```
3.代码示例
```react
import {Component,Fragment, useState,createContext} from 'react'
import './index.css'

//step1:创建Context对象
const nameContext = createContext()
export default function Home(){
    const [name,setName] = useState('tom')
    return (
        <Fragment >
            <h1>My is Context</h1>
            {/* step2:传递给子组件数据 */}
            <nameContext.Provider value={name}>
                <A name={name}/>
            </nameContext.Provider>
        </Fragment>
    )
}

function A(props){
    return (
        <Fragment>
            <div className="parent">
                <h2>A
                    <br/>
                    name={props.name} 
                </h2>
                <B name={props.name} />
            </div>
        </Fragment>
    )
}

function B(props){
    return (
        <Fragment>
            <div className="child">
                <h2>
                    B
                    <br/>
                    name={props.name} 
                </h2>
                <C1 name={props.name} />
                <C2 name={props.name} />
            </div>
        </Fragment>
    )
}

function C1(props){
    return (
        <Fragment>
            <div className="grand">
                <h2>
                    C1
                    <br/>
                    props传值：
                    name={props.name}
                    <br/>
                    context传值：
                    <nameContext.Consumer>
                        {
                            value=>{
                                // return `name=${value}`
                                // return <span>{value}</span>
                                return <span>value</span>
                            }
                            // value=>('name'+value)
                            // value=>'name'+value
                        }
                    </nameContext.Consumer>
                </h2>
               
            </div>
        </Fragment>
    )
}

class C2 extends Component{
    //step3:声明接收context
    static contextType = nameContext

    render(){
        console.log(this.context)
        return (
            <Fragment>
                <div className="grand">
                    <h2>
                        C2
                        <br/>
                        props传值：
                        name={this.props.name}
                        <br/>
                        context传值：
                        name={this.context}
                    </h2>
                
                </div>
            </Fragment>
        )
    }
}
```
**注意**
在应用开发中一般不用context，一般都用它的封装react插件

##### PrueComponents
组件优化
**Component的2个问题**
1.只要执行setState(),即使不改变状态数据，组件也会重新render()====>效率低
2.只当前组件render()，就会自动重新render子组件，纵使子组件没有用到父组件的任何数据====>效率低

**效率高的做法**
只有当组件的state或props数据发生改变时才重新render()

**原因**
Component 中的 shouldComponentUpdate()总是返回true
**解决**
1.重写shouldComponentUpdate()方法
	比较新旧state或props数据，如果有变化才返回true，如果没有返回false
2.使用PureComponent
	PureComponent 重写了shouldComponentUpdate(),只有state或props数据有变化才返回true
注意 ：只是进行state 和 props数据的浅比较，如果只是数据对象内部数据变了，返回false
	  不要直接修改state数据，而是要产生新的数据
项目中一般使用PureComponent来优化

##### renderProps
如何向组件内部动态传入带内容的结构(标签)?
1.Vue中：
	使用slot技术，也就是通过组件标签体传入结构 <A><B/></A>
2.React：
	1.使用children props：通过组件标签体传入结构
	2.使用render props：通过组件标签属性传入结构，而且可以携带数据，一般用render函数属性。

**Children Props**
```react
{/* 方式一 children Props*/}

	//父组件，把B组件传入到A
    <A>
        <B/>
    </A>
    
    //A获取组件内显示B组件
    {this.props.children}
    
问题：如果B组件需要A组件内的数据，====>做不到
```

**Render Props**
```react
{/* 方式二 render Props*/}
	//把B组件作为一个函数返回值传给A，然后A组件再传入B组件state状态，B组件接收props
	<A render={(name)=><B name={name}/>} />
	
A组件：{this.props.render(name)}
B组件：读取A组件传入的数据显示{this.props.name}
```

##### Error Boundary
错误边界
**理解** 
错误便捷(Error Boundary) :用来捕获后代组件错误，渲染出备用页面

**特点**
只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其它组件在合成事件、定时器中产生的错误

**使用方式**
```react
//生命周期函数，一旦后台组件报错，就会触发
	state = {hasError:''}
    //生产环境不能用，build 打包之后才可以用
    
 	//当子组件出现报错时，会触发getDerivedStateFromError 调用，并携带错误信息
    static getDerivedStateFromError(error){
        console.log(error)
        //在render之前触发
        //返回新的state
        return {hasError:error}
    }
    
    
    //渲染组件出错时
    componentDidCatch(error,info){
        console.log(error,info)
        //统计页面错误次数，发给反馈到后台
        //...
    }
```

##### 组件间通信方式总计
**组件间的关系**
1.父子组件
2.兄弟组件(非嵌套组件)
3.祖孙组件(跨级组件)

**几种通信方式**
1.props
	1).children props
	2).render props
2.消息订阅-发布
	pubs-sub、event...
3.集中式管理
	redux、dva等等
4.conText
	生产者-消费者模式

**比较好的搭配方式**
父子组件：props
兄弟组件：消息订阅-发布、集中式状态管理
祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)

#### 9.调试工具：
##### React developer tools for chrome 
##### Redux DevTools for chrome
[redux devtools github](https://github.com/zalmoxisus/redux-devtools-extension)
```
1.安装 
$ npm install redux-devtools-extension
2.引入
import { composeWithDevTools } from 'redux-devtools-extension';
3.配置
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
4.chorme 开发者工具 redux
```
##### Vscode 插件
安装：ES7+ React/Redux/React-Native snippets
[快捷方式](https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)


#### 10.打包
```react
#打包,会生成一个 ./build
$ npm run build

#创建一个简易全局serve
$ npm install serve -g

#进入./build文件夹,开启简单服务器
$ serve build
```

#### 纯函数和高阶函数
##### 纯函数
1.一类特别的函数：只要是同样的输入（实参），必定得到同样的输出(返回)
2.必须遵守一下一些约束
	1).不得改写参数数据
	2).不会产生任何副作用，例如网络请求，输入和输出设备
	3).不能调用Date.now()或者Math.randow()等不纯的方法
3.redux 的reducer 函数必须是一个纯函数

##### 高阶函数
1.理解：一类特别的函数
	1).情况1：参数是函数
	2).情况2：返回是函数
2.常见的高阶函数
	1).定时器设置函数
	2).数组 forEach()/map()/filter()/reduce()/find()/bind()
	3).promise

#### 注
1.查看react 版本信息：npm react info
2.vscode 运行终端：
    1).win+X键，使用管理员身份运行power shell
    2).输入命令：set-executionpolicy remotesigned