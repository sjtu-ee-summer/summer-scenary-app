package com.example.imgidentify.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@org.springframework.stereotype.Controller
public class vue {
    @RequestMapping("/ad")
    public String index(){
        return "index.html";
    }
}
