/**
 *登录页面
 *@author lpf
 @date 2018-01-05
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
} from 'react-native';

import NetUtils from '../publick/NetUtils.js';

class UserTextInput extends Component{
    render(){
         return(
            <TextInput 
                {...this.props}
             style={styles.input}  underlineColorAndroid="transparent" 

             />
        )
    }

}

export default class login extends Component{

    constructor (props){
        super(props)
        this.state = {
            username:'',
            password:'',
        }
    }

    getInfo = ()=>{
        console.log(this.state.username);
        NetUtils.fetch('http://t-idaccess.xzjcloud.com/user/pwdLogin', {
            method: 'POST',
            jsonData:{
                mobile:this.state.username,
                password:this.state.password
            }
        }).then(res => {
            console.log(res);
            // 成功
            const { navigate } = this.props.navigation;
            navigate('companyCreat');
        }).catch(error => {
            // 失败
            console.log(error)
        });
    }

    render(){

        return(
            <View style={styles.form}>

                <UserTextInput placeholder ={'请输入手机号或自定义账号'} onChangeText ={(name)=>{
                    this.state.username = name;
                }}  />
                <UserTextInput placeholder ={'请输入密码'} secureTextEntry ={true} onChangeText ={(psd)=>{
                    this.state.password = psd;
                }} />

                <View>
                    <Text style={styles.forgetPass} onPress={()=>{
                        const { navigate } = this.props.navigation;
                        navigate('companyCreat');
                    }}>
                        忘记密码
                    </Text>
                    <Text style={styles.logBtn} onPress={()=>{
                        /* const { navigate } = this.props.navigation;
                        navigate('companyCreat'); */
                        this.getInfo();
                    }}> 
                    登录
                    </Text>
                    <Text style={styles.register} onPress={()=>{
                        const { navigate } = this.props.navigation;
                        navigate('register');
                    }}> 
                    注册
                    </Text>
                </View>
                

            </View>
        );
    }

}

const styles = StyleSheet.create({
    form:{
        flex:1,
        backgroundColor:'#fdfeff',
        paddingTop:120,
    },
    input:{
        height:80,
        fontSize:21,
        paddingLeft:20,
        backgroundColor:'#ffffff',
        borderBottomWidth:1,
        borderColor:'#e9eef2',
        borderStyle:'solid',
    },
    logBtn:{
        fontSize:24,
        borderRadius:30,
        backgroundColor:'#339eff',
        textAlign:'center',
        color:'#ffffff',
        height:60,
        margin:20,
        marginTop:80,
        includeFontPadding:false,
        textAlignVertical:'center',
    },
    register:{
        fontSize:24,
        borderRadius:30,
        backgroundColor:'#ffffff',
        textAlign:'center',
        color:'#339eff',
        height:60,
        margin:20,
        marginTop:60,
        includeFontPadding:false,
        textAlignVertical:'center',
        borderWidth:1,
        borderColor:'#339eff',
        borderStyle:'solid',
    },
    forgetPass:{
        fontSize:18,
        color:'#9ca0ac',
        textAlign:'right',
        margin:10,
        marginRight:20,
    }

})