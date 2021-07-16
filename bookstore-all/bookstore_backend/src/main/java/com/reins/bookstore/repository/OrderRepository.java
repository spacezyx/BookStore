package com.reins.bookstore.repository;


import com.reins.bookstore.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

//import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface OrderRepository extends JpaRepository<Cart,String> {

    @Modifying
    @Query(value = "insert into order_info (user_id) values(?1)", nativeQuery = true)
    void addOrder(@Param("userId") Integer userId);

    @Query(value = "from Order where user_id = : userId")
    Order searchOrderByUserId(@Param("userId") Integer userId);

    //@Transactional
    //@Modifying
    @Query(value = "select max(order_id) from order_info", nativeQuery = true)
    Integer getId();
}
