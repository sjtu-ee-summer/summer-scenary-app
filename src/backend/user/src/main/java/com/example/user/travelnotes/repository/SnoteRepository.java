package com.example.user.travelnotes.repository;

import com.example.user.travelnotes.entity.Snote;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface SnoteRepository extends MongoRepository<Snote,Long> {
    Optional<Snote> findByUid(int uid);
    boolean existsByUid(int uid);
    void deleteAllByUid(int uid);
}
