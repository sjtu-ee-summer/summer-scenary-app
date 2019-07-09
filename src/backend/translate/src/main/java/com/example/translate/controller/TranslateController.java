package com.example.translate.controller;

import com.example.translate.entity.Text;
import com.example.translate.service.TranslateText;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
public class TranslateController {



    @GetMapping("/translate/text/{sentence}")
    public String getTranslation(@PathVariable String sentence) throws IOException {
//        return userRepository.findById(id).orElse(null);

        Text text = new Text();
        text.setText(sentence);

        TranslateText translateText = new TranslateText();

        return translateText.main(text);

    }
}
