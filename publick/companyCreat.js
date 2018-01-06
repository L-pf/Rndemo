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
                    
            </View>
        )
    }
}
    
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgorundColor:'#339eff',
    },
})