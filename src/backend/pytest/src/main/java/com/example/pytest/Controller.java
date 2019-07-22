package com.example.pytest;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStream;

@RestController
public class Controller {

    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }


    @RequestMapping("/py")
    public String py(@RequestParam String url) throws IOException, InterruptedException {
        String exe = "python3";
        String command = "./crawlertest.py";
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
