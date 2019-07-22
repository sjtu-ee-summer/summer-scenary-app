package com.example.translate.translator.repository;

import com.example.translate.translator.entity.TranslatorTextEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TranslatorTextRepository extends CrudRepository<TranslatorTextEntity,Long> {
    TranslatorTextEntity findTranslatorTextEntityByValidIsTrue();
    TranslatorTextEntity findFirstByValidIsTrue();

    TranslatorTextEntity findTranslatorTextEntityById(Long id);

    List<TranslatorTextEntity> findTranslatorTextEntitiesByUserId(Long userid);
}
