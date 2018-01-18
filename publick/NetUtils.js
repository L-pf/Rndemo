import React,{Component} from 'react';
import {
    Alert,
} from 'react-native';

export default class NetUtils extends  Component{

    static fetch(url, options = {}) {
        options.headers = Object.assign(options.headers || {}, {
            "Content-Type": "application/x-www-form-urlencoded"
        });
    
        if (options.jsonData/* && typeof(options.data) == 'object'*/) {
            let params = '';
    
            for (let p in options.jsonData) {
                if(options.jsonData[p] === undefined || options.jsonData[p] === null){
                    continue ;
                }
                params += p + '=' + options.jsonData[p] + '&';
            }
    
            options.method = options.method ? options.method.toUpperCase() : 'GET';
    
            if (options.method == 'GET' || options.method == 'HEAD') {
                if (url.indexOf('?') == -1) {
                    url += '?' + params;
                } else {
                    url += '&' + params;
                }
            } else {
                if (options.body) {
                    options.body += params;
                } else {
                    options.body = params;
                }
            }
        }
    
        /* let _baseUrl;
        if (options.baseUrl !== '' && ! options.baseUrl) {
            _baseUrl = env.baseUrl;
    
            delete options.baseUrl;
        } else {
            _baseUrl = options.baseUrl;
        } */
    
        return fetch(/* _baseUrl + */ url, options).then(res => res.json()).then(res => {
            console.log(res);
           /*  if (res.code != '200') {
                return Promise.reject(res);
            } else { */
                return Promise.resolve(res.body);
            // }
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

