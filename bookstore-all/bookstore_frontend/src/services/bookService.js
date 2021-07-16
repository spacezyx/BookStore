import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";
import {history} from "../utils/history";
import {message} from "antd";


export const getBooks = (data, callback) => {
    const url = `${config.apiUrl}/getBooks`;
    postRequest(url, data, callback);
};

export const getBookByName = (partname, callback) => {
    const url = `${config.apiUrl}/getBookByName`;
    const data = {partname: partname};
    postRequest_v2(url, data, callback);
};

export const getBook = (id, callback) => {
    const data = {id: id};
    const url = `${config.apiUrl}/getBook`;
    postRequest_v2(url, data, callback);
};

export const deleteBook = (id, callback) => {
    const url = `http://localhost:8080/deleteBook?id=${id}`;
    postRequest(url, {}, callback);
};

export function ValidUser(username,user_valid, callback) {
    const url = `http://localhost:8080/ValidUser?username=${username}&user_valid=${user_valid}`;
    postRequest(url, {}, callback);
};


export const addNewBook = (data,callback) => {
    const url = `http://localhost:8080/addNewBook?isbn=${data.ISBN}&title=${data.bookname}&type=${data.type}&author=${data.author}&price=${data.book_price}&description=${data.description}&inventory=${data.inventory}&image1=${data.book_picture}`;
    postRequest(url, {}, callback);
    history.push("/RootHomeView");
};

export const modifyBook = (id,data,callback) => {
    const url = `http://localhost:8080/modifyBook?id=${id}&isbn=${data.ISBN}&title=${data.bookname}&author=${data.author}&inventory=${data.inventory}&image1=${data.book_picture}`;
    postRequest(url, {}, callback);
    history.push("/RootHomeView");
};
