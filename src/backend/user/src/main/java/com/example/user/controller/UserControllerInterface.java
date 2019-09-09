package com.example.user.controller;

import com.example.user.entity.User;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.util.List;

public interface UserControllerInterface {

    @GetMapping("/users/id/{id}")
    User getUser(@PathVariable Long id);

    @GetMapping("/users/username/{username}")
    User getByUsername(@PathVariable String username);

    // Alert!!!
    // gender: 0 for male, 1 for female
    @RequestMapping("/un/signup")
    String addUser(@RequestParam String username, @RequestParam String password,
                   @RequestParam String email, @RequestParam String phone, @RequestParam int gender);

    // Upon successful signin, return user_id to frontend. Frontend should store this user_id to be used on other services
    // returns 0 or exception error on failed signin
    @GetMapping("/un/signin")
    @CrossOrigin
    Long signin(@RequestParam String username, @RequestParam String password);

    // Alert!!!
    // gender: 0 for male, 1 for female
    @RequestMapping("/users/userinfo/{id}")
    User postUserInfo(@PathVariable(value = "id")Long id, @RequestParam int gender, @RequestParam int age,
                      @RequestParam String address, @RequestParam String phone);

    @RequestMapping("/un/improvip/{id}")
    User improPermission(@PathVariable(value = "id") Long id);


    @RequestMapping("/users/changepassword")
    String changePassword(@RequestParam Long id, @RequestParam String oldPassword,
                          @RequestParam String newPassword);

    @CrossOrigin
    @RequestMapping("/admin/alluser")
    List<User> alluser();

    @RequestMapping("/un/refindPassword")
    String refindPassword(@RequestParam String email) throws MessagingException;

    @RequestMapping("/users/updateinterest")
    void update(@RequestParam Long id, long c1, long c2, long c3, long c4, long c5);

    @RequestMapping("/users/changephoto")
    String changePhoto(@RequestParam Long id,@RequestParam String photo);

    @CrossOrigin
    @RequestMapping("/un/vuesignin")
    public String vuesignin(@RequestParam String username,@RequestParam String password);

}
