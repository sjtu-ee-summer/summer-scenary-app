package com.example.test;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

//@org.springframework.stereotype.Controller

@RestController
public class controller
{

    @RequestMapping("/date")
    public String date() {
        Date d = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String dateNowStr = sdf.format(d);
//        java.sql.Date vipdate = java.sql.Date.valueOf("2019-6-27");
//        Calendar calendar = Calendar.getInstance();
//        calendar.setTime(vipdate);
//        calendar.add(Calendar.DATE,4);
//        Date end = calendar.getTime();
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE,30);
        return calendar.getTime().toString();

    }


    @RequestMapping("/he")
    public String time() {
        Date d = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String dateNowStr = sdf.format(d);
        return dateNowStr;
    }

    @RequestMapping(value = "/baike",
            produces = "application/json;charset=utf-8")
    public String baike(@RequestParam String keyword) throws IOException, InterruptedException {
        String exe = "python";
        String command = "./baike.py";
        String[] cmdArr = new String[] {exe, command,keyword};
        Process process = Runtime.getRuntime().exec(cmdArr);
//        InputStream is = process.getInputStream();
//        DataInputStream dis = new DataInputStream(is);
//        String a,str;
//        str="";
//        while((a = dis.readLine())!=null){
//            str+=a;
//        }
        process.waitFor();
        BufferedReader in = new BufferedReader(new FileReader("py"));
        String str,a;
        str="";
        while((a=in.readLine())!=null){
            str = str + a;
        }


//        String ppp = "b'\\xe5\\xa4\\xa9\\xe5\\xae\\x89\\xe9\\x97\\xa8'";
//        byte[] b = ppp.getBytes();
//        String sa = new String(b,"utf-8");
//        System.out.println(sa);
//        System.out.println(URLDecoder.decode(ppp, "utf-8"));
//        String ab = "天安门";
//        byte[] bb = ab.getBytes("utf-8");
//        System.out.println(bb);
        //System.out.println(new String(str.getBytes("ISO-8859-1"),"UTF-8"));
//        System.out.println(str);
        //str = new String (str.getBytes("utf-8"),"GBK");
        System.out.println(str);
        return str;
    }

}

