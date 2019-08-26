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

    public TranslatorStatusEntity getJob(@RequestParam Long translatorid) {
        TranslatorStatusEntity T = translatorStatusRepository.findFirstByValidIsTrue();
//        String t = T.getText();
        T.setValid(false); // means job's taken!
        // start time count
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        T.setTimestart(dtf.format(now));
        T.setTranslatorId(translatorid);
        translatorStatusRepository.save(T);

        return T;
    }

    public String checkAvailableJob() {
        TranslatorStatusEntity T = translatorStatusRepository.findFirstByValidIsTrue();

        if (T == null) {
            return "false";
        }

        return "true";
    }

    public String endJob(@RequestParam Long eventid, @RequestParam double rating) {
        TranslatorStatusEntity T = translatorStatusRepository.findTranslatorStatusEntityById(eventid);
        // record end time
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        T.setTimeend(dtf.format(now));
        // set rating
        T.setRating(rating);
        translatorStatusRepository.save(T);

        // set translator average rating
        TranslatorProfileEntity translator = translatorProfileRepository.findById(T.getTranslatorId());
        translator.setRating(((translator.getRating()*(translator.getNoOfJobTaken())) + rating) / (translator.getNoOfJobTaken()+1));
        translator.setNoOfJobTaken(translator.getNoOfJobTaken() + 1);
        translatorProfileRepository.save(translator);

        return "success";

        // todo exception for repeated rating
    }

    public TranslatorStatusEntity startJob(@RequestParam Long userid) {
        TranslatorStatusEntity translatorStatusEntity = new TranslatorStatusEntity();
        translatorStatusEntity.setUserId(userid);
        translatorStatusRepository.save(translatorStatusEntity);

        TranslatorStatusEntity temp = translatorStatusRepository.findTranslatorStatusEntityById(translatorStatusEntity.getId());

        return temp;
    }

    public List<TranslatorStatusEntity> seeAll(@PathVariable Long userid) {
        List<TranslatorStatusEntity> translatorStatusEntity = translatorStatusRepository.findTranslatorStatusEntitiesByUserId(userid);

        return translatorStatusEntity;
    }

    public String registerTranslator(@RequestParam String username, @RequestParam String password) {
        // do repeat checking
        TranslatorProfileEntity T1 = translatorProfileRepository.findByUsername(username);
        if (T1 != null) {
            return "username already exist";
        }

        TranslatorProfileEntity translatorProfileEntity = new TranslatorProfileEntity();
        translatorProfileEntity.setName(username);
        translatorProfileEntity.setPassword(password);

        // concurrency checking
        TranslatorProfileEntity T2 = translatorProfileRepository.findByUsername(username);
        if (T2 != null) {
            return "username already exist";
        }

        translatorProfileRepository.save(translatorProfileEntity);

        return "success";
    }

    public Long signin(@RequestParam String username, @RequestParam String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        TranslatorProfileEntity u = translatorProfileRepository.findByUsername(username);

        if (encoder.matches(password, u.getPassword())) {
            Long translator_id = u.getId();
            return translator_id;
        }

        return Long.valueOf(0);
    }

}
