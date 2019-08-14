package com.example.user.controller;

import com.example.user.entity.UserAd;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableResourceServer
public class UserAdController implements UserAdControllerInterface {

    public String updateinterest(@RequestParam Long id, UserAd userad) {
        return String.valueOf(userad.getNature()) + String.valueOf(userad.getCulture());
    }

}
