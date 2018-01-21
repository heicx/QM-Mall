import axios from 'axios'
import qs from 'qs'
import URI from './config'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://api.tcka.cn/mall/';
axios.defaults.withCredentials = true;

const get = (name, params) => {
    return axios.get(URI[name], {params: params}).then(res => res.data);
}

const post = (name, params) => {
    return axios.post(URI[name], qs.stringify(params)).then(res => res.data);
}

export default {
    get,
    post
}