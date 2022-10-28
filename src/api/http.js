//http基本请求配置
//导入axios
import axios from "axios";

//创建axios实例
var instance = axios.create({
    //请求头信息
    'headers' : {
        'Content-Type': 'application/json; charset=utf-8',
    },
    //基础后端服务地址
    // baseURL : 'http://39.102.48.202:6099',
    baseURL : 'https://testplatform.hogwarts.ceshiren.com',
    //默认前端请求超时时间 毫秒
    timeout : 2500,
})

//请求拦截器
instance
    .interceptors
    .request
    .use(config => {
        //Authorization
        //如果本地登录成功，则获取token
        if(localStorage.getItem('token')){
            //token信息拼接到请求头 Authorization
            config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
            //命令行输出打印查看
            console.log('请求头：'+ config.headers.Authorization);
        }
        return config;
    }, error => {
        //返回给定原因而被拒绝的对象
        return Promise.reject(error);
    })

//响应拦截器
instance
    .interceptors
    .response
    .use(config => {
        if(40013 == config.data.code || 40014 == config.data.code){
            //没有登录成功，token清空
            localStorage.removeItem('token');
        }
        return config;
    }, error => {
        //返回给定原因而被拒绝的对象
        return Promise.reject(error);
    })

//只有导出后才能正常在其他地方导入
export default instance