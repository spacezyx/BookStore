package com.reins.bookstore.serviceimpl;


import com.reins.bookstore.dao.CartDao;
import com.reins.bookstore.entity.Cart;
import com.reins.bookstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class CartServiceImpl implements CartService {
    CartDao cartDao;
    @Autowired
    void setCartDao(CartDao cartDao) {
        this.cartDao = cartDao;
    }

    @Override
    public void addCartProduct(Integer customerId, Integer bookId, String bookTitle, String bookImage1, BigDecimal bookPrice)
    {
        cartDao.addCartProduct(customerId, bookId, bookTitle, bookImage1, bookPrice);
    }

    @Override
    public List<Cart> getCartByCustomerId(Integer customerId)
    {
        System.out.println("service");
        return cartDao.getCartByCustomerId(customerId);
    }

    @Override
    public void cleanCartByCustomerId(Integer customerId)
    {
        //System.out.println("service");
        cartDao.cleanCartByCustomerId(customerId);
    }

}
