package com.reins.bookstore.service;

import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.UserAuth;
import org.springframework.data.repository.query.Param;
import com.reins.bookstore.entity.User;

import java.math.BigDecimal;
import java.util.List;


public interface UserService {

    UserAuth checkUser(String username, String password);

    void changeValid(String username,Boolean user_valid);

    List<UserAuth> getUserAuths();

    List<User> getUsers();

    void Register(String username, String password, String email);

}
