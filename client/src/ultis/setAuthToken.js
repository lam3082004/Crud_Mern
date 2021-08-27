import axios from "axios";

const setAuthToken = token => {
    //let x = axios.defaults.headers.common['Authorization']
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken