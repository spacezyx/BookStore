package com.reins.bookstore.service;

import com.reins.bookstore.entity.Book;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;


public interface BookService {

    Book findBookById(Integer id);

    List<Book> findBookByName(String partname);

    List<Book> getBooks();

    void deleteOne(Integer id);

    void addNewBook(String isbn, String title, String type, String author, BigDecimal price, String description, Integer inventory, String image1);

    void modifyBook(Integer id, String isbn, String title, String author, Integer inventory, String image1);

//    void updateBook(Integer id);
}
