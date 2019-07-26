package com.example.travel.Entity;

import javax.persistence.*;
import javax.validation.constraintvalidation.SupportedValidationTarget;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "travel")
public class Travel {
    @Id
    @Column(name = "id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String day;

    private String amount;

    private String howlong;

    private String intro;


//    @ManyToOne
//    @JoinColumn(name = "city_id")
//    private City city;

    @OneToMany()
    private List<Scenary> scenarySet;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getHowlong() {
        return howlong;
    }

    public void setHowlong(String howlong) {
        this.howlong = howlong;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public List<Scenary> getScenarySet() {
        return scenarySet;
    }

    public void setScenarySet(List<Scenary> scenarySet) {
        this.scenarySet = scenarySet;
    }
}
