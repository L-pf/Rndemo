/**
 * 我的
 * @author lpf
 * @date 2018-01-05
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


 export default class mine extends Component{

    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'Detail1',
    
    });

 
     render(){
        return(
            <View style={styles.content}>
                <TouchableOpacity onPress={()=>{
                        const { navigate } = this.props.navigation;
                        navigate('slider')
                    }}>
                    <Text style={styles.title}>
                        我的
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    content:{
        flex:1,
        justifyContent:'center',
    },
    title:{
        fontSize:20,
        textAlign:'center',
    },

})




