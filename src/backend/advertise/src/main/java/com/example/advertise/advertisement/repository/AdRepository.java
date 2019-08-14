package com.example.advertise.advertisement.repository;

import com.example.advertise.advertisement.entity.Ad;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AdRepository extends CrudRepository<Ad,Long> {

    List<Ad> findAll();
}
