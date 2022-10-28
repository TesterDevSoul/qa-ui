import axios from "./http";

const user = {
    login(data){
        return axios({
            method: 'POST',
            url: '/login',
            data: data
        })
    }
}

export default user