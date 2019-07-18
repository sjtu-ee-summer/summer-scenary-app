package com.example.advertise.controller;


import com.example.advertise.Entity.Ad;
import com.example.advertise.repository.AdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ad")
@EnableResourceServer
public class AdController {

    @Autowired
    private AdRepository adRepository;

    @RequestMapping("/findbyname")
    public Ad findAdbyname(@RequestParam String entername) {
        return adRepository.findAdByEntername(entername);
    }

    @RequestMapping("/findbyid")
    public Ad findbyid(@RequestParam Long id) {
        return adRepository.findById(id).get();
    }

    @RequestMapping("/all")
    public List<Ad> findall() {
        return (List<Ad>) adRepository.findAll();
    }

    @RequestMapping("/add")
    public String addad(@RequestParam String entername,@RequestParam String picture, @RequestParam String detail) {
        Ad ad = new Ad();
        ad.setPicture(picture);
        ad.setDetail(detail);
        ad.setEntername(entername);
        adRepository.save(ad);
        
        return "save success";
    }

}
