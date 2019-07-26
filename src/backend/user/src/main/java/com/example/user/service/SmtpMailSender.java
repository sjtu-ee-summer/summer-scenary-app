package com.example.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Component
public class SmtpMailSender {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendMail(String to, String subject, String content) throws MessagingException {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("1964305379@qq.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(content);

//        helper.addAttachment("filename", new ClassPathResource("\\static\\path")); //You can add email attachment
        javaMailSender.send(message);
    }

    public void sendHtmlMail(String to, String subject, String content) {
        MimeMessage message=javaMailSender.createMimeMessage();
        try {
            //true表示需要创建一个multipart message
            MimeMessageHelper helper=new MimeMessageHelper(message,true);
            helper.setFrom("1964305379@qq.com");
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(content,true);
            javaMailSender.send(message);
        }catch (Exception e){
            System.out.println("html email failed!");
        }
    }
}
