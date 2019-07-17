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
import org.graalvm.compiler.nodes.extended.ValueAnchorNode;
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

    @GetMapping("/text/{sentence}")
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

    @PostMapping("/photo")
    public String getPicTranslation(@RequestParam("picture") String picture, @RequestParam("id") Long id) throws IOException {
        TranslatePicture translatePicture = new TranslatePicture();
        TranslatePicEntity pic = new TranslatePicEntity();

        String result = translatePicture.main(picture);
        System.out.println("1");
        pic.setImage(picture);
        System.out.println("2");
        pic.setResult(result);
        pic.setUser_id(id);
        System.out.println("3");
        translatePicRepository.save(pic);
        System.out.println("4");
        return result;
    }

    @PostMapping("/voice")
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

    @RequestMapping("/pichit/{id}")
    public List<TranslatePicEntity> TransPicHis(@PathVariable(value = "id") Long id) {
        return translatePicRepository.findAllByUser_id(id);
    }


    @RequestMapping("/texthis/{id}")
    public List<TranslateTextEntity> TransTextHis(@PathVariable(value = "id") Long id)
    {
        return translateTextRepository.findAllByUser_id(id);
    }

    @RequestMapping("/voichis/{id}")
    public List<TranslateVoiceEntity> TransVoisHist(@PathVariable(value = "id") Long id)
    {
        return translateVoiceRepository.findAllByUser_id(id);
    }
}
