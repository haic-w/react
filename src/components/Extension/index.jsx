import React,{Component,Fragment} from 'react'

// 直接引入
import SetState from './setstate'
import RenderProps from './renderprops'


export default function Extension(){

    return (
        <Fragment>
            <p>&nbsp;</p>
            <h1>扩展</h1>
           
            <SetState />
            <hr/>
            <h1>renderProps</h1>
            <RenderProps />
        </Fragment>
    )
}