//dùng để xác thực người dùng
import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/authreducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants"
import setAuthToken from '../ultis/setAuthToken'
import axios from 'axios'

export const AuthContext = createContext()

//cung cấp
const AuthContextProvider = ({ children }) => {
    // trạng thái
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true, // trạng thái login
        isAuthenticated: false, // dùng để kiểm tra người dùng có đang login hay không, nếu mà true thì chuyển sang dashboard
        user: null // chưa có thông tin người dùng
    })

    // check Authenticated
    const loadUser = async () => {
        //let x=
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
        }

        try {
            const response = await axios.get(`${apiUrl}/auth`)
            if (response.data.success) {
                dispatch({
                    type: "SET_AUTH",
                    payload: {
                        isAuthenticated: true,
                        user: response.data.user
                    }
                }) //thay đổi useReducer
            }
        } catch (error) {
            //console.log(error)
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
            setAuthToken(null)
            dispatch({ type: "SET_AUTH", payload: { isAuthenticated: false, user: null } })
        }
    }

    useEffect(() => loadUser(), [])

    // Login
    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm)

            //lưu access token vào storage
            if (response.data.success)
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.accessToken
                )

            await loadUser()

            return response.data // trả lại data
        } catch (error) {
            if (error.response.data) return error.response.data // lỗi trong back-end
            else return { success: false, message: error.message }
        }
    }

    // Register
    const registerUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/register`, userForm)
            if (response.data.success)
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.accessToken
                )

            await loadUser()

            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }

    //logout
    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
        dispatch({
            type: "SET_AUTH",
            payload:
            {
                isAuthenticated: false,
                user: null
            }
        })
    }

    // Context data
    const AuthContextData = { loginUser, registerUser, logoutUser, authState }

    //return provider
    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider