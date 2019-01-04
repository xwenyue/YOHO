import React,{Component} from 'react'
import Header from '../header/header'
import Banner from '../banner/banner'
import Foot from '../foot/foot'
import BScroll from 'better-scroll'
import './css/style.css'

export default class Main extends Component{
    render(){
        return (
            <div className="wrapper">
            <div className="routbox">
                <Header></Header>
               <div className="mainbox">
                   <div className="main">
                   <Banner></Banner>
                   </div>
               </div>
            </div>
               <Foot></Foot>
            </div>
        )
    }
    componentDidMount(){
       new BScroll('.mainbox')
    }
}