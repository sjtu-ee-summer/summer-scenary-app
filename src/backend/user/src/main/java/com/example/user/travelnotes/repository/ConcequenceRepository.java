package com.example.user.travelnotes.repository;

import com.example.user.travelnotes.entity.Concequence;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConcequenceRepository extends MongoRepository<Concequence,Long> {
}
