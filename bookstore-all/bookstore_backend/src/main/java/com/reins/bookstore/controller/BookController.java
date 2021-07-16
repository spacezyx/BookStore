package com.reins.bookstore.controller;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;

@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping("/getBooks")
    public List<Book> getBooks(@RequestBody Map<String, String> params) {
        return bookService.getBooks();
    }

    @RequestMapping("/getBook")
    public Book getBook(@RequestParam("id") Integer id){
        return bookService.findBookById(id);
    }

    @RequestMapping("/getBookByName")
    public List<Book> getBook(@RequestParam("partname") String partname){
        return bookService.findBookByName(partname);
    }

    @RequestMapping("/deleteBook")
    public void deleteBook(@RequestParam("id") String id){
        int id1= Integer.parseInt(id);
        bookService.deleteOne(id1);
    }

    @RequestMapping("/addNewBook")
    public void addNewBook(@RequestParam("isbn") String isbn, @RequestParam("title") String title,
                           @RequestParam("type") String type, @RequestParam("author") String author,
                           @RequestParam("price")String price, @RequestParam("description") String description,
                           @RequestParam("inventory") String inventory, @RequestParam("image1") String image1){
        BigDecimal newprice = new BigDecimal(price);
        int newinventory = Integer.parseInt(inventory);
        bookService.addNewBook(isbn,title,type,author,newprice,description,newinventory,image1);
    }

    @RequestMapping("/modifyBook")
    public void modifyBook(@RequestParam("id") String id, @RequestParam("isbn") String isbn, @RequestParam("title") String title,
                          @RequestParam("author") String author, @RequestParam("inventory") String inventory, @RequestParam("image1") String image1){
        int newinventory = Integer.parseInt(inventory);
        int newid = Integer.parseInt(id);
        bookService.modifyBook(newid,isbn,title,author,newinventory,image1);
    }
}
