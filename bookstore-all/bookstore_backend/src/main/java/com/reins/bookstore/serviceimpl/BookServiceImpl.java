package com.reins.bookstore.serviceimpl;

import com.reins.bookstore.dao.BookDao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;


@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDao bookDao;

    @Override
    public Book findBookById(Integer id){
        return bookDao.findOne(id);
    }

    @Override
    public List<Book> findBookByName(String partname){
        return bookDao.findBookByName(partname);
    }

    @Override
    public List<Book> getBooks() {
        return bookDao.getBooks();
    }

    @Override
    public void deleteOne(Integer id){
        bookDao.deleteOne(id);
    }

    @Override
    public void addNewBook(String isbn, String title, String type, String author, BigDecimal price, String description, Integer inventory, String image1) {
        bookDao.addNewBook(isbn,title,type,author,price,description,inventory,image1);
    }

    @Override
    public void modifyBook(Integer id, String isbn, String title, String author, Integer inventory, String image1) {
        bookDao.modifyBook(id,isbn,title,author,inventory,image1);
    }
}
