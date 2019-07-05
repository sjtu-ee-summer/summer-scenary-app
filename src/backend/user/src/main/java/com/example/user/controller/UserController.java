package com.example.user.controller;

import com.example.user.entity.User;
import com.example.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users/id/{id}")
    public User getUser(@PathVariable Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping("/signup")
    public User postUser(@RequestBody User user){
        return userRepository.save(user);
    }


    @GetMapping("/users/username/{username}")
    public User getByUsername(@PathVariable String username){
        return userRepository.getByUsername(username).orElse(null);
    }
}