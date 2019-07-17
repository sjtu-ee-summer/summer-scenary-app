package com.example.translate.repository;

import com.example.translate.entity.TranslateTextEntity;
import com.example.translate.entity.TranslateVoiceEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TranslateVoiceRepository extends CrudRepository<TranslateVoiceEntity,Long> {
    List<TranslateVoiceEntity> findAllByUser_id(Long user_id);
}
