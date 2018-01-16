/**
 * 侧滑效果的demo
 * @author lpf
 * @date 2018-01-16
 */

 import React,{Component} from 'react';
 import {
     View,
     Dimensions,
     StyleSheet,
     Image,
     Button,
 } from 'react-native';
 import {
    DrawerNavigator, 
    DrawerItems,
 } from 'react-navigation';


class screen2 extends Component{
    static navigationOptions = {
        drawerLabel:'两个',

    }

    render(){
        return (
            <View>
                一一一四
            </View>
        )
    }
}
class MyHomeScreen extends React.Component {

    static navigationOptions = {
        //{ focused: boolean, tintColor: string }
      drawerLabel: 'Home',
      //{ focused: boolean, tintColor: string }
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/bn1.jpg')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
      
    };
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title=" MyHomeScreen ----> open drawer"
        />
      );
    }
  }
const slider = DrawerNavigator({
    Home:{
        screen:MyHomeScreen,
    },
    Notifications:{
        screen:screen2,
    },
})
const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

export default slider;



