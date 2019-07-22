package com.example.pytest;


import org.springframework.web.bind.annotation.RequestMapping;
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
    public String py() throws IOException, InterruptedException {
        String exe = "python";
        String command = "./1.py";
        String num1 = "1";
        String num2 = "2";
        String[] cmdArr = new String[] {exe, command, num1, num2};
        Process process = Runtime.getRuntime().exec(cmdArr);
        InputStream is = process.getInputStream();
        DataInputStream dis = new DataInputStream(is);
        String str = dis.readLine();
        process.waitFor();
        System.out.println(str);
        return str;
    }
}
