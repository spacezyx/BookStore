package com.reins.bookstore.daoimpl;

import com.reins.bookstore.dao.CartDao;
import com.reins.bookstore.entity.Cart;
import com.reins.bookstore.repository.BookRepository;
import com.reins.bookstore.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public class CartDaoImpl implements CartDao {

    CartRepository cartRepository;
    @Autowired
    void setCartRepository(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @Override
    public void addCartProduct(Integer customerId, Integer bookId, String bookTitle, String bookImage1, BigDecimal bookPrice)
    {
        Cart c = (Cart) cartRepository.searchProduct(customerId, bookId);
        if(c == null)
        {
            cartRepository.addCartProduct(customerId, bookId, bookTitle, bookImage1, bookPrice);
        }
        //cartRepository.addCartProduct(customerId, bookId, bookTitle, bookImage1, bookPrice);
    }
    @Override
    public List<Cart> getCartByCustomerId(Integer customerId)
    {
        System.out.println("dao");
        return cartRepository.getCartByCustomerId(customerId);
    }

    @Override
    public void cleanCartByCustomerId(Integer customerId)
    {
        System.out.println("dao");
        cartRepository.cleanCartByCustomerId(customerId);
    }
}
