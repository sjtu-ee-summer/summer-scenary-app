package com.example.translate.controller;

import com.example.translate.entity.TranslatePicEntity;
import com.example.translate.entity.TranslateTextEntity;
import com.example.translate.entity.TranslateVoiceEntity;
import com.example.translate.repository.TranslatePicRepository;
import com.example.translate.repository.TranslateTextRepository;
import com.example.translate.repository.TranslateVoiceRepository;
import com.example.translate.service.TranslatePicture;
import com.example.translate.service.TranslateText;
import com.example.translate.service.TranslateVoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@EnableResourceServer
public class TranslateController {

    @Autowired
    private TranslateTextRepository translateTextRepository;
    private TranslatePicRepository translatePicRepository;
    private TranslateVoiceRepository translateVoiceRepository;

    @GetMapping("/translate/text/{sentence}")
    public String getTranslation(@PathVariable String sentence,@RequestParam Long id) throws IOException {
        TranslateText translateText = new TranslateText();
        TranslateTextEntity text = new TranslateTextEntity();

        String result = translateText.main(sentence);
        text.setText(sentence);
        text.setResult(result);
        text.setUser_id(id);
        translateTextRepository.save(text);

        return result;
    }

    @PostMapping("/translate/photo")
    public String getPicTranslation(@RequestParam("picture") String picture, @RequestParam("id") Long id) throws IOException {
        TranslatePicture translatePicture = new TranslatePicture();
        TranslatePicEntity pic = new TranslatePicEntity();

        String result = translatePicture.main(picture);
        pic.setImage(picture);
        pic.setResult(result);
        pic.setUser_id(id);
        translatePicRepository.save(pic);

        return result;
    }

    @PostMapping("/translate/voice")
    public String getVoiceTranslation(@RequestParam("voice") String voice, @RequestParam("id") Long id) throws IOException {
        TranslateVoice translateVoice = new TranslateVoice();
        TranslateVoiceEntity v = new TranslateVoiceEntity();

        String result = translateVoice.main(voice);
        v.setVoice(voice);
        v.setResult(result);
        v.setUser_id(id);
        translateVoiceRepository.save(v);
        return result;
    }
}
