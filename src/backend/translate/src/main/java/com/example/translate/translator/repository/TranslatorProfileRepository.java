package com.example.translate.translator.repository;

import com.example.translate.translator.entity.TranslatorProfileEntity;
import org.springframework.data.repository.CrudRepository;

public interface TranslatorProfileRepository extends CrudRepository<TranslatorProfileEntity,Long> {

    TranslatorProfileEntity findByUsername(String username);

    TranslatorProfileEntity findById(long id);

}
