package com.example.translate.translate.repository;

import com.example.translate.translate.entity.TranslatePicEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TranslatePicRepository extends CrudRepository<TranslatePicEntity,Long> {
    List<TranslatePicEntity> findAllByUid(Long user_id);
}
