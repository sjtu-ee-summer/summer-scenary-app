package com.example.translate.translate.controller;

import com.example.translate.translate.entity.TranslatePicEntity;
import com.example.translate.translate.entity.TranslateTextEntity;
import com.example.translate.translate.entity.TranslateVoiceEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RequestMapping("/translate")
public interface TranslateControllerInterface {

    @PostMapping("/text")
    String getTranslation(@RequestParam String sentence, @RequestParam Long id,
                          @RequestParam String from, @RequestParam String to) throws IOException;

    @PostMapping("/photo")
    public String getPicTranslation(@RequestParam("picture") String picture, @RequestParam("id") Long id,
                                    @RequestParam String from, @RequestParam String to) throws Exception;

    @PostMapping("/voice")
    public String getVoiceTranslation(@RequestParam("voice") String voice, @RequestParam("id") Long id,
                                      @RequestParam String from, @RequestParam String to) throws IOException;

    @RequestMapping("/pichit/{id}")
    public List<TranslatePicEntity> TransPicHis(@PathVariable(value = "id") Long id);

    @RequestMapping("/texthis/{id}")
    public List<TranslateTextEntity> TransTextHis(@PathVariable(value = "id") Long id);

    @RequestMapping("/voichis/{id}")
    public List<TranslateVoiceEntity> TransVoisHist(@PathVariable(value = "id") Long id);
}
