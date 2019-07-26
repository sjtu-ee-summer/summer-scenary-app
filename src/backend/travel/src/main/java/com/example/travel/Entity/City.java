package com.example.travel.Entity;


import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "city")
public class City {

    @Id
    @Column(name = "id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany()
    private List<Travel> travelSet;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Travel> getTravelSet() {
        return travelSet;
    }

    public void setTravelSet(List<Travel> travelSet) {
        this.travelSet = travelSet;
    }
}
