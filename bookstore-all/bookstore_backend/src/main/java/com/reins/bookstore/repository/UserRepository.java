package com.reins.bookstore.repository;

import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.User;
import com.reins.bookstore.entity.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

public interface UserRepository extends JpaRepository<User,String> {
    @Query(value = "select * from bookstore.user", nativeQuery = true)
    List<User> getUsers();

    @Transactional
    @Modifying
    @Query(value = "insert into user (nickname,name,tel,address,expense_all) values(?1,?1,0,0,0)", nativeQuery = true)
    void userRegister(@Param("username") String username);


}
