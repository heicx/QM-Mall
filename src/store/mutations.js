// 用户登录
export const login = (state, ret) => {
    if(ret && ret.status) {
        state.isLogin = true;
        state.user = ret.data;
        sessionStorage.setItem('_usr', true);
    }else {
        state.isLogin = false;
        state.user = {};
        sessionStorage.removeItem('_usr');
    }
}

// 退出登录
export const logout = (state, ret) => {
    if(ret && ret.status) {
        state.isLogin = false;
        state.user = {};
        sessionStorage.removeItem('_usr');
    }
}