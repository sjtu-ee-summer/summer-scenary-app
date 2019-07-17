package com.example.translate.repository;

import com.example.translate.entity.TranslatePicEntity;
import com.example.translate.entity.TranslateTextEntity;
import org.springframework.data.repository.CrudRepository;

public interface TranslatePicRepository extends CrudRepository<TranslatePicEntity,Long> {

}
