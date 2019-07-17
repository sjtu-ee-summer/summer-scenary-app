package com.example.imgidentify.Controller;


import com.example.imgidentify.Entity.Ideobjhis;
import com.example.imgidentify.Entity.idelmkhis;
import com.example.imgidentify.Repository.IdelmkhisRepository;
import com.example.imgidentify.Repository.IdeobjhisRepository;
import com.example.imgidentify.Service.ImgIdentifyObject;
import com.example.imgidentify.Service.imgIdentifyLandmark;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@EnableResourceServer
@RequestMapping("/imgidentify")
public class imgidentifyController {

    @Autowired
    private IdelmkhisRepository idelmkhisRepository;
    @Autowired
    private IdeobjhisRepository ideobjhisRepository;

    //通用物体识别
    @PostMapping("/object")
    public String objectIdentify(@RequestParam String img, @RequestParam Long id) throws IOException {
        ImgIdentifyObject imgIdentifyObject = new ImgIdentifyObject();
        Ideobjhis object = new Ideobjhis();

        String result = imgIdentifyObject.main(img);
        object.setImage(img);
        object.setResult(result);
        object.setUser_id(id);
        ideobjhisRepository.save(object);

        return result;
    }


    //地标识别
    @PostMapping("/landmark")
    public String markIdentify(@RequestParam String img, @RequestParam Long id) throws IOException {
        imgIdentifyLandmark imgIdentifyLandmark = new imgIdentifyLandmark();
        idelmkhis landmark = new idelmkhis();

        System.out.println("1");
        String result = imgIdentifyLandmark.main(img);
        System.out.println("2");
        landmark.setImage(img);
        System.out.println("3");
        landmark.setResult(result);
        System.out.println("4");
        landmark.setUser_id(id);
        idelmkhisRepository.save(landmark);
        System.out.println("5");

        return result;
    }

    @RequestMapping("/hello/{id}")
    public String hello(@PathVariable(value = "id") String id) {
        return "hello"+id;
    }
}
