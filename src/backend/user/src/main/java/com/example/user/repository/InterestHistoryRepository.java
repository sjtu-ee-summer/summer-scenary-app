package com.example.user.repository;

import com.example.user.entity.interestHistory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

public interface InterestHistoryRepository extends CrudRepository<interestHistory, Long> {
    Set<interestHistory> findAllByUserId(long id);

    interestHistory findLastByUserId(long id);

//    Long countAll();
}
