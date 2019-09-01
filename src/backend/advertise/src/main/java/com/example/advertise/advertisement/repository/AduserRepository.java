package com.example.advertise.advertisement.repository;

import com.example.advertise.advertisement.entity.Aduser;
import org.springframework.data.repository.CrudRepository;

public interface AduserRepository extends CrudRepository<Aduser,Long> {
    Aduser findByUsername(String username);
}
