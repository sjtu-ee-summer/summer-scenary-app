package com.example.imgidentify.Repository;

import com.example.imgidentify.Entity.Ideobjhi;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IdeobjhisRepository extends CrudRepository<Ideobjhi,Long> {
    List<Ideobjhi> findAllByUid(Long user_id);
}
