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