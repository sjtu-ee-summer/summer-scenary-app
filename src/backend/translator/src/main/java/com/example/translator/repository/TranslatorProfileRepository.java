package com.example.translator.repository;

import com.example.translator.entity.TranslatorProfileEntity;
import org.springframework.data.repository.CrudRepository;

public interface TranslatorProfileRepository extends CrudRepository<TranslatorProfileEntity,Long> {
}
