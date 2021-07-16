package com.reins.bookstore.repository;

import




        com.reins.bookstore.entity.Cart;
import com.reins.bookstore.entity.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Transactional
public interface CartRepository extends JpaRepository<Cart,String> {

    @Modifying
    @Query(value = "insert into cart (customer_id, book_id, book_title, book_image1, book_price) values(?1, ?2, ?3, ?4, ?5)", nativeQuery = true)
    void addCartProduct(@Param("customerId") Integer customerId, @Param("bookId") Integer bookId, @Param("bookTitle") String bookTitle, @Param("bookImage1") String bookImage1, @Param("bookPrice") BigDecimal bookPrice);


    @Query(value = "from Cart where customerId = :customerId and bookId = :bookId")
    Cart searchProduct(@Param("customerId") Integer customerId, @Param("bookId") Integer bookId);

    @Query(value = "from Cart where customerId = :customerId")
    List<Cart> getCartByCustomerId(@Param("customerId") Integer customerId);

    @Transactional
    @Modifying
    @Query(value = "DELETE from Cart where customerId = :customerId")
    void cleanCartByCustomerId(@Param("customerId") Integer customerId);
}
