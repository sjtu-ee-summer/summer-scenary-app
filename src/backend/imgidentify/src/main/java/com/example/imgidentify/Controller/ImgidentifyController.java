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

import java.io.*;
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

//    @PostMapping("/py")
//    public String py(@RequestParam String url) throws IOException, InterruptedException {
//        String exe = "python3";
//        String command = "./crawlertest.py";
//        String[] cmdArr = new String[] {exe, command, url};
//        Process process = Runtime.getRuntime().exec(cmdArr);
//        InputStream is = process.getInputStream();
//        DataInputStream dis = new DataInputStream(is);
//        String a,str;
//        str="";
//        while((a = dis.readLine())!=null){
//            str+=a;
//        }
//        process.waitFor();
//        System.out.println(str);
//        return str;
//    }



    @RequestMapping("/baike")
    public String baike(@RequestParam String keyword) throws IOException, InterruptedException {
        String exe = "python3";
//        String exe = "python";
        String command = "./baike.py";
        String[] cmdArr = new String[] {exe, command,keyword};
        Process process = Runtime.getRuntime().exec(cmdArr);

        process.waitFor();
        BufferedReader in = new BufferedReader(new FileReader("py"));
        String str,a;
        str="";
        while((a=in.readLine())!=null){
            str = str + a;
        }

        System.out.println(str);
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

    @PostMapping("/getfood")
    public String getfood(@RequestParam String url) throws IOException, InterruptedException {
//        String exe = "python";
        String exe = "python3";
        String command = "./get_food_images.py";
        String[] cmdArr = new String[] {exe, command, url};
        Process process = Runtime.getRuntime().exec(cmdArr);
        InputStream is = process.getInputStream();
        DataInputStream dis = new DataInputStream(is);
        String a,str;
        str="";
        while((a = dis.readLine())!=null){
            str+=a;
        }
        process.waitFor();
        System.out.println(str);
        return str;
    }
    @PostMapping("/gethotel")
    public String gethotel(@RequestParam String url) throws IOException, InterruptedException {
//        String exe = "python";
        String exe = "python3";
        String command = "./get_hotel_images.py";
        String[] cmdArr = new String[] {exe, command, url};
        Process process = Runtime.getRuntime().exec(cmdArr);
        InputStream is = process.getInputStream();
        DataInputStream dis = new DataInputStream(is);
        String a,str;
        str="";
        while((a = dis.readLine())!=null){
            str+=a;
        }
        process.waitFor();
        System.out.println(str);
        return str;
    }
    @PostMapping("/getshopping")
    public String getshopping(@RequestParam String url) throws IOException, InterruptedException {
//        String exe = "python";
        String exe = "python3";
        String command = "./get_shopping_images.py";
        String[] cmdArr = new String[] {exe, command, url};
        Process process = Runtime.getRuntime().exec(cmdArr);
        InputStream is = process.getInputStream();
        DataInputStream dis = new DataInputStream(is);
        String a,str;
        str="";
        while((a = dis.readLine())!=null){
            str+=a;
        }
        process.waitFor();
        System.out.println(str);
        return str;
    }
}
