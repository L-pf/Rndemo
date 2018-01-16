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
    TouchableOpacity,
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

                <View style={styles.bc} >
                    <TouchableOpacity  onPress={()=>{
                        this.props.navigation.navigate('login');
                    }}>
                            <Text style={styles.headtitle}>&#xe600;</Text>
                    </TouchableOpacity>
                    
                    <Text style={styles.headM}>公司信息</Text>

                    <TouchableOpacity  onPress={()=>{
                        this.props.navigation.navigate('routerConfigs');
                    }}>
                            <Text style={styles.ensureInfo}>&#xe601;</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.inputOther}>
                    <Text style={styles.title}>名称：</Text>
                    <UserTextInput placeholder={'名称'} />
                </View>
                <View style={styles.inputOther}>
                    <Text style={styles.title}>公司地址：</Text>
                    <UserTextInput  />
                    <Text style={styles.directRight}>&#xe600;</Text>
                </View>
                <View style={styles.inputOther}>
                    <Text style={styles.title}>详细地址：</Text>
                    <UserTextInput multiline={true} />
                </View>
                <View style={styles.inputOther}>
                    <Text style={styles.title}>联系人：</Text>
                    <UserTextInput  />
                </View>
                <View style={styles.inputOther}>
                    <Text style={styles.title}>联系方式：</Text>
                    <UserTextInput />
                </View>
                <View style={styles.inputOther}>
                    <Text style={styles.title}>邮政编码：</Text>
                    <UserTextInput  />
                </View>
                <View style={styles.inputOther}>
                    <Text style={styles.title}>收货地址：</Text>
                    <UserTextInput  />
                    <Text style={styles.directRight}>&#xe600;</Text>
                </View>
                    
            </View>
        )
    }
}
    
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#fdfeff',
    },

    bc:{
        height:80,
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10,
    },
    headM:{
        flex:1,
        includeFontPadding:false,
        textAlignVertical:'center',
        fontSize:24,
        textAlign:'center',
    },
    headtitle:{
        height:80,
        includeFontPadding:false,
        textAlignVertical:'center',
        fontSize:28,
        fontFamily:'iconfont',
    },
    ensureInfo:{
        height:80,
        includeFontPadding:false,
        textAlignVertical:'center',
        fontSize:28,
        fontFamily:'iconfont',
        color:'#339eff',
    },

    title:{
        fontSize:21,
        textAlign:'left',
        includeFontPadding:false,
        textAlignVertical:'center',
    },
    input:{
        height:60,
        fontSize:21,
        textAlign:'right',
        flex:1,
    },

    inputOther:{
        height:60,
        flexDirection: 'row',
        backgroundColor:'#ffffff',
        borderBottomWidth:1,
        borderColor:'#e9eef2',
        borderStyle:'solid',
        paddingLeft:10,
        paddingRight:10,
    },
    directRight:{
        includeFontPadding:false,
        textAlignVertical:'center',
        fontSize:24,
        fontFamily:'iconfont',
    },

})