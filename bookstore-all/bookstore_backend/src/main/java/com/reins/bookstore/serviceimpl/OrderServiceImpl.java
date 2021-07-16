package com.reins.bookstore.serviceimpl;

import com.reins.bookstore.dao.CartDao;
import com.reins.bookstore.dao.OrderDao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.Order;
import com.reins.bookstore.entity.OrderItem;
import com.reins.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    OrderDao orderDao;
    @Autowired
    void setOrderDao(OrderDao orderDao) {
        this.orderDao = orderDao;
    }

    @Override
    public void addOrder(Integer userId)
    {
         orderDao.addOrder(userId);
    }

    @Override
    public List<OrderItem> getOrders() {
        return orderDao.getOrders();
    }
}
