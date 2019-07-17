package com.example.imgidentify.Repository;

import com.example.imgidentify.Entity.Ideobjhis;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IdeobjhisRepository extends CrudRepository<Ideobjhis,Long> {
    List<Ideobjhis> findAllByUser_id(Long user_id);
}
