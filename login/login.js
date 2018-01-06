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


    render(){

        return(
            <View style={styles.form}>

                <UserTextInput placeholder ={'请输入手机号或自定义账号'}  />
                <UserTextInput placeholder ={'请输入密码'} secureTextEntry ={true} />

                <View>
                    <Text style={styles.logBtn} onPress={()=>{
                        const { navigate } = this.props.navigation;
                        navigate('companyCreat');
                    }}> 
                    登录
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
        borderRadius:8,
        backgroundColor:'#339eff',
        textAlign:'center',
        color:'#ffffff',
        height:60,
        margin:20,
        marginTop:120,
        includeFontPadding:false,
        textAlignVertical:'center',
    }

})