import {postRequest} from "../utils/ajax";
import config from 'config';
import {history} from '../utils/history';
import {message} from 'antd';

export function orderSend(userId,callback){
    const url=`http://localhost:8080/addOrder?userId=${userId}`;
    postRequest(url,{},callback)
}

export const getOrders = (data, callback) => {
    const url = `${config.apiUrl}/getOrders`;
    postRequest(url, data, callback);
};