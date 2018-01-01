// 用户登录
export const login = (state, ret) => {
    if(ret && ret.status) {
        state.isLogin = true;
        state.user = ret.data;
    }else {
        state.isLogin = false;
        state.user = {};
    }
}

// 退出登录
export const logout = (state, ret) => {
    if(ret && ret.status) {
        state.isLogin = true;
        state.user = {};
    }
}