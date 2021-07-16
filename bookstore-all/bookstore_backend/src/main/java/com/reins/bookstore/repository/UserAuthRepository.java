package com.reins.bookstore.repository;

import com.reins.bookstore.entity.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


import java.math.BigDecimal;
import java.util.List;


public interface UserAuthRepository extends JpaRepository<UserAuth,String>{

    @Transactional
    @Modifying
    @Query(value = "insert into bookstore.user_auth (username,password,user_type,user_valid,email) values(?1, ?2, 0, 1, ?3)", nativeQuery = true)
    void Register(@Param("username") String username, @Param("password") String password, @Param("email") String email);


    @Transactional
    @Modifying
    @Query(value = "UPDATE UserAuth SET user_valid = :user_valid WHERE username = :username")
//    @Query(value = "UPDATE UserAuth SET user_valid = 0 WHERE username = 'handsome'")
//    @Query(value = "update UserAuth u set u.user_valid =: user_valid where u.username =: username")
//    @Query(value = "update bookstore.user_auth set user_valid =: user_valid where user_name =: user_name",nativeQuery = true)
    void changeValid(@Param("username") String username, @Param("user_valid") Boolean user_valid);

    @Query(value = "from UserAuth where username = :username and password = :password ")
    UserAuth checkUser(@Param("username") String username, @Param("password") String password);

    @Query(value = "select * from bookstore.user_auth", nativeQuery = true)
    List<UserAuth> getUserAuths();

   }
