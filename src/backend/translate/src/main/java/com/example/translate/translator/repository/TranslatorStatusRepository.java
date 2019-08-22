package com.example.translate.translator.repository;

import com.example.translate.translator.entity.TranslatorStatusEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TranslatorStatusRepository extends CrudRepository<TranslatorStatusEntity,Long> {
    List<TranslatorStatusEntity> findTranslatorStatusEntitiesByUserId(Long userid);

    TranslatorStatusEntity findFirstByValidIsTrue();
}
