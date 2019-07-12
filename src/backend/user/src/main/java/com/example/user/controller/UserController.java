package com.example.user.controller;

import com.example.user.entity.User;
import com.example.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users/id/{id}")
    public User getUser(@PathVariable Long id) { return userRepository.findById(id).get();}

    //tested
    @GetMapping("/users/username/{username}")
    public User getByUsername(@PathVariable String username){
        return userRepository.findUserByUsername(username);
    }

    //tested
    @RequestMapping("/users/signup")
    public User addUser(@RequestParam String username,@RequestParam String password,
                        @RequestParam String email){
        User u = new User();
        u.setPassword(password);
        u.setUsername(username);
        u.setEmail(email);

        User uTest = userRepository.findUserByUsername(username);
        if (uTest != null) {
            return uTest;
        }

        return userRepository.save(u);
    }

    //tested
    @GetMapping("/users/signin")
    public boolean signin(@RequestParam String username, @RequestParam String password){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        User u = userRepository.findUserByUsername(username);
        if(u == null){
            // do nothing. Waits to exit loop
        } else if(encoder.matches(password,u.getPassword())){
            return true;
        }

        System.out.println("null");
        return false;
    }

    //tested
    @RequestMapping("/users/userinfo/{id}")
    public User postUserInfo(@PathVariable(value = "id")Long id,
                             @RequestParam String sex,@RequestParam int age,
                             @RequestParam String address,@RequestParam String phone)
    {
        User u = userRepository.findById(id).get();
        u.setAddress(address);
        u.setAge(age);
        u.setSex(sex);
        u.setPhone(phone);
        return userRepository.save(u);
    }

    //tested
    @RequestMapping("/users/improvip/{id}")
    public User improPermission(@PathVariable(value = "id") Long id){
        User u = userRepository.findById(id).get();
        u.setVip(u.getVip()+1);
        return userRepository.save(u);
    }

    @RequestMapping("/users/refind")
    public String refindpassword(@RequestParam String email) {
        User u = userRepository.findUserByEmail(email);
        if(u == null) {
            return "no such email";
        }else {
            //这里应该用验证用户邮箱的功能，现在未实现，先可以直接修改
            return u.getUserId().toString();
        }

    }

    @RequestMapping("/users/changepassword/{id}")
    public String changePassword(@PathVariable(value = "id") Long id,
                                 @RequestParam String password){
        User u = userRepository.findById(id).get();
        u.setPassword(password);
        userRepository.save(u);
        return "success";
    }
}