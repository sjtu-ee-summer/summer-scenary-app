package com.example.advertise.repository;

import com.example.advertise.Entity.Ad;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AdRepository extends CrudRepository<Ad,Long> {

    List<Ad> findAll();
}
