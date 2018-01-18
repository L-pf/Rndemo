import React,{Component} from 'react';
import {
    Alert,
} from 'react-native';

export default class NetUtils extends  Component{

    static fetch(url, options = {}) {
        let infobody={};
        infobody.headers = Object.assign(options.headers || {}, {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        infobody.method = options.method;
        if (options.jsonData) {
            infobody.body = 'jsonData='+JSON.stringify(options.jsonData);
        }
    
        /* let _baseUrl;
        if (options.baseUrl !== '' && ! options.baseUrl) {
            _baseUrl = env.baseUrl;
    
            delete options.baseUrl;
        } else {
            _baseUrl = options.baseUrl;
        } */

        // console.log(infobody)
        return fetch(/* _baseUrl + */ url, infobody).then(res => res.json()).then(res => {
            // console.log(res);
            return Promise.resolve(res);
        }).catch(error => {
            if (error.code == '601') {
                // 未登录，跳转到登录页面
                let routes = Asyz.global.navigator._navigation.state.routes;
                if (routes && routes[routes.length - 1].routeName != 'Login') {
                    // 当前不在登录页面时，才跳转
                    //Asyz.global.navigator.dispatch(NavigationActions.navigate({ routeName: 'Login' }));
                    Asyz.navigator.navigate('Login');
                }
            } else if (error.message == 'Network request failed') {
                Alert.alert('错误', '网络错误',[{text:'OK'}],{ cancelable: false });
            } else if (options.handleError !== false) {
                 Alert.alert('错误', error.message,[{text:'OK'}],{ cancelable: false });
            }
    
            return Promise.reject(error);
        });
    }
    
    
    

}

