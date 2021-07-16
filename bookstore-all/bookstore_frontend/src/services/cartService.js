import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";
import {getBook} from "./bookService";

export function addCartProduct(customerId, bookId, bookTitle, bookImage1, bookPrice, callback) {
    const url = `http://localhost:8080/addCartProduct?customerId=${customerId}&bookId=${bookId}&bookTitle=${bookTitle}&bookImage1=${bookImage1}&bookPrice=${bookPrice}`;
    postRequest(url, {}, callback);
}

export function getCartByCustomerId(customerId, callback) {
    const url = `http://localhost:8080/getCartByCustomerId?customerId=${customerId}`;
    postRequest(url, {}, data => {
        console.log(data);
        data.map(element => {
            getBook(element.bookId, callback);
        });
    });
}

export function cleanCartByCustomerId(customerId, callback) {
    const url = `http://localhost:8080/cleanCartByCustomerId?customerId=${customerId}`;
    postRequest(url, {}, data => {
        console.log(data);
        data.map(element => {
            getBook(element.bookId, callback);
        });
    });
}
