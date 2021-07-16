package com.reins.bookstore.dao;

import com.reins.bookstore.entity.Book;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface BookDao {
    Book findOne(Integer id);

    List<Book> findBookByName(String partname);

    void addNewBook(String isbn, String title, String type, String author, BigDecimal price, String description, Integer inventory, String image1);

    void modifyBook(Integer id, String isbn, String title, String author, Integer inventory, String image1);

    void deleteOne(Integer id);

    List<Book> getBooks();


}
