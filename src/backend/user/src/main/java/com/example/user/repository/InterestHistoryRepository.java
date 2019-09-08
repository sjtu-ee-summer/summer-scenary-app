package com.example.user.repository;

import com.example.user.entity.interestHistory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface InterestHistoryRepository extends CrudRepository<interestHistory, Long> {
    Set<interestHistory> findAllByUser_id(long id);

    Set<interestHistory> findTop2ByUser_idOrderByIdDesc(long id);

    interestHistory findTopByUser_idOrderByIdDesc(long id);

    Long countAll();

}
