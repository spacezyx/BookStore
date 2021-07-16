package com.reins.bookstore.daoimpl;

import com.reins.bookstore.constant.Constant;
import com.reins.bookstore.dao.UserDao;
import com.reins.bookstore.entity.User;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.UserAuth;
import com.reins.bookstore.repository.UserAuthRepository;
import com.reins.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    UserAuthRepository userAuthRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public UserAuth checkUser(String username, String password){

        return userAuthRepository.checkUser(username,password);
    }

    @Override
    public void changeValid(String username, Boolean user_valid){
        userAuthRepository.changeValid(username,user_valid);
    }

    @Override
    public List<UserAuth> getUserAuths() {
        return userAuthRepository.getUserAuths();
    }

    @Override
    public List<User> getUsers() {
        return userRepository.getUsers();
    }

    @Override
    public void Register(String username, String password, String email){
        userRepository.userRegister(username);
        userAuthRepository.Register(username,password,email);
    }


}
