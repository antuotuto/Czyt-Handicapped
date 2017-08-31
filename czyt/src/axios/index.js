import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.baseURL = '/cvscreenerService/'
// axios.defaults.baseURL = '/'
axios.defaults.headers.common['Content-Type'] = 'application/json'

//添加一个返回拦截器
axios.interceptors.response.use(function(response) {
    //对返回的数据进行一些处理
    return response;
}, function(error) {
    //对返回的错误进行一些处理
    if (error.response) {
        switch (error.response.status) {
            case 404:
                break;
            case 403:
                window.location.href = 'https://beta.tupu360.com/secure/login'
                break;
            default:
                console.log(error);
        }
    }
    return Promise.reject(error);
});

export default axios
