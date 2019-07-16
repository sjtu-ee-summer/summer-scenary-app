package com.example.imgidentify.Controller;


import com.example.imgidentify.Service.ImgIdentifyObject;
import com.example.imgidentify.Service.imgIdentifyLandmark;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@EnableResourceServer
@RequestMapping("/imgidentify")
public class imgidentifyController {


    //通用物体识别
    @PostMapping("/object")
    public String objectIdentify(@RequestParam String img) throws IOException {
        ImgIdentifyObject imgIdentifyObject = new ImgIdentifyObject();

        return imgIdentifyObject.main(img);
    }


    //地标识别
    @PostMapping("/landmark")
    public String markIdentify(@RequestParam String img) throws IOException {
        imgIdentifyLandmark imgIdentifyLandmark = new imgIdentifyLandmark();

        return imgIdentifyLandmark.main(img);
    }

    @RequestMapping("/hello/{id}")
    public String hello(@PathVariable(value = "id") String id) {
        return "hello"+id;
    }
}
