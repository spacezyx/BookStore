package com.reins.bookstore.daoimpl;

import com.reins.bookstore.dao.BookDao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public class BookDaoImpl implements BookDao {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book findOne(Integer id){
        return bookRepository.getOne(id);
    }

    @Override
    public List<Book> findBookByName(String partname){
        return bookRepository.findBookByName(partname);
    }


    @Override
    public List<Book> getBooks() {
        return bookRepository.getBooks();
    }

    @Override
    public void deleteOne(Integer id){
        bookRepository.deleteOne(id);
    }

    @Override
    public void addNewBook(String isbn, String title, String type, String author, BigDecimal price, String description, Integer inventory, String image1){
        bookRepository.addNewBook(isbn,title,type,author,price,description,inventory,image1);
    }

    @Override
    public void modifyBook(Integer id, String isbn, String title, String author, Integer inventory, String image1){
        bookRepository.modifyBook(id,isbn,title,author,inventory,image1);
    }
}
