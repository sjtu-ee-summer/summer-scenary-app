package com.example.user.controller;

import com.example.user.entity.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.mail.MessagingException;
import java.util.List;

public interface UserControllerInterface {

    @GetMapping("/users/id/{id}")
    User getUser(@PathVariable Long id);

    @GetMapping("/users/username/{username}")
    User getByUsername(@PathVariable String username);

    @RequestMapping("/un/signup")
    String addUser(@RequestParam String username, @RequestParam String password,
                   @RequestParam String email, @RequestParam String phone, @RequestParam String sex);

    @GetMapping("/un/signin")
    boolean signin(@RequestParam String username, @RequestParam String password);

    @RequestMapping("/users/userinfo/{id}")
    User postUserInfo(@PathVariable(value = "id")Long id, @RequestParam String sex,@RequestParam int age,
                      @RequestParam String address,@RequestParam String phone);

    @RequestMapping("/un/improvip/{id}")
    User improPermission(@PathVariable(value = "id") Long id);


    @RequestMapping("/users/changepassword")
    String changePassword(@RequestParam Long id, @RequestParam String oldPassword,
                          @RequestParam String newPassword);

    @RequestMapping("/admin/alluser")
    List<User> alluser();

    @RequestMapping("/un/refindPassword")
    String refindPassword(@RequestParam String email) throws MessagingException;

}
