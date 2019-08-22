package com.example.translate.translator.controller;

import com.example.translate.translator.entity.TranslatorStatusEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/translator")
public interface TranslatorControllerInterface {

    // 专家接单（只能接最旧的单子）
    @CrossOrigin
    @RequestMapping("/getjob")
    TranslatorStatusEntity getJob();

    //
    @CrossOrigin
    @RequestMapping("/sendresult")
    String sendResult(@RequestParam String result, @RequestParam Long textId,
                      @RequestParam Long translatorId);

    // 用户要求专家服务
    @CrossOrigin
    @RequestMapping("/setjob")
    String setJob(@RequestParam Long id, @RequestParam String text);

    // 看用户所有的专家单子
    @CrossOrigin
    @RequestMapping("/seeall/{id}")
    List<TranslatorStatusEntity> seeAll(@PathVariable Long id);

    // 专家注册
    @CrossOrigin
    @RequestMapping("/registertranslator")
    Long registertranslator(@RequestParam String name, @RequestParam String password);

    // 专家登入
    @RequestMapping("/signin")
    boolean signin(@RequestParam String username, @RequestParam String password);
}
