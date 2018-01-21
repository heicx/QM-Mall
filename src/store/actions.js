import API from '../libs/request';
import * as types from './mutation-types';

// 用户登录
export const login = ({commit}, params) => {
    return API.post('login', params).then(ret => {
        commit(types.MALL_LOGIN, ret);
        return ret;
    })
}

// 用户注册
export const register = ({commit}, params) => {
    return API.post('register', params).then(ret => {
        return ret;
    })
}

// 退出登录
export const logout = ({commit}) => {
    return API.get('logout').then(ret => {
        commit(types.MALL_LOGOUT, ret);
    })
}

// 发送验证码
export const sendCaptcha = ({commit}, params) => {
    return API.post('sendCaptcha', params).then(ret => {
        return ret;
    })
}

// 校验登录状态
export const isLogin = ({commit}) => {
    return API.get('isLogin', {async: true}).then(data => {
        commit(types.MALL_LOGIN, data);
        return data;
    })
}

export const cityList = ({commit}, params) => {
    return API.get('cityList', params).then(ret => {
        return ret;
    });
}

export const areaList = ({commit}, params) => {
    return API.get('areaList', params).then(ret => {
        return ret;
    });
}

export const addressList = ({commit}) => {
    return API.get('addressList').then(ret => {
        return ret;
    });
}

export const addAddress = ({commit}, params) => {
    return API.post('addAddress', params).then(ret => {
        return ret;
    });
}
