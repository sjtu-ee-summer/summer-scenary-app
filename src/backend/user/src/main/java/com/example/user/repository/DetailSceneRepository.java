package com.example.user.repository;

import com.example.user.entity.detailscene;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailSceneRepository extends CrudRepository<detailscene, Long> {
    detailscene findById(long id);
}
