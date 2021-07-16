package com.reins.bookstore.service;

import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.OrderItem;

import java.util.List;

public interface OrderService {
    void addOrder(Integer userId);


    List<OrderItem> getOrders();

}
