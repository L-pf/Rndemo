/**
 * 创建公司
 * @author lpf
 * @date 2018-01-05
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    Icon,
    TextInput,
    StyleSheet,
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

export default class companyCreat extends Component{
    render(){
        return(
            <View style={styles.main}>
                <Text style={styles.title} onPress={()=>{
                        const { navigate } = this.props.navigation;
                        navigate('routerConfigs');
                    }}>
                    创建公司页面，点我
                </Text>
                <UserTextInput  defaultValue={'名称'} />
                <UserTextInput defaultValue={'公司地址'} />
                <UserTextInput defaultValue={'详细地址'} />
                <UserTextInput defaultValue={'联系人'} />
                <UserTextInput defaultValue={'联系方式'} />
                <UserTextInput defaultValue={'邮政编码'} />
                <UserTextInput defaultValue={'收货地址'} />
                    
            </View>
        )
    }
}
    
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#fdfeff',
    },
    title:{
        fontSize:20,
        textAlign:'center',
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
})