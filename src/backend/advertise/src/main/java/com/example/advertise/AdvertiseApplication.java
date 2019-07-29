package com.example.advertise;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class AdvertiseApplication {

    public static void main(String[] args) {
        SpringApplication.run(AdvertiseApplication.class, args);
    }

}
