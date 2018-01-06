
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class tabBar extends Component {

  static navigationOptions = ({navigation,screenProps}) => ({
    // 这里面的属性和App.js的navigationOptions是一样的。
    headerTitle:navigation.state.params?navigation.state.params.headerTitle:'Detail1',

  });


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={()=> {
              const { navigate } = this.props.navigation;
              navigate('swiper',{
                headerTitle:'轮播图Demo'
              });
        }}>
          HelloWord!  点击我跳转到轮播页面
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
