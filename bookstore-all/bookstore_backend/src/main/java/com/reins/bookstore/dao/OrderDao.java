package com.reins.bookstore.dao;

import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.OrderItem;

import java.util.List;

public interface OrderDao {
    void addOrder(Integer userId);

    List<OrderItem> getOrders();
}


