package com.example.imgidentify.Repository;

import com.example.imgidentify.Entity.Ideobjhi;
import com.example.imgidentify.Entity.Idelmkhi;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IdelmkhisRepository extends CrudRepository<Idelmkhi,Long> {
    List<Idelmkhi> findAllByUid(Long user_id);
}
