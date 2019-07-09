package com.example.translate.controller;

import com.example.translate.service.TranslatePicture;
import com.example.translate.service.TranslateText;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
public class TranslateController {



    @GetMapping("/translate/text/{sentence}")
    public String getTranslation(@PathVariable String sentence) throws IOException {
        TranslateText translateText = new TranslateText();

        return translateText.main(sentence);
    }

    @PostMapping("/translate/photo")
    public String getPicTranslation(@RequestParam("picture") String picture) throws IOException {
        TranslatePicture translatePicture = new TranslatePicture();

        return translatePicture.main(picture);
    }


}
