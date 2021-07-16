package com.reins.bookstore.dao;

import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.UserAuth;
import com.reins.bookstore.entity.User;

import java.math.BigDecimal;
import java.util.List;

public interface UserDao {

    UserAuth checkUser(String username, String password);

    void changeValid(String username,Boolean user_valid);

    List<UserAuth> getUserAuths();

    List<User> getUsers();

    void Register(String username, String password, String email);
}
