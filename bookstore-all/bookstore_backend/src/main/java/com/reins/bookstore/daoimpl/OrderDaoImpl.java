package com.reins.bookstore.daoimpl;

import com.reins.bookstore.dao.OrderDao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.Order;
import com.reins.bookstore.entity.Cart;
import com.reins.bookstore.entity.OrderItem;
import com.reins.bookstore.repository.BookRepository;
import com.reins.bookstore.repository.CartRepository;
import com.reins.bookstore.repository.OrderRepository;
import com.reins.bookstore.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class OrderDaoImpl implements OrderDao {
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    BookRepository bookRepository;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    OrderItemRepository orderItemRepository;

    @Autowired
    void setOrderRepository(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public void addOrder(Integer userId)
    {
        bookRepository.decreaseInventory(userId);
        orderRepository.addOrder(userId);
        Integer newId = orderRepository.getId();
        //Integer newId = 2;
        orderItemRepository.addOrderItems(newId, userId);
    }

    @Override
    public List<OrderItem> getOrders() {
        return orderItemRepository.getAllOrders();
    }
}
