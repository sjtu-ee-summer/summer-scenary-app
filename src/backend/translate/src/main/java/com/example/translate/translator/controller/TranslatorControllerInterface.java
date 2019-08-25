package com.example.translate.translator.controller;

import com.example.translate.translator.entity.TranslatorStatusEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/translator")
public interface TranslatorControllerInterface {

    // 专家接单（只能接最旧的单子）
    @CrossOrigin
    @RequestMapping("/getjob")
    TranslatorStatusEntity getJob(@RequestParam Long translatorid);

    // 用户结束专家翻译并给评分 eventid 是 /startjob 返回的 id
    @CrossOrigin
    @RequestMapping("/endjob")
    String endJob(@RequestParam Long eventid, @RequestParam double rating);

    // 用户要求专家服务
    @CrossOrigin
    @RequestMapping("/startjob")
    TranslatorStatusEntity startJob(@RequestParam Long userid);

    // 专家查看是否有工作 有工作返回true, 没有返回false
    @CrossOrigin
    @RequestMapping("/checkjob")
    String checkAvailableJob();

    // 看用户所有的专家单子
    @CrossOrigin
    @RequestMapping("/seeall/{userid}")
    List<TranslatorStatusEntity> seeAll(@PathVariable Long userid);

    // 专家注册
    @CrossOrigin
    @RequestMapping("/registertranslator")
    String registerTranslator(@RequestParam String username, @RequestParam String password);

    // 专家登入
    // Upon successful signin, return translator_id to frontend. Frontend should store this translator_id to be used on other services
    // returns 0 or exception error on failed signin
    @RequestMapping("/signin")
    Long signin(@RequestParam String username, @RequestParam String password);

}
