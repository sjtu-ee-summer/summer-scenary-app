package com.example.imgidentify.Repository;

import com.example.imgidentify.Entity.idelmkhis;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IdelmkhisRepository extends CrudRepository<idelmkhis,Long> {
    List<idelmkhis> findAllByUser_id(Long user_id);
}
