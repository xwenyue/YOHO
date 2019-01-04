import React,{Component} from 'react'
import './css/swiper-4.3.5.min.css'
import './css/style.css'
import Swiper from 'swiper'

export default class Main extends Component{
    constructor(props){
        super(props)
        this.piclists=['01a15ed664895b3e59e1816844c246954a.jpg',
        '011db9630c1a569b46ade172076b7efb09.jpg',
        '0119f9bd09f68480e4add146c4347d8b47.jpg',
        '0180deae41d38d40309189e1f805ff3450.jpg',
        '0198e173c42ba15ba57ca5f4766e759584.jpg',
        '01772fe6085aa2dbd635e0927e880c9c0d.jpg',
        '010472c0bccf5b0f0202a830312c4ccf22.jpg',
        '013035c684fce49f5051ae74e3e9482c2f.jpg']
        this.iconlist=[
            {name:'新品到着',pic:'./images/girl/bannertype/01a6e3ccf4c41dc5826f66d0ff288288d1.png'},
            {name:'人气搭配',pic:'./images/girl/bannertype/01b6734d1561762771e42274ef8ad9f1bd.png'},
            {name:'折扣专区',pic:'./images/girl/bannertype/0107e05d8f249d707382e5777914e61a17.png'},
            {name:'全部分类',pic:'./images/girl/bannertype/01335fdcb07216884c0b2f0d0ebfe00e7f.png'}
        ]
        this.hotpic=[
            './images/hot/01c1c59ac0e151b3f50e2d9fef71408370.jpg',
            './images/hot/01d3ff85b50a7b5befec8bd88cc96958c5.jpg',
            './images/hot/01de3c528d7e036dbfcd0b0fa1517b28d8.jpg',
            './images/hot/01e908e10c4b2b3e96151a04739c73d32c.jpg',
            './images/hot/01f18b2e93c38c60b8c3cd4c31433bd19a.jpg',
            './images/hot/01f24c80d6ffa587748733ab3f00ce481c.jpg',
            './images/hot/01fda1497592e9a50e6981113c2e12af3f.jpg',
            './images/hot/011adaccc535e844ebab0c56cd1fc2b2c6.jpg',
            './images/hot/013dc5a0c390caeef1fa2cba7ababc4ba4.jpg',
            './images/hot/016e62cb5d9841b8da9b0c6a2e43b588b1.jpg',
            './images/hot/01030c3cb605411264ec3719e0f9d3e1ef.jpg',
            './images/hot/01232927b44cdb72b1dfc1efc70010cdf7.jpg',
        ]
    }
    componentDidMount(){
        new Swiper('.wrap',{
            autoplay:true,
            pagination: {
                el: '.swiper-pagination',
              }
        })
    }
    render(){
        return (
            <div className="bannerbox">
                <div className="wrap swiper-container">
               <ul className="swiper-wrapper">
                   {
                       this.piclists.map((i,k)=>(
                           <li key={k} className="swiper-slide"><img alt="" src={'./images/swiper/'+i}></img></li>
                       ))
                   }
               </ul>
               <div className="swiper-pagination"></div>
            </div>
            <div className="icons-wrapper">
                <ul>
                   {
                    this.iconlist.map((i,k)=>(
                        <li key={k}>
                            <dl>
                                <dd><img alt="" src={i.pic}></img></dd>
                                <dt>{i.name}</dt>
                            </dl>
                        </li>
                    ))
                   }
                </ul>
            </div>
            <div className="bannerpic">
                <img alt="" src="./images/banner/01a0a5a86e82f2458923c0cf5520d3b2dd.jpg"></img>
            </div>
            <div className="hot">
            <p>热门品类</p>
                <ul>
                    {
                        this.hotpic.map((i,k)=>(
                            <li key={k}>
                                    <img alt="" src={i}></img>
                            </li>
                        ))
                    }
                </ul>
            </div>
            </div>
            
        )
    }
}