package com.example.translate.translator.controller;

import com.example.translate.translator.entity.TranslatorTextEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/translator")
public interface TranslatorControllerInterface {

    @CrossOrigin
    @RequestMapping("/getjob")
    public TranslatorTextEntity getJob();

    @CrossOrigin
    @PostMapping("/sendresult")
    public String sendResult(@RequestParam String result, @RequestParam Long textId,
                             @RequestParam Long translatorId);

    @CrossOrigin
    @PostMapping("/setjob")
    public String setJob(@RequestParam Long id, @RequestParam String text);

    @CrossOrigin
    @GetMapping("/refresh/{id}")
    public List<TranslatorTextEntity> refresh(@PathVariable Long id);

    @CrossOrigin
    @PostMapping("/registertranslator")
    public Long registertranslator(@RequestParam String name);

}
