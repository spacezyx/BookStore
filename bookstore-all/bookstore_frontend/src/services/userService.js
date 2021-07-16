import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';



export const login = (data) => {
    const url = `${config.apiUrl}/login`;
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            if(data.data.userType == 0)
                history.push("/HomeView");
            else if(data.data.userType == 1)
                history.push("/RootHomeView");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const logout = () => {
    const url = `${config.apiUrl}/logout`;

    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.removeItem("user");
            history.push("/login");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
    const url = `${config.apiUrl}/checkSession`;
    postRequest(url, {}, callback);
};

export const getUserAuths = (data, callback) => {
    const url = `${config.apiUrl}/getUserAuths`;
    postRequest(url, data, callback);
};

export function ValidUser(username,user_valid, callback) {
    const url = `http://localhost:8080/ValidUser?username=${username}&user_valid=${user_valid}`;
    postRequest(url, {}, callback);
};

export function checkUser(username,password, callback) {
     const url = `http://localhost:8080/checkUser?username=${username}&password=${password}`;
     postRequest(url, {}, callback);
};

export const getUsers = (data, callback) => {
    const url = `${config.apiUrl}/getUsers`;
    postRequest(url, data, callback);
};

export const register = (data,callback) => {

    const url = `http://localhost:8080/AnUserRegister?username=${data.username}&password=${data.password}&email=${data.email}`;
    postRequest(url, {}, callback);
    message.success('注册成功');
    history.push("/");
};
