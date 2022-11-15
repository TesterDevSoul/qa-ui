//测试用例请求配置

//导入已经配置好的 axios
import axios from "./http";

const testcase = {
   //方法一：获取用例信息
   getTestcase(params){
    return axios({
        method: "GET",
        url: "/case",
        params: params //传递的参数拼接URL，用params
    
    })
   },
    //添加用例
    addTestcase(data){
        return axios({
            method: "POST",
            url: "/testcase",
            data: data //传递的参数是body
        
        })
    },
    //删除用例
    deleteTestCase(data){
        return axios({
            method: "DELETE",
            url: "/testcase",
            data: data //传递的参数是body
        
        })
    },
    //修改用例
    updateTestcase(data){
        return axios({
            method: "PUT",
            url: "/testcase",
            data: data //传递的参数是body
        
        })
    }

}


//导出让其他文件可以使用
export default testcase