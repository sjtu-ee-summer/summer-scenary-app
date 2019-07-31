package com.example.imgidentify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ImgidentifyApplication {

    public static void main(String[] args) {
        SpringApplication.run(ImgidentifyApplication.class, args);
    }

//    @RequestMapping("/te")
//    public String te() {
//        return "hello wrod";
//    }

}
