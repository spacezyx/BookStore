package com.reins.bookstore.repository;

import com.reins.bookstore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Array;
import java.math.BigDecimal;
import java.util.List;

public interface BookRepository extends JpaRepository<Book,Integer> {

    @Query(value = "select * from bookstore.book", nativeQuery = true)
    List<Book> getBooks();

    @Query(value = "select t from Book t WHERE t.title LIKE %?1%")
    List<Book> findBookByName(@Param("partname") String partname);
//    "select t from Team t where t.name like %?1%"

    @Transactional
    @Modifying
    @Query(value = "DELETE from Book WHERE bookId = :id")
    void deleteOne(@Param("id") Integer id);


//    bookService.addNewBook(isbn,title,type,author,price,description,inventory,image1);
    @Transactional
    @Modifying
    @Query(value = "insert into book (isbn,title,type,author,price,description,inventory,sales,image1) values(?1, ?2, ?3, ?4, ?5, ?6, ?7, 0, ?8)", nativeQuery = true)
    void addNewBook(@Param("isbn") String isbn, @Param("title") String title,
                    @Param("type") String type, @Param("author") String author,
                    @Param("price") BigDecimal price, @Param("description") String description,
                    @Param("inventory") Integer inventory, @Param("image1") String image1
                    );

    @Transactional
    @Modifying
    @Query(value = "UPDATE Book SET isbn = :isbn, title = :title, author = :author, inventory = :inventory, image1 = :image1 WHERE bookId = :id")
    void modifyBook(@Param("id") Integer id, @Param("isbn") String isbn, @Param("title") String title,
                     @Param("author") String author, @Param("inventory") Integer inventory, @Param("image1") String image1
    );

    @Transactional
    @Modifying
    @Query(value = "UPDATE book b,cart c SET b.inventory = b.inventory-1 WHERE b.id = c.book_id and c.customer_id = ?1", nativeQuery = true)
    void decreaseInventory(@Param("id") Integer id);
}
