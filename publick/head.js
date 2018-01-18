/**
 * 测试demo
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    ViewPagerAndroid,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Button,
} from 'react-native';

import Swiper from './swiper'
import {
    DrawerNavigator,
    DrawerItems,
} from 'react-navigation';
/**
 * rn提供的plateform用于检测app所在的平台
 */
class Home extends Component{
    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'Detail1',
        drawerLabel:'我',
    }); 

    render(){
        return (
            <View style={styles.content}>

                <View style={styles.header}>
                    <View style={styles.bc} >
                        <TouchableOpacity  onPress={()=>{
                            this.props.navigation.navigate('DrawerOpen');
                        }}>
                             <Image style={styles.menu} source={require('../images/menu.png')} />
                        </TouchableOpacity>
                       
                        <Text style={styles.title}>河南众品食业股份有限公司</Text>

                    </View>

                     <Swiper />
                </View>
                
                <View style={styles.pushInfo}>
                    <TouchableOpacity  onPress={()=>{
                        const { navigate } = this.props.navigation;
                        navigate('mine',{
                            headerTitle:'个人中心的页面',
                            user:'aaa'
                        })
                    }}>
                        <Image style={styles.pushInfoImg} source={require('../images/menu.png')} />
                    </TouchableOpacity>
                    
                    
                    <View style={styles.box}>
                        <Text style={styles.item}>发货通知：要货单(CD2017已发货 5分钟前</Text>
                        <Text style={styles.item}>新客户：郑州市农贸市场 1小时前</Text>
                    </View>
                </View>

                <View style={styles.applic}>
                    
                    <Text style={styles.applicTit}>
                        慧应用
                    </Text>
                    
                    <View style={styles.applicCont}>
                        
                        <View style={styles.listV}>
                            <View style={styles.listItem}>
                                <Text style={styles.listDesc}>
                                    我的记账本
                                </Text>
                                <Text style={styles.listDesc}>
                                    收支结余笔笔记得清
                                </Text>
                            </View>
                            <Image style={styles.applicContImg} source={require('../images/bn1.jpg')} />
                        </View>
                        <View style={styles.listV}>
                            <View style={styles.listItem}>
                                <Text style={styles.listDesc}>
                                    我的记账本
                                </Text>
                                <Text style={styles.listDesc}>
                                    收支结余笔笔记得清
                                </Text>
                            </View>
                            <Image style={styles.applicContImg} source={require('../images/bn1.jpg')} />
                        </View>
                        <View style={styles.listV}>
                            <View style={styles.listItem}>
                                <Text style={styles.listDesc}>
                                    我的记账本
                                </Text>
                                <Text style={styles.listDesc}>
                                    收支结余笔笔记得清
                                </Text>
                            </View>
                            <Image style={styles.applicContImg} source={require('../images/bn1.jpg')} />
                        </View>
                        <View style={styles.listV}>
                            <View style={styles.listItem}>
                                <Text style={styles.listDesc}>
                                    我的记账本
                                </Text>
                                <Text style={styles.listDesc}>
                                    收支结余笔笔记得清
                                </Text>
                            </View>
                            <Image style={styles.applicContImg} source={require('../images/bn1.jpg')} />
                        </View>

                    </View>

                </View>


            </View>
        )
    }
}
class MyNotificationsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications标题',
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}
let {width,height}  = Dimensions.get('window');

const head = DrawerNavigator({
        Home:{
            screen:Home,
        },
        Notifications: {
            screen: MyNotificationsScreen,
        },
        Notifications2: {
            screen: MyNotificationsScreen,
        },
    },
);



const styles = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor:'#fdfeff',
    },
    header: {
        height:350,
        backgroundColor: '#339eff',
    },
    bc:{
        height:80,
        // justifyContent:'center',
    },
    title:{
        fontSize:20,
        textAlign:'center',
        color:'#fff',
        includeFontPadding:false,
        textAlignVertical:'center',
    },
    menu:{
        width:30,
        height:30,
        // margin:25,
        /* position:'absolute',
        left:30,
        top:25, */
    },
    pushInfo:{
        height:120,
        backgroundColor:'#ffffff',
        marginTop:30,
        flexDirection: 'row',   // 水平排布
    },
    pushInfoImg:{
        width:80,
        height:80,
        margin:20,
    },
    box:{
        height:80,
        marginTop:25,
    },
    item: {
        fontSize: 18,
        height: 40,
        justifyContent:'center',
    },

    applic:{
        height:300,
        backgroundColor:'#ffffff',
        marginTop:20
    },
    applicTit:{
        fontSize:22,
        height:40,
        justifyContent:'center',
        margin:20,
        marginBottom:0,
        color:'#333333',
        borderBottomWidth:1,
        borderColor:'#f7f8fa',
        borderStyle:'solid',
    },
    applicCont:{
        flexDirection:'row',
        height:180,
        flexWrap:'wrap',
    },
    listV:{
        flexDirection:'row',
        width:'45%',
        height:90,
        justifyContent:'center',
        margin:10,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderColor:'#f7f8fa',
        borderStyle:'solid',
    },
    listItem:{
        margin:15,
    },
    applicContImg:{
        width:60,
        height:60,
        margin:15,
    },
    listDesc:{
        fontSize:16,
        height:30,
        justifyContent:'center',
    },

    tabImg : {
        alignItems : 'center',
        justifyContent : 'center',
    },
    img : {
        height : 100,
    },
    titleMsg : {
        textAlign : 'center',
        color : '#ff3233',
        paddingTop : 40,
        paddingBottom : 20,
    },

})

export default head;
