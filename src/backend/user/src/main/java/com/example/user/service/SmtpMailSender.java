package com.example.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;

@Component
public class SmtpMailSender {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendMail(String to, String subject, String body) throws MessagingException {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("1964305379@qq.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

//        helper.addAttachment("filename", new ClassPathResource("\\static\\path")); //You can add email attachment
        javaMailSender.send(message);
    }
}
