package com.example.imgidentify.Controller;


import com.example.imgidentify.Entity.Ideobjhi;
import com.example.imgidentify.Entity.Idelmkhi;
import com.example.imgidentify.Repository.IdelmkhisRepository;
import com.example.imgidentify.Repository.IdeobjhisRepository;
import com.example.imgidentify.Service.ImgIdentifyObject;
import com.example.imgidentify.Service.ImgIdentifyLandmark;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.*;

import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RestController
@EnableResourceServer
@RequestMapping("/imgidentify")
public class ImgidentifyController {

    @Autowired
    private IdelmkhisRepository idelmkhisRepository;
    @Autowired
    private IdeobjhisRepository ideobjhisRepository;

    //通用物体识别
    @PostMapping("/object")
    public String objectIdentify(@RequestParam String img, @RequestParam Long id) throws IOException {
        ImgIdentifyObject imgIdentifyObject = new ImgIdentifyObject();
        Ideobjhi object = new Ideobjhi();

        String result = imgIdentifyObject.main(img);
        object.setImage(img);
        object.setResult(result);
        object.setUid(id);
        ideobjhisRepository.save(object);

        return result;
    }


    //地标识别
    @PostMapping("/landmark")
    public String markIdentify(@RequestParam String img, @RequestParam Long id) throws IOException {
        ImgIdentifyLandmark imgIdentifyLandmark = new ImgIdentifyLandmark();
        Idelmkhi landmark = new Idelmkhi();

        String result = imgIdentifyLandmark.main(img);
        landmark.setImage(img);
        landmark.setResult(result);
        landmark.setUid(id);
        idelmkhisRepository.save(landmark);

        return result;
    }

    @RequestMapping("/py")
    public String py() throws IOException, InterruptedException {
        String exe = "python";
        String command = "D:\\calculator_simple.py";
        String num1 = "1";
        String num2 = "2";
        String[] cmdArr = new String[] {exe, command, num1, num2};
        Process process = Runtime.getRuntime().exec(cmdArr);
        InputStream is = process.getInputStream();
        DataInputStream dis = new DataInputStream(is);
        String str = dis.readLine();
        process.waitFor();
        return str;

    }

    @RequestMapping("/hello/{id}")
    public String hello(@PathVariable(value = "id") String id) {
        return "hello"+id;
    }

    @RequestMapping("/lmkhis/{id}")
    public List<Idelmkhi> landMarkHistory(@PathVariable(value = "id") Long id)  {
        return idelmkhisRepository.findAllByUid(id);
    }

    @RequestMapping("/objhis/{id}")
    List<Ideobjhi>  objectHistory(@PathVariable(value = "id") Long id) {
        return ideobjhisRepository.findAllByUid(id);
    }
}
