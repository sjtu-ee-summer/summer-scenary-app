package com.example.travel.Repository;

import com.example.travel.Entity.Travel;
import org.springframework.data.repository.CrudRepository;

public interface TravelRepository extends CrudRepository<Travel,Long> {
}
