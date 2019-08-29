package com.example.user.travelnotes.repository;

import com.example.user.travelnotes.entity.Travelnote;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface TravelnoteRepository extends MongoRepository<Travelnote,Long> {
    Optional<Travelnote> findByUid(Long uid);
    List<Travelnote> findAllByState(int state);
    List<Travelnote> findAllByUid(Long uid);
}
