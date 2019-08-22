package com.example.translate.translator.entity;

import javax.persistence.*;

@Entity
public class TranslatorStatusEntity {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private long userId;

    private long translatorId = 0; // initialized with 0 meaning no translator currently accept this job

    private String timestamp;

    private boolean valid = true; // initialized with true to enable job to be taken

    private int rating = 0;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getTranslatorId() {
        return translatorId;
    }

    public void setTranslatorId(long translatorId) {
        this.translatorId = translatorId;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public boolean isValid() {
        return valid;
    }

    public void setValid(boolean valid) {
        this.valid = valid;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
