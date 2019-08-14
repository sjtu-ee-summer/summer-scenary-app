package com.example.user.controller;

import com.example.user.entity.UserAd;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

public interface UserAdControllerInterface {

    @RequestMapping("/un/updateinterest")
    String updateinterest(@RequestParam Long id, UserAd userad);


}
