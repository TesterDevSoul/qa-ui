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
    baseURL : 'http://39.102.48.202:6099',
    //默认前端请求超时时间 毫秒
    timeout : 2500,
})

//只有导出后才能正常在其他地方导入
export default instance