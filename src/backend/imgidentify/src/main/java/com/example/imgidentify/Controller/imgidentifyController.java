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
import java.util.List;

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

        String result = imgIdentifyLandmark.main(img);
        landmark.setImage(img);
        landmark.setResult(result);
        landmark.setUser_id(id);
        idelmkhisRepository.save(landmark);

        return result;
    }

    @RequestMapping("/hello/{id}")
    public String hello(@PathVariable(value = "id") String id) {
        return "hello"+id;
    }

    @RequestMapping("/lmkhis/{id}")
    public List<idelmkhis> landMarkHistory(@PathVariable(value = "id") Long id)  {
        return idelmkhisRepository.findAllByUser_id(id);
    }

    @RequestMapping("/objhis/{id}")
    List<Ideobjhis>  objectHistory(@PathVariable(value = "id") Long id) {
        return ideobjhisRepository.findAllByUser_id(id);
    }
}
