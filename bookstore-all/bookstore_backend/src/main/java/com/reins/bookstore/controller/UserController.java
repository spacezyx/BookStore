package com.reins.bookstore.controller;

import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.UserAuth;
import com.reins.bookstore.entity.User;
import com.reins.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/checkUser")
    public UserAuth checkUser(@RequestParam("username") String username,@RequestParam("password") String password){
        return userService.checkUser(username, password);
    }

    @RequestMapping("/ValidUser")
    public void ValidUser(@RequestParam("username") String username,@RequestParam("user_valid") Boolean user_vaild){
        userService.changeValid(username,user_vaild);
    }

    @RequestMapping("/getUserAuths")
    public List<UserAuth> getUserAuths(@RequestBody Map<String, String> params) {
        return userService.getUserAuths();
    }

    @RequestMapping("/getUsers")
    public List<User> getUsers(@RequestBody Map<String, String> params) {
        return userService.getUsers();
    }


    @RequestMapping("/AnUserRegister")
    public void Register(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("email") String email){
        userService.Register(username,password,email);
    }


}
