package com.reins.bookstore.repository;

import com.reins.bookstore.entity.OrderItem;
import com.reins.bookstore.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem,String>{
    @Transactional
    @Modifying
    @Query(value = "select * from bookstore.order_item_tmp", nativeQuery = true)
    List<OrderItem> getOrders();

    @Transactional
    @Modifying
    @Query(value = "select order_item.book_title,order_item.book_price,order_item.book_num, user.name" +
            " from bookstore.order_item , user , order_info WHERE order_item.order_id = order_info.order_id and order_info.user_id = user.user_id", nativeQuery = true)
    List<OrderItem> getAllOrders();

    @Transactional
    @Modifying
    @Query(value = "insert order_item(order_id,book_title,book_price,book_num) select ?1,book_title,book_price,1 from cart WHERE cart.customer_id = ?2", nativeQuery = true)
    void addOrderItems(@Param("order_info_id") Integer order_info_id,@Param("id") Integer id);
}

