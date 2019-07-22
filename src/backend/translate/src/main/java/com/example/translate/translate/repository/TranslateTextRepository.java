package com.example.translate.translate.repository;

import com.example.translate.translate.entity.TranslateTextEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TranslateTextRepository extends CrudRepository<TranslateTextEntity,Long> {
    List<TranslateTextEntity> findAllByUid(Long user_id);
}
