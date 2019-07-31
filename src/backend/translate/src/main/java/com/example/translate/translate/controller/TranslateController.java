package com.example.translate.translate.controller;

import com.example.translate.translate.entity.*;
import com.example.translate.translate.repository.*;
import com.example.translate.translate.service.*;
import com.example.translate.translate.service.pictureTextAdder.TextAdder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@EnableResourceServer
public class TranslateController implements TranslateControllerInterface{

    @Autowired
    private TranslateTextRepository translateTextRepository;
    @Autowired
    private TranslatePicRepository translatePicRepository;
    @Autowired
    private TranslateVoiceRepository translateVoiceRepository;

    public String getTranslation(@RequestParam String sentence, @RequestParam Long id,
                                 @RequestParam String from, @RequestParam String to) throws IOException {
        TranslateText translateText = new TranslateText();
        TranslateTextEntity text = new TranslateTextEntity();

        String result = translateText.main(sentence, from, to);
        text.setText(sentence);
        text.setResult(result);
        text.setUid(id);
        translateTextRepository.save(text);

        return result;
    }

    public String getPicTranslation(@RequestParam("picture") String picture, @RequestParam("id") Long id,
                                    @RequestParam String from, @RequestParam String to) throws Exception {
        TranslatePicture translatePicture = new TranslatePicture();
        TranslatePicEntity pic = new TranslatePicEntity();
        TextAdder textAdder = new TextAdder();

        String json = translatePicture.main(picture, from, to); // json returned from API
        String result = textAdder.main(json, picture);
        pic.setImage(picture);
        pic.setResult(json);
        pic.setUid(id);
        pic.setResultInBase64(result);
        translatePicRepository.save(pic);

        return result;
    }

    public String getVoiceTranslation(@RequestParam("voice") String voice, @RequestParam("id") Long id,
                                      @RequestParam String from, @RequestParam String to) throws IOException {
        TranslateVoice translateVoice = new TranslateVoice();
        TranslateVoiceEntity v = new TranslateVoiceEntity();

        String result = translateVoice.main(voice, from, to);
        v.setVoice(voice);
        v.setResult(result);
        v.setUid(id);
        translateVoiceRepository.save(v);

        return result;
    }

    public List<TranslatePicEntity> TransPicHis(@PathVariable(value = "id") Long id) {
        return translatePicRepository.findAllByUid(id);
    }

    public List<TranslateTextEntity> TransTextHis(@PathVariable(value = "id") Long id)
    {
        return translateTextRepository.findAllByUid(id);
    }

    public List<TranslateVoiceEntity> TransVoisHist(@PathVariable(value = "id") Long id)
    {
        return translateVoiceRepository.findAllByUid(id);
    }
}
