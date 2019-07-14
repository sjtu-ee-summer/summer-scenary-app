package com.example.gateway;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class UserController {
    @Autowired
    private UserClient userClient;

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id){
        return userClient.getUserById(id).orElse(null);
    }
}
