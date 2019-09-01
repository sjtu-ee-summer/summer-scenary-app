package com.example.travel;


import com.example.travel.Entity.City;
import com.example.travel.Entity.Travel;
import com.example.travel.Repository.CityRepository;
import com.example.travel.Repository.ScenaryRepository;
import com.example.travel.Repository.TravelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/travel")
public class Controller {

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private ScenaryRepository scenaryRepository;

    @Autowired
    private TravelRepository travelRepository;

    @RequestMapping("/fdcity")
    public City findcity(@RequestParam Long id)  {
        return cityRepository.findById(id).get();
    }

    @RequestMapping("/hello")
    public Optional<City> he(@RequestParam String username)
    {
        return cityRepository.findByName(username);
    }

    @RequestMapping("/fdtra")
    public Optional<Travel> findtra(@RequestParam Long id){
        return travelRepository.findById(id);
    }

}
