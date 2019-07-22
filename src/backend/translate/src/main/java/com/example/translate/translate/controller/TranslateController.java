package com.example.translate.translate.controller;

import com.example.translate.translate.entity.*;
import com.example.translate.translate.repository.*;
import com.example.translate.translate.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@EnableResourceServer
@RequestMapping("/translate")
public class TranslateController {

    @Autowired
    private TranslateTextRepository translateTextRepository;
    @Autowired
    private TranslatePicRepository translatePicRepository;
    @Autowired
    private TranslateVoiceRepository translateVoiceRepository;

    @PostMapping("/text")
    public String getTranslation(@RequestParam String sentence,@RequestParam Long id) throws IOException {
        TranslateText translateText = new TranslateText();
        TranslateTextEntity text = new TranslateTextEntity();

        String result = translateText.main(sentence);
        text.setText(sentence);
        text.setResult(result);
        text.setUid(id);
        translateTextRepository.save(text);

        return result;
    }

    @PostMapping("/photo")
    public String getPicTranslation(@RequestParam("picture") String picture, @RequestParam("id") Long id) throws IOException {
        TranslatePicture translatePicture = new TranslatePicture();
        TranslatePicEntity pic = new TranslatePicEntity();

        String result = translatePicture.main(picture);
        pic.setImage(picture);
        pic.setResult(result);
        pic.setUid(id);
        translatePicRepository.save(pic);

        return result;
    }

    @PostMapping("/voice")
    public String getVoiceTranslation(@RequestParam("voice") String voice, @RequestParam("id") Long id) throws IOException {
        TranslateVoice translateVoice = new TranslateVoice();
        TranslateVoiceEntity v = new TranslateVoiceEntity();

        String result = translateVoice.main(voice);
        v.setVoice(voice);
        v.setResult(result);
        v.setUid(id);
        translateVoiceRepository.save(v);
        return result;
    }

    @RequestMapping("/pichit/{id}")
    public List<TranslatePicEntity> TransPicHis(@PathVariable(value = "id") Long id) {
        return translatePicRepository.findAllByUid(id);
    }


    @RequestMapping("/texthis/{id}")
    public List<TranslateTextEntity> TransTextHis(@PathVariable(value = "id") Long id)
    {
        return translateTextRepository.findAllByUid(id);
    }

    @RequestMapping("/voichis/{id}")
    public List<TranslateVoiceEntity> TransVoisHist(@PathVariable(value = "id") Long id)
    {
        return translateVoiceRepository.findAllByUid(id);
    }
}
