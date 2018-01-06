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
                    
            </View>
        )
    }
}
    
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#339eff',
    },
    title:{
        fontSize:20,
        textAlign:'center',
    },
})