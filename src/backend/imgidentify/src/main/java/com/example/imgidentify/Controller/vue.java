package com.example.imgidentify.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class vue {
    @RequestMapping("/")
    public String index(){
        return "index";
    }
}
