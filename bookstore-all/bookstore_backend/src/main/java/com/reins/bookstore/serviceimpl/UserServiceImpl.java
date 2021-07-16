package com.reins.bookstore.serviceimpl;

import com.reins.bookstore.dao.UserDao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.UserAuth;
import com.reins.bookstore.entity.User;
import com.reins.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public UserAuth checkUser(String username, String password){
        return userDao.checkUser(username,password);
    }

    @Override
    public void changeValid(String username, Boolean user_valid){
        userDao.changeValid(username,user_valid);
    }


    @Override
    public List<UserAuth> getUserAuths() {
        return userDao.getUserAuths();
    }

    @Override
    public List<User> getUsers() {
        return userDao.getUsers();
    }

    @Override
    public void Register(String username, String password, String email){

        userDao.Register(username,password,email);
    }
}
