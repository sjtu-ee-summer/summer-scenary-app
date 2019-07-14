package com.example.imgidentify.Controller;


import com.example.imgidentify.Service.ImgIdentifyObject;
import com.example.imgidentify.Service.imgIdentifyLandmark;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
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
}
