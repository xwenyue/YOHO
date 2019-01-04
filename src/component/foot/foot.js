import React,{Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import './css/style.css'

export default class Foot extends Component{
    constructor(props){
        super(props)
       this.arr=[{icon:'iconfont icon-shouye',name:'首页',router:'/'}
       ,{icon:'iconfont icon-qiyeyuanquwuye',name:'分类',router:'/type'}
       ,{icon:'iconfont icon-jijianfasong',name:'逛',router:'/shop'}
       ,{icon:'iconfont icon-caigou',name:'购物车',router:'/car'}
       ,{icon:'iconfont icon-yonghu',name:'我的',router:'/mine'}]
    }
    render(){
        return (
            <footer>
                <ul>
                    {
                        this.arr.map((i,k)=>(
                            <li key={k}>
                                <dd><i className={i.icon}></i></dd>
                                <dt>{i.name}</dt>
                            </li>
                        ))
                    }
                </ul>
            </footer>
        )
    }
}