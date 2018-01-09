/**
 * 注册页面
 * @author lpf
 * @date 2018-01-06
 */
import React ,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
} from 'react-native'
 
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

export default class register extends Component{
    render(){
        return(
            <View style={styles.form}>

                <UserTextInput placeholder ={'请输入手机号'}  />
                <UserTextInput placeholder ={'请输入6~16位密码'} secureTextEntry ={true} />
                <UserTextInput placeholder ={'请输入再次输入密码'} secureTextEntry ={true} />
                <UserTextInput placeholder ={'请输入验证码'} />

                <View>
                   
                    <Text style={styles.logBtn} onPress={()=>{
                        const { navigate } = this.props.navigation;
                        navigate('companyCreat');
                    }}> 
                        完成
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