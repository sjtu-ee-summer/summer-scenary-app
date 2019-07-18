package com.example.translate.repository;

import com.example.translate.entity.TranslatePicEntity;
import com.example.translate.entity.TranslateTextEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TranslatePicRepository extends CrudRepository<TranslatePicEntity,Long> {
    List<TranslatePicEntity> findAllByUid(Long user_id);
}
