package com.example.translate.translator.controller;

import com.example.translate.translator.entity.*;
import com.example.translate.translator.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@EnableResourceServer
public class TranslatorController implements TranslatorControllerInterface{

    @Autowired
    private TranslatorProfileRepository translatorProfileRepository;
    @Autowired
    private TranslatorStatusRepository translatorStatusRepository;

    public TranslatorStatusEntity getJob() {
        TranslatorStatusEntity T = translatorStatusRepository.findFirstByValidIsTrue();
//        String t = T.getText();
        T.setValid(false); // means job's taken!
        translatorStatusRepository.save(T);

        return T;
    }

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

    public String setJob(@RequestParam Long id) {
        TranslatorStatusEntity translatorStatusEntity = new TranslatorStatusEntity();
        translatorStatusEntity.setUserId(id);
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        translatorStatusEntity.setTimestamp(dtf.format(now));

        translatorStatusRepository.save(translatorStatusEntity);

        return "success";
    }

    public List<TranslatorStatusEntity> seeAll(@PathVariable Long id) {
        List<TranslatorStatusEntity> translatorStatusEntity = translatorStatusRepository.findTranslatorStatusEntitiesByUserId(id);

        return translatorStatusEntity;
    }

    public Long registertranslator(@RequestParam String name, @RequestParam String password) {
        TranslatorProfileEntity translatorProfileEntity = new TranslatorProfileEntity();
        translatorProfileEntity.setName(name);
        translatorProfileEntity.setPassword(password);
        translatorProfileRepository.save(translatorProfileEntity);
        translatorProfileEntity = translatorProfileRepository.findByName(name);
        Long translatorJobID = translatorProfileEntity.getId();

        return translatorJobID; // returns Job ID upon successful registration
    }

    public boolean signin(@RequestParam String username, @RequestParam String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        TranslatorProfileEntity u = translatorProfileRepository.findByName(username);
        if (u == null) {
            return false;
        } else if (encoder.matches(password,u.getPassword())) {
            return true;
        }

        return false;
    }

}
