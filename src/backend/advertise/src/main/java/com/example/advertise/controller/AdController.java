package com.example.advertise.controller;


import com.example.advertise.Entity.Ad;
import com.example.advertise.repository.AdRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping("/ad")
//@EnableResourceServer
public class AdController {

    @Autowired
    private AdRepository adRepository;


    @RequestMapping("/findbyid")
    public Ad findbyid(@RequestParam Long id) {
        return adRepository.findById(id).get();
    }

    @RequestMapping("/all")
    public List<Ad> findall() {
        return (List<Ad>) adRepository.findAll();
    }

//    @RequestMapping("/hello")
//    public String hello() throws IOException {
//        Ad ad = adRepository.findById(1l).get();
//        BufferedOutputStream out = new BufferedOutputStream(
//                new FileOutputStream(new File("p.jpg")));
//        out.write(ad.getPicture());
//        return "success";
//    }

    @CrossOrigin
    @RequestMapping("/uploading")
    public String upload(@RequestParam("file") MultipartFile file) {
        if (!file.isEmpty()) {
            try {
                BufferedOutputStream out = new BufferedOutputStream(
                        new FileOutputStream(new File(
                                file.getOriginalFilename())));
                System.out.println(file.getOriginalFilename());
                System.out.println(file.getBytes());
                out.write((file.getBytes()));
                out.flush();
                out.close();
            } catch (FileNotFoundException e) {
                e.printStackTrace();
                return "上传失败" + e.getMessage();
            } catch (IOException e) {
                e.printStackTrace();
                return "上传失败" + e.getMessage();
            }
            System.out.println("上传成功");
            return "上传成功";
        } else {
            return "文件为空";
        }
    }

    @CrossOrigin
    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public String upload(HttpServletRequest request) throws IOException {
        MultipartHttpServletRequest params=((MultipartHttpServletRequest) request);
        MultipartFile imgfile = params.getFile("imgfile");
        String base64image = Base64.getEncoder().encodeToString(imgfile.getBytes());
//        MultipartFile vidfile = params.getFile("vidfile");
        String entername = params.getParameter("entername");
        String title = params.getParameter("title");
        String detail = params.getParameter("detail");
        System.out.println(entername+title+detail);
        Ad a = new Ad();
//        a.setPicture(imgfile.getBytes());
//        a.setVideo(vidfile.getBytes());
        a.setEntername(entername);
        a.setDetail(detail);
        a.setTitle(title);
        a.setBase64picture(base64image);
        adRepository.save(a);

        return "upload success";
    }

    @CrossOrigin
    @RequestMapping("/getad")
    public List<Ad> getAd() {
        return adRepository.findAll();
    }
}
