package com.example.user.controller;

import com.example.user.entity.User;
import com.example.user.entity.UserAd;
import com.example.user.repository.UserAdRepository;
import com.example.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableResourceServer
public class UserAdController implements UserAdControllerInterface {

    @Autowired
    private UserAdRepository userAdRepository;

    @Autowired
    private UserRepository userRepository;

    public String hello(@RequestParam Long id, UserAd userad) {
        return String.valueOf(userad.getNature()) + String.valueOf(userad.getCulture());
    }

    public String update(@RequestParam Long id, UserAd userad) {
        User user = userRepository.findUserById(id);

        UserAd userAdtemp = userAdRepository.findUserAdById(id);

        if (userAdtemp == null) {
            userad.setUser(user);
            user.setUserAd(userad);
            userRepository.save(user);
        } else {
            userAdtemp.setUser(user);
            userAdtemp.setNature(userad.getNature() + userAdtemp.getNature());
            userAdtemp.setCulture(userad.getCulture() + userAdtemp.getCulture());
            userAdtemp.setGeotourism(userad.getGeotourism() + userAdtemp.getGeotourism());
            userAdtemp.setMedical(userad.getMedical() + userAdtemp.getMedical());
            userAdtemp.setReligous(userad.getReligous() + userAdtemp.getReligous());
            userAdtemp.setCulinary(userad.getCulinary() + userAdtemp.getCulinary());
            userAdtemp.setFashion(userad.getFashion() + userAdtemp.getFashion());
            userAdtemp.setMusic(userad.getMusic() + userAdtemp.getMusic());
            userAdtemp.setSex(userad.getSex() + userAdtemp.getSex());
            userAdtemp.setLocal(userad.getLocal() + userAdtemp.getLocal());
            userAdtemp.setOversea(userad.getOversea() + userAdtemp.getOversea());
            userAdtemp.setTechnology(userad.getTechnology() + userAdtemp.getTechnology());
            userAdtemp.setGoodcomment(userad.getGoodcomment() + userAdtemp.getGoodcomment());
            userAdtemp.setPriceexpensive(userad.getPriceexpensive() + userAdtemp.getPriceexpensive());
            userAdtemp.setPricemoderate(userad.getPricemoderate() + userAdtemp.getPricemoderate());
            userAdtemp.setPricebudget(userad.getPricebudget() + userAdtemp.getPricebudget());
            userAdtemp.setHomestay(userad.getHomestay() + userAdtemp.getHomestay());
            userAdtemp.setHotel(userad.getHotel() + userAdtemp.getHotel());
            userAdtemp.setShopping(userad.getShopping() + userAdtemp.getShopping());
            userAdtemp.setSea(userad.getSea() + userAdtemp.getSea());
            userAdtemp.setCitylife(userad.getCitylife() + userAdtemp.getCitylife());

            user.setUserAd(userAdtemp);
            userRepository.save(user);
        }

        return "success";
    }
}
