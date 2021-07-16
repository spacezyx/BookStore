package com.reins.bookstore.service;

import com.reins.bookstore.entity.Cart;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface CartService {
    void addCartProduct(Integer customerId, Integer bookId, String bookTitle, String bookImage1, BigDecimal bookPrice);
    List<Cart> getCartByCustomerId(Integer customerId);
    void cleanCartByCustomerId(Integer customerId);


    ;
}
