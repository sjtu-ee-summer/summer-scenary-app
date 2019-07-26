package com.example.travel.Repository;

import com.example.travel.Entity.City;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CityRepository extends CrudRepository<City,Long> {
    Optional<City> findByName(String name);
}
