package com.example.translator.entity;

import javax.persistence.*;

@Entity
public class TranslatorStatusEntity {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private long textId;

    private long translatorId;

    private String timestamp;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getTextId() {
        return textId;
    }

    public void setTextId(long textId) {
        this.textId = textId;
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
}
