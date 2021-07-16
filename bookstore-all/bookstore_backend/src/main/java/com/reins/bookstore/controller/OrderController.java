package com.reins.bookstore.controller;

import com.reins.bookstore.entity.OrderItem;
import com.reins.bookstore.entity.Order;
import com.reins.bookstore.entity.User;
import com.reins.bookstore.service.CartService;
import com.reins.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class OrderController {

    OrderService orderService;

    @Autowired
    void setOrderService(OrderService orderService) {
        this.orderService = orderService;
    }

    @RequestMapping("/addOrder")
    public void addCartProduct(@RequestParam("userId") Integer userId) {
         orderService.addOrder(userId);
    }

    @RequestMapping("/getOrders")
    public List<OrderItem> getOrders(@RequestBody Map<String, String> params) {
        return null;
        //return orderService.getOrders();
    }
}