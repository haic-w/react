import {Component} from 'react'
import HelloCss from './index.module.css'

export default class Hello extends Component{
   
    render(){
        return (
            <div className={HelloCss.App}>
                <h1>hello word !!!</h1>
            </div>
        )
    }
}


