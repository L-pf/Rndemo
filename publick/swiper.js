/**
 * 轮播图的demo
 * @author lpf
 * @date 2018-01-03
 */
import React, { Component } from 'react';
 import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
 } from 'react-native';


 import Swiper from 'react-native-swiper';

 const {ScreenWidth, ScreenHeight} = Dimensions.get('window');//用于获取屏幕的宽和高

export default class swiper extends Component{

    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'Detail1',
    
    });

    constructor(props){
        super(props);
        this.state = {
            items:[
              'http://blogdailyherald.com/wp-content/uploads/2013/04/382065_560557460633306_930109857_n.jpg',
              'http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg'
            ]
        }
    }
    
    render(){ let H = 200;
        return(
                
                <Swiper
                    style={styles.wrapper}
                    // height = {H}
                    autoplay = {true} //若为true，可以自动跳转；为false：需要手动滑动才能跳转 
                    autoplayTimeout = {3} //每个页面自动滑动停留的时间
                    showPagination = {true}  //页面下显示的圆点，标明当前页位于第几个
                    dot = {<View style={{backgroundColor:'#333333', width:24, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                                  //非当前圆点的样式（可自定义）
                    activeDotColor = 'red'  //当前圆点的样式（可自定义）
                    horizontal={true}  //若为true，滚动的内容横向排列；false：纵向排列
                    loop = {true}   //是否可以循环滑动
                    index = {0}     //初始进入的页面是第几页，默认从0开始
                    showsButtons = {true}//是否显示控制箭头的按钮>
                    > 
                   {
                       this.state.items.map((item, index) => {
                            console.log(item, index)
                            //cover: 等比例放大; center:不变; contain:不变; stretch:填充;
                            return (<Image style={{height: 400, width:ScreenWidth}} key = {index}
                                 resizeMode='cover' source={{uri: item}}/>)
                        })
                   }
                </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
})





