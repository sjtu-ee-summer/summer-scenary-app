package com.example.translator.controller;

import com.example.translator.entity.TranslatorStatusEntity;
import com.example.translator.entity.TranslatorTextEntity;
import com.example.translator.repository.TranslatorProfileRepository;
import com.example.translator.repository.TranslatorStatusRepository;
import com.example.translator.repository.TranslatorTextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/translate")
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
        TranslatorTextEntity T = translatorTextRepository.findTranslatorTextEntityByValidIsTrue();
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

}
