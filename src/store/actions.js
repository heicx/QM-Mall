import API from '../libs/request';

// 用户登录
export const login = ({commit}, params) => {
    return API.post('login', params).then(ret => {
        commit('login', ret);
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
        commit('logout', ret);
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
    return API.get('isLogin', {
        params: {async: true}
    }).then(data => {
        commit('login', data);
        return data;
    })
}