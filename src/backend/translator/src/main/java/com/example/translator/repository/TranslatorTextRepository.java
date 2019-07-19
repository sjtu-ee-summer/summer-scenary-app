package com.example.translator.repository;

import com.example.translator.entity.TranslatorTextEntity;
import org.springframework.data.repository.CrudRepository;

public interface TranslatorTextRepository extends CrudRepository<TranslatorTextEntity,Long> {
    TranslatorTextEntity findTranslatorTextEntityByValidIsTrue();

    TranslatorTextEntity findTranslatorTextEntityById(Long id);
}
