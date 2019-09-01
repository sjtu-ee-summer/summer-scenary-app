package com.example.advertise.advertisement.controller;



import com.example.advertise.advertisement.entity.Aduser;
import com.example.advertise.advertisement.repository.AduserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/aduser")
@CrossOrigin
public class AduserController {


    @Autowired
    private AduserRepository aduserRepository;

    @RequestMapping("/add")
    public String addusera(@RequestParam String username, @RequestParam String password,
                           @RequestParam String companyname, @RequestParam String responsename,
                           @RequestParam String phone, @RequestParam String email,
                           @RequestParam String gender){
        Aduser a = aduserRepository.findByUsername(username);
        if(a!=null) {
            return "such username already exists";
        }

        Aduser aduser = new Aduser();
        aduser.setCompanyname(companyname);
        aduser.setEmail(email);
        if(gender.equals("male")) {
            aduser.setGender(0);
        }else {
            aduser.setGender(1);
        }

        aduser.setPassword(password);
        aduser.setPhone(phone);
        aduser.setResponsename(responsename);
        aduser.setUsername(username);
        aduserRepository.save(aduser);
        return "register success";

    }

    @RequestMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password){
        System.out.println(username);
        Aduser a = aduserRepository.findByUsername(username);
        System.out.println(a);
        if(a==null) {
            return "username or password wrong";
        }
        if(!a.getPassword().equals(password)){
            return  "username or password wrong";
        }else {
            return a.getId().toString();
        }

    }

    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }
}
