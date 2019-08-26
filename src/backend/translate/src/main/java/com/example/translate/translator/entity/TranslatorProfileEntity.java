package com.example.translate.translator.entity;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;

@Entity
public class TranslatorProfileEntity {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String username;

    private String password;

    private double rating = 0.0;

    private int noOfJobTaken = 0;

    public String getName() {
        return username;
    }

    public void setName(String username) {
        this.username = username;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        this.password = encoder.encode(password);
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public int getNoOfJobTaken() {
        return noOfJobTaken;
    }

    public void setNoOfJobTaken(int noOfJobTaken) {
        this.noOfJobTaken = noOfJobTaken;
    }
}
