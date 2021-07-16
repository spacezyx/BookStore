package com.reins.bookstore.dao;

import com.reins.bookstore.entity.Cart;
import org.springframework.data.repository.query.Param;

import javax.persistence.criteria.CriteriaBuilder;
import java.math.BigDecimal;
import java.util.List;

public interface CartDao {
    void addCartProduct(Integer customerId, Integer bookId, String bookTitle, String bookImage1, BigDecimal bookPrice);
    List<Cart> getCartByCustomerId(Integer customerId);
    void cleanCartByCustomerId(Integer customerId);
}
