package com.example.translate.translator.controller;

import com.example.translate.translator.entity.*;
import com.example.translate.translator.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@EnableResourceServer
@RequestMapping("/translator")
public class TranslatorController {

    @Autowired
    private TranslatorProfileRepository translatorProfileRepository;
    @Autowired
    private TranslatorStatusRepository translatorStatusRepository;
    @Autowired
    private TranslatorTextRepository translatorTextRepository;

    @CrossOrigin
    @RequestMapping("/getjob")
    public TranslatorTextEntity getJob() {
        TranslatorTextEntity T = translatorTextRepository.findFirstByValidIsTrue();
//        String t = T.getText();

        return T;
    }

    @CrossOrigin
    @PostMapping("/sendresult")
    public String sendResult(@RequestParam String result, @RequestParam Long textId,
                             @RequestParam Long translatorId) {
        TranslatorTextEntity translatorTextEntity = translatorTextRepository.findTranslatorTextEntityById(textId);
        TranslatorStatusEntity translatorStatusEntity = new TranslatorStatusEntity();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();

        if (result != "") {
            translatorTextEntity.setResult(result);
            translatorTextEntity.setValid(false);
            translatorTextRepository.save(translatorTextEntity);
            translatorStatusEntity.setTranslatorId(translatorId);
            translatorStatusEntity.setTextId(textId);
            translatorStatusEntity.setTimestamp(dtf.format(now));
            translatorStatusRepository.save(translatorStatusEntity);

            return "success";
        }

        return "failed";
    }

    @CrossOrigin
    @PostMapping("/setjob")
    public String setJob(@RequestParam Long id, @RequestParam String text) {
        TranslatorTextEntity translatorTextEntity = new TranslatorTextEntity();
        translatorTextEntity.setValid(true);
        translatorTextEntity.setText(text);
        translatorTextEntity.setUserId(id);
        translatorTextRepository.save(translatorTextEntity);

        return "success";
    }

    @CrossOrigin
    @GetMapping("/refresh/{id}")
    public List<TranslatorTextEntity> refresh(@PathVariable Long id) {
        List<TranslatorTextEntity> translatorTextEntity = translatorTextRepository.findTranslatorTextEntitiesByUserId(id);

        if (translatorTextEntity != null) {
            return translatorTextEntity;
        }

        return null;
    }

    @CrossOrigin
    @PostMapping("/registertranslator")
    public String registertranslator(@RequestParam String name) {
        TranslatorProfileEntity translatorProfileEntity = new TranslatorProfileEntity();
        translatorProfileEntity.setName(name);
        translatorProfileRepository.save(translatorProfileEntity);

        return "success";
    }

}
