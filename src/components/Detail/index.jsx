import {Component} from 'react'
import { useLocation,useResolvedPath, useParams, useSearchParams,useInRouterContext,useNavigationType, useOutlet ,useMatch} from 'react-router-dom'
import qs from 'querystring'

//key=value&key=value  urlencoded

//对象 转 urlencoded
//qs.stringify({id:'001',name:'test'})

//urlencoded 转 对象
//q.parse('key=value&key=value')

export default function Detail(){
    // const params = {}
    // 接收params参数
    // const {params} = useParams()
    // console.log('useMatch',useMatch('/message/news/detail/:id/:name'))

    // 接收search参数
    // const [search,setSearch] = useSearchParams()
    // const params = {id:search.get('id'),name:search.get('name')}
    // console.log('useLocation',useLocation())

    // 接收state参数
    const {state} = useLocation()
    const params = state
    console.log('params',params)
    //是否处于路由的上下文环境中
    const isrouter = useInRouterContext()
    console.log('isrouter:',isrouter)

    //来源类型
    const sourcetype = useNavigationType()
    console.log('sourcetype:',sourcetype)

    //解析路径
    const resolve = useResolvedPath('/user?id=222&name=111#hello')
    console.log('resolve',resolve)

    return (
        <div>
            <h3>ID：{params.id}</h3>
            <h3>Name:{params.name}</h3>
            {/* setSearch 设置search传参的值 */}
            {/* <button onClick={()=>{setSearch('id=1&name=123')}}>更新search参数</button> */}
        </div>
    )
}

class Details extends Component{
    
    render(){
        console.log('this:',this)
        //接收params参数
        // const {params} = this.props.match | {}
        
        //接收search参数
        // const {search} = this.props.location
        // const {id,name} = qs.parse(search.slice(1))

        //接收state参数，此state参数非组件state
        // const {state} = this.props.location || {}

        // const findResult = DetailData.find((detailbj)=>{
        //     return detailbj === useParams.id
        // })
        return (
            <div>
                <h2>ID：</h2>
                <h2>Name:</h2>
            </div>
        )
    }
}