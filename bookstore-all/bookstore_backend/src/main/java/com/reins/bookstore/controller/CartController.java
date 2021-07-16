package com.reins.bookstore.controller;

import com.reins.bookstore.entity.Cart;
import com.reins.bookstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
public class CartController {
    CartService cartService;

    @Autowired
    void setCartService(CartService cartService) {
        this.cartService = cartService;
    }

    @RequestMapping("/addCartProduct")
    public void addCartProduct(@RequestParam("customerId") Integer customerId, @RequestParam("bookId") Integer bookId, @RequestParam("bookTitle") String bookTitle, @RequestParam("bookImage1") String bookImage1, @RequestParam("bookPrice") BigDecimal bookPrice) {
        cartService.addCartProduct(customerId, bookId, bookTitle, bookImage1, bookPrice);
    }

    @RequestMapping("/getCartByCustomerId")
    public List<Cart> getCartByCustomerId(@RequestParam("customerId") Integer customerId)
    {
        return cartService.getCartByCustomerId(customerId);
    }

    @RequestMapping("/cleanCartByCustomerId")
    public void cleanCartByCustomerId(@RequestParam("customerId") Integer customerId)
    {
        cartService.cleanCartByCustomerId(customerId);
    }


}
