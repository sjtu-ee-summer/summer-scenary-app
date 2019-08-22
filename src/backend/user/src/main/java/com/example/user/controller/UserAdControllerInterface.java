package com.example.user.controller;

import com.example.user.entity.UserAd;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

public interface UserAdControllerInterface {

    @RequestMapping("/un/hello")
    String hello(@RequestParam Long id, UserAd userad);

    @RequestMapping("/users/updateinterest")
    String update(@RequestParam Long id, UserAd userad);

}
